'use strict';
import {Component, OnChanges, OnInit, SimpleChanges, DoCheck} from '@angular/core';
import {AppService} from '../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as jsonld from 'jsonld';
import {deprecate} from "util";
import {compact} from "jsonld";
import {AppMapComponent} from '../app-map/app-map.component';
import {init} from "protractor/built/launcher";

@Component({
  selector: 'app-app-individual',
  templateUrl: './app-individual.component.html',
  styleUrls: ['./app-individual.component.css']
})
export class AppIndividualComponent implements OnInit, OnChanges, DoCheck {
  num_evaluation: number;
  persona_id: string = '';

  constructor(private appser: AppService, private mapc: AppMapComponent, private router: Router) { }

  pairs: string[];
  fromendpoint: string[];
  selected_evaluacion: string;
  selected_evaluacion_texto: string = '';
  selected_id_par: string;
  querystring: string = '';
  datos =  [];
  datosgeo = [];
  labels = [];
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
          this.appser.setEvaluation(this.selected_evaluacion, this.persona_id, this.selected_id_par).subscribe(res => {
            console.log("Response: ");
            console.log(res['body'])
          })
          this.appser.sumEvaluation(this.num_evaluation + 1);
          this.iniciar();
          this.mapc.clearMap()
          this.selected_evaluacion_texto = ''
      } else {
        alert("No ha seleccionado una respuesta")
      }
    }
  }

  ngOnInit() {
    this.iniciar();
    this.mapc.iniciar();
    this.mapc.clearMap();
  }
  iniciar(){
    this.datos = [];
    this.labels = [];
    this.datosgeo = [];
    this.appser.currentEvaluation.subscribe(num_evaluation => this.num_evaluation = num_evaluation)
    this.appser.currentMessage.subscribe(message => this.persona_id = message)
    this.appser
      .getPairs(1)
      .subscribe(  data => {
        this.pairs = data as string [];
        this.loadFullData(this.pairs);
      });
  }
  loadFullData(fulldata) {
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
      dct: 'http://purl.org/dc/terms/',
    };
    const prefix = ''
      + ' PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#> '
      + ' PREFIX geoec: <http://linkeddata.ec/ontology#> '
      + ' PREFIX geo: <http://www.opengis.net/ont/geosparql#> '
      + ' PREFIX schema: <http://schema.org/> '
      + ' PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> '
      + ' PREFIX dbpedia: <http://dbpedia.org/ontology/> '
      + ' PREFIX dbpediaproperty: <http://dbpedia.org/property/> '
      + ' PREFIX wgs84: <http://www.w3.org/2003/01/geo/wgs84_pos#> '
      + ' PREFIX owl: <http://www.w3.org/2002/07/owl#> '
      + ' PREFIX prov: <http://www.w3.org/ns/prov#> '
      + ' PREFIX geoecresource: <http://linkeddata.ec/resource/>'
      + ' PREFIX dct: <http://purl.org/dc/terms/> '

    const geoecQuery = prefix + ' CONSTRUCT { ' +
      ' <{0}> rdfs:label ?label. ' +
      ' <{0}> rdf:type ?types. ' +
      ' <{0}> geo:asWKT ?wkt. ' +
      '} ' +
      'WHERE { ' +
      ' <{0}> rdfs:label ?label. ' +
      ' OPTIONAL { ' +
      '   <{0}> rdf:type ?types. ' +
      '   <{0}> geo:hasDefaultGeometry  ?geo. ' +
      '   ?geo geo:asWKT ?wkt. }' +
      ' FILTER ( lang(?label) = "es" ) .' +
      ' } limit 100 '
    const dbpediaQuery = prefix + ' CONSTRUCT { ' +
      ' <{0}> rdfs:label ?label. ' +
      ' <{0}> rdf:type ?types. ' +
      ' <{0}> dbpedia:abstract ?abstract.' +
      ' <{0}> dbpedia:country ?country.' +
      ' <{0}> dbpedia:isPartOf ?isPartOf.' +
      ' <{0}> wgs84:geometry ?geo. ' +
      '} ' +
      ' WHERE { ' +
      ' <{0}> rdfs:label ?label. ' +
      ' Optional { <{0}> rdf:type ?types. ' +
      ' <{0}> dbpedia:abstract ?abstract.' +
      ' <{0}> dbpedia:country ?country.' +
      ' <{0}> dbpedia:isPartOf ?isPartOf.' +
      ' <{0}> wgs84:geometry ?geo. } ' +
      ' FILTER ( lang(?label) = "es" ) .' +
      ' FILTER ( lang(?abstract) = "es" ) .' +
      '} limit 100 '

    this.loadfullDataFromURI(prefix, context, fulldata[0]['uri_a'], geoecQuery, 1);
    this.loadfullDataFromURI(prefix, context, fulldata[0]['uri_b'], dbpediaQuery, 2);

  }

  loadfullDataFromURI(prefix, context, uriResource, query, endpointType)
  {
    this.querystring = this.appser.stringFormat(query, uriResource)
    this.appser.getFromTripleStore(endpointType, this.querystring).subscribe(async results => {
      this.fromendpoint = results as unknown as string [];
      //this.results  = this.fromendpoint['@graph'] ? this.fromendpoint['@graph'][0] : this.fromendpoint[0];
      //const jsonldStr = JSON.parse(this.from_rdf_to_jsonld(this.results));
      let datosaux = [];
      let datosauxgeo = '';
      var modelId = {};
      modelId['property'] = 'URL';
      modelId['value'] = uriResource;
      datosaux.push(modelId);
      let dataFromJLD: any;
      // @ts-ignore
      dataFromJLD = await jsonld.compact(this.fromendpoint, context);
      const compacted = dataFromJLD['@graph'] ? dataFromJLD['@graph'] : dataFromJLD
      for (const i in compacted) {
        if (i !== '@context') {
          var model = {};
          model['property'] = i;
          const value = compacted[i]['@id'] ? compacted[i]['@id'] : compacted[i]['@value'] ? compacted[i]['@value'] : compacted[i];
          model['value'] = value;
          datosaux.push(model);
          if (model['property'] == "geo:asWKT" || model['property'] == "wgs84:geometry") {
            datosauxgeo = model['value'];
            console.log(datosauxgeo)
            this.mapc.plotWKTB(model['value']);
            this.mapc.dibujar();
          }
          if (model['property'] == "rdfs:label") {
            this.labels.push(model['value'].toUpperCase());
          }
        }
      }
      // jsonld.compact(this.fromendpoint, context, function (err, compacted) {
      //   compacted = compacted['@graph'] ? compacted['@graph'] : compacted
      //   for (const i in compacted) {
      //     if (i != "@context") {
      //       var model = {};
      //       model['property'] = i;
      //       model['value'] = compacted[i]['@id'] ? compacted[i]['@id'] : compacted[i]['@value'] ? compacted[i]['@value'] : compacted[i];
      //       datosaux.push(model);
      //       if (model['property'] == "geo:asWKT" || model['property'] == "wgs84:geometry") {
      //         console.log(model['value'])
      //         datosauxgeo = model['value'];
      //         console.log(datosauxgeo)
      //       }
      //     }
      //   }
      // });
      this.datosgeo.push(datosauxgeo);
      this.datos.push(datosaux);

    });
  }


  ngOnChanges(changes: SimpleChanges){
    //console.log(changes);
  }

  ngDoCheck(){
    setTimeout(() => {
      //console.log(" ");
    }, 1000);
    //console.log('Método DoCheck lanzado');
  }



  // /***********************************/
  // //deprecated
  // //PARA TRANSFORMAR DATOS DEL JSON RECIBIDO DEL ENDPOINT A JSON-LD
  // jsonTemplate = ''
  //   + '   {'
  //   + ' {0} '
  //   + '  }';
  // jsonObjTemplate =
  //      '"{0}":"{1}"';
  // jsonObjIdTemplate =
  //   '"{0}":{1}';
  // jsonIdTemplate =
  //   '{ "@id":"{0}" }';
  //
  //
  //
  // from_rdf_to_jsonld(data)
  // {
  //   let cadena: string = "";
  //   let ind=0;
  //   for (let resource of data) {
  //     ind++;
  //     const key = resource['p']['value'];
  //     const value = resource['o']['value'];
  //     if ( resource['o']['type'] ==  "literal")//va directamente el objeto
  //       cadena += this.appser.stringFormat(this.jsonObjTemplate, key, value);
  //     else //el objeto va de tipo uri con "@id"
  //       cadena += this.appser.stringFormat(this.jsonObjIdTemplate, key, this.appser.stringFormat(this.jsonIdTemplate,value));
  //     if (ind < data.length)
  //     {
  //       cadena += ",";
  //     }
  // }
  //   return this.appser.stringFormat(this.jsonTemplate, cadena);
  // }
  // /***********************************/
}
