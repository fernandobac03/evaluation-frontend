import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../app.service';


@Component({
  selector: 'app-app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./app-start.component.css']
})
export class AppStartComponent implements OnInit {
  persona_id: string;
  num_evaluation: number;

  formmeta: FormGroup;
  submitted = false;
  titulo = 'Por Favor, responde las siguientes preguntas para continuar';

  constructor(private formBuilder: FormBuilder, private appser: AppService ) { }
  addPerson(escuela, edad, genero) {
    this.appser.addPerson(escuela, edad, genero).subscribe(
      res => { console.log("Response: "); console.log(res['body']); this.appser.changeMessage(res['body']['persona_id'])}
       /*res => { console.log("Response: ")}*/
  )
  }

  ngOnInit() {
    this.appser.currentEvaluation.subscribe(num_evaluation => this.num_evaluation = num_evaluation)

    this.formmeta = this.formBuilder.group({
      escuela: ['', Validators.required],
      edad: ['', Validators.required],
      genero: ['', Validators.required]
      /*email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(6)]]
       */
    });
  }
  get f() { return this.formmeta.controls; }

  onSubmit() {

    this.submitted = true;

    if (this.formmeta.invalid) {
      return;
    }
    /*alert('Mensaje Enviado !');*/
  }

}
