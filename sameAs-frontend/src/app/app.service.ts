import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  uri = 'http://localhost:4000/products';

  constructor(private http: HttpClient) { }
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

    //this.http.post(`http://192.168.100.6:5000/geolinkeddata/service/storage/add`, obj)
    //  this.http.post(`${this.uri}/geolinkeddata/service/storage/add`, obj)
    return this.http.post(`http://201.159.223.25:8081/geolinkeddata/service/storage/add`, obj, httpOptions)
  }

  getPairs(param) {
    const params = new HttpParams()
      .set('param', '1')
    return this
      .http
      .get('http://201.159.223.25:8081/geolinkeddata/service/storage/get', { params } );
    //.get('http://192.168.100.6:5000/geolinkeddata/service/storage/get', { params } );
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

    //this.http.post(`http://192.168.100.6:5000/geolinkeddata/service/storage/add`, obj)
    //  this.http.post(`${this.uri}/geolinkeddata/service/storage/add`, obj)
    return this.http.post(`http://201.159.223.25:8081/geolinkeddata/service/storage/addevaluation`, obj, httpOptions)
  }

  private messageSource = new BehaviorSubject('No Persona_ID');
  currentMessage = this.messageSource.asObservable();
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  private numSource = new BehaviorSubject(0);
  currentEvaluation = this.numSource.asObservable();
  sumEvaluation(num_evaluation: number) {
    this.numSource.next(num_evaluation)
  }

}
