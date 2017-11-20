import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  addUser(userObj){
    console.log("hit service")
    console.log(userObj)
    return this._http.post('/add', userObj).map(Response=>Response.json()).toPromise();
  }
  addQ(pollObj){
    console.log("hit service")
    console.log(pollObj)
    return this._http.post('/create', pollObj).map(Response=>Response.json()).toPromise();
  }
  getAll(){
    console.log("hit service")
    return this._http.get('/get/all').map(Response=>Response.json()).toPromise();
  }
  getUser(){
    console.log("hit service")
    return this._http.get('get/user').map(Response=>Response.json()).toPromise();
  }
  delP(idObj){
    console.log("hit service")
    console.log(idObj)
    return this._http.post('/del', idObj).map(Response=>Response.json()).toPromise();
  }
  getPoll(obj){
    console.log("hit service")
    console.log(obj)
    return this._http.post('/retrieve', obj).map(Response=>Response.json()).toPromise();
  }
  addCount(obj){
    console.log(obj)
    return this._http.post('/count', obj).map(Response=>Response.json()).toPromise();
  }
}
