import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


export class LoginBean{
  constructor(public msg : boolean){

  }
}

@Injectable({
  providedIn: 'root'
})

export class LoginDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeLoginService(userName : any, password: any){
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.set('userName', userName);
    httpHeaders = httpHeaders.set('password', password)
    return this.http.get<LoginBean>('http://localhost:8080/todo/login', {headers :httpHeaders})
  }

  
}
 

