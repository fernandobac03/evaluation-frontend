import {Component, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as jsonld from 'jsonld';
import {async} from "q";

@Component({
  selector: 'app-app-individual',
  templateUrl: './app-individual.component.html',
  styleUrls: ['./app-individual.component.css']
})
export class AppIndividualComponent implements OnInit, OnChanges, DoCheck {
  num_evaluation: number;
  persona_id: string = '';

  constructor(private appser: AppService, private router: Router) { }

  pairs: string[];
  fromendpoint: string[];
  selected_evaluacion: string;
  selected_evaluacion_texto: string = '';
  selected_id_par: string;
  querystring: string = '';
  resultToHTML: string[];
  datos =  [];

  results = [];
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
            console.log(res['body'])
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
        this.loadFullData(this.pairs);
      });
    this.appser.currentdatosPantalla.subscribe(newdata => this.datos = newdata)
  }

  loadFullData(fulldata) {
    const docexample = {
      "http://schema.org/name": "Manu Sporny",
      "http://schema.org/url": {"@id": "http://manu.sporny.org/"},
      "http://schema.org/image": {"@id": "http://manu.sporny.org/images/manu.png"}
    };
    const context = {
      foaf: 'http://xmlns.com/foaf/0.1/',
      rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
      geoec: 'http://linkeddata.ec/ontology#',
      geo: 'http://www.opengis.net/ont/geosparql#',
      schema: 'http://schema.org/',
      rdf: 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      dbpedia: 'http://dbpedia.org/ontology/',
      dbpediaproperty: 'http://dbpedia.org/property/',
      wgs84: 'http://www.w3.org/2003/01/geo/wgs84_pos#',
      owl: 'http://www.w3.org/2002/07/owl#sameAs',
      prov: 'http://www.w3.org/ns/prov#',
      geoecresource: 'http://linkeddata.ec/resource/',
      dct: 'http://purl.org/dc/terms/'
    };
    this.loadfullDataFromURI(context, fulldata[0]['uri_a'], 1);
    this.loadfullDataFromURI(context, fulldata[0]['uri_b'], 2);


  }

  loadfullDataFromURI(context, uriResource, endpointType)
    {
    this.querystring = this.appser.stringFormat('Select * where { <{0}> ?p ?o } limit 100', uriResource)
     this.appser.getFromTripleStore(endpointType, this.querystring).subscribe(data => {
      this.fromendpoint = data as unknown as string [];
      this.results  = this.fromendpoint['body']['results']['bindings'];
      const jsonldStr = JSON.parse(this.from_rdf_to_jsonld(this.results));
      console.log(jsonldStr);
      const datosaux = [];
       // tslint:disable-next-line:only-arrow-functions
      async(jsonld.compact(jsonldStr, context, function(err, compacted) {
        for (var i in compacted) {
          if (i != "@context") {
            var model = {};
            model['property'] = i;
            model['value'] = compacted[i]['@id'] ? compacted[i]['@id'] : compacted[i];
            datosaux.push(model);
          }
        }
         }));
      this.datos.push(datosaux)
       });

  }

  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
  }

  ngDoCheck(){
    setTimeout(() => {
      console.log("hello");
    }, 1000);
    //console.log('Método DoCheck lanzado');
  }


  //PARA TRANSFORMAR DATOS DEL JSON RECIBIDO DEL ENDPOINT A JSON-LD
  const jsonTemplate = ''
    + '   {'
    + ' {0} '
    + '  }';
  const jsonObjTemplate =
       '"{0}":"{1}"';
  const jsonObjIdTemplate =
    '"{0}":{1}';
  const jsonIdTemplate =
    '{ "@id":"{0}" }';

  from_rdf_to_jsonld(data)
  {
    console.log(data)
    let cadena: string = "";
    let ind=0;
    for (let resource of data) {
      ind++;
      const key = resource['p']['value'];
      const value = resource['o']['value'];
      if ( resource['o']['type'] ==  "literal")//va directamente el objeto
        cadena += this.appser.stringFormat(this.jsonObjTemplate, key, value);
      else //el objeto va de tipo uri con "@id"
        cadena += this.appser.stringFormat(this.jsonObjIdTemplate, key, this.appser.stringFormat(this.jsonIdTemplate,value));
      if (ind < data.length)
      {
        cadena += ",";
      }
  }
    return this.appser.stringFormat(this.jsonTemplate, cadena);
  }
}
