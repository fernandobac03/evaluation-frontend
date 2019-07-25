import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders, HttpRequest,} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import sparqlTransformer from 'sparql-transformer';
import {isArray} from "util";
import {DefaultUrlSerializer, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  /*baseuri = 'http://192.168.100.6:5000';*/
  baseuri = 'http://201.159.223.25:8081';

  geoecuri = 'http://linkeddata.ec/repositories/test'   /*-> Será tipo 1*/
  dbpediauri = 'http://dbpedia.org/sparql'              /*-> Será tipo 2*/

  endpointuri = this.geoecuri
  constructor(private http: HttpClient ) { }
  addPerson(escuela, edad, genero) {
    const obj = {
      escuela,
      edad,
      genero
    };
    console.log('Request: ')
    console.log(obj);

    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response',
    };
    return this.http.post(this.baseuri + `/geolinkeddata/service/storage/add`, obj, httpOptions)
  }

  getPairs(param) {
    const params = new HttpParams()
      .set('param', param)
    return this
      .http
      .get( this.baseuri + '/geolinkeddata/service/storage/get', { params } );
  }

  setEvaluation(evaluacion, id_persona, id_par)
  {
    const obj = {
      evaluacion,
      id_persona,
      id_par
    };
    console.log('Request: ')
    console.log(obj);
    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      observe: 'response',
    };
    return this.http.post(this.baseuri + '/geolinkeddata/service/storage/addevaluation', obj, httpOptions);
  }


  getFromTripleStore(endpointType, param) {
    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/ld+json'
    });

    const params = new HttpParams()
      .set('query', param)
    const httpOptions: { headers; observe; } = {
      headers: new HttpHeaders({
        Accept: 'application/ld+json'
      }),
      observe: 'response',
    };
    if (endpointType==1)
      return this.http.get(this.geoecuri, {params, headers: headers});
    else
    if (endpointType==2)
      return this.http.get(this.dbpediauri, {params, headers: headers});

  }




  private messageSource = new BehaviorSubject('No Persona_ID');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  private numSource = new BehaviorSubject(0);
  currentEvaluation = this.numSource.asObservable();
  sumEvaluation(num_evaluation: number) {
    this.numSource.next(num_evaluation);
  }
  private wkts = new BehaviorSubject([]);
  currentWKTs = this.wkts.asObservable();
  setWKTs(wktsvalues: []) {
    this.wkts.next(wktsvalues);
  }
  private wktA = new BehaviorSubject('No wkt');
  currentWKTA = this.wktA.asObservable();
  setnewWKTA(wktvalueA: string) {
    this.wktA.next(wktvalueA);
  }
  stringFormat(...args: any[]) {
    // The string containing the format items (e.g. "{0}")
    // will and always has to be the first argument.
    var theString = args[0];

    // start with the second argument (i = 1)
    for (var i = 1; i < args.length; i++) {
      // "gm" = RegEx options for Global search (more than one instance)
      // and for Multiline search
      var regEx = new RegExp("\\{" + (i - 1) + "\\}", "gm");
      theString = theString.replace(regEx, args[i]);
    }

    return theString;
  }


}
