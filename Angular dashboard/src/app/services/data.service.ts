import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Request, Headers } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {



  constructor(public http: Http) {
    console.log('Data Service Connected...');
  }

  //LOGIN
  adminLogin(LoginDetail: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:50263/api/Login/', JSON.stringify(LoginDetail), options)
      .map(res => res.json());
  }

  //Get
  getData() {
    return this.http.get('http://localhost:50263/api/Class/')
      .map(response => response.json());
  }
  //Get Student Data
  getDataStudent() {
    return this.http.get('http://localhost:50263/api/Student/')
      .map(response => response.json());
  }
  //POST
  postStudent(registerStudent: any) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:50263/api/Student/', JSON.stringify(registerStudent), options)
      .map(res => res.json());
  }

  //CLASS
  //DELETE BY ID
  deleteClassById(id: any) {
    console.log(id);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:50263/api/Class/'+ id, options)
      .map((res: Response) => res.json());
  }

  //STUDENT
  //DELETE BY ID
  deleteStudentById(id: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete('http://localhost:50263/api/Student/' + id, options)
      .map((res: Response) => res.json());
  }


}
