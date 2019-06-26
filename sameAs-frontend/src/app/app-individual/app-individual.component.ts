import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-app-individual',
  templateUrl: './app-individual.component.html',
  styleUrls: ['./app-individual.component.css']
})
export class AppIndividualComponent implements OnInit {
  num_evaluation: number;
  persona_id: string = '';

  constructor(private appser: AppService, private router: Router) { }




  pairs: string[];
  selected_evaluacion: string;
  selected_evaluacion_texto: string = '';
  selected_id_par: string;
  setDecision(texto, evaluacion, id_par){
    this.selected_evaluacion_texto = texto
    this.selected_evaluacion = evaluacion
    this.selected_id_par = id_par
  }
  setEvaluation() {
    if (this.persona_id == 'No Persona_ID') {
      alert("No ha ingresado sus datos")
      this.router.navigate(['/iniciar'])
    }
    else
    {
      if (this.selected_evaluacion_texto != '') {
        var r = confirm("Confirmar?");
        if (r == true) {
          this.appser.setEvaluation(this.selected_evaluacion, this.persona_id, this.selected_id_par).subscribe(res => {
            console.log("Response: ");
            console.log(res) /*res.body*/
          })
          this.appser.sumEvaluation(this.num_evaluation + 1);
          this.ngOnInit();
          this.selected_evaluacion_texto = ""
        }
      } else {
        alert("No ha seleccionado una respuesta")
      }
    }
  }


  ngOnInit() {

    this.appser.currentEvaluation.subscribe(num_evaluation => this.num_evaluation = num_evaluation)

    this.appser.currentMessage.subscribe(message => this.persona_id = message)
    this.appser
      .getPairs(1)
      .subscribe(  data => {
        this.pairs = data as string [];
      });
  }
  ngOnDestroy(){}


}
