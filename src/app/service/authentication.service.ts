import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

 

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null )
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }

  }

