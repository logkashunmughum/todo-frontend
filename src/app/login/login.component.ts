import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { LoginDataService } from '../service/data/login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'test'
  password = 'pwd123'
  errorMessage = 'Invalid credentials'
  invalidLogin = false
  errorFlag: boolean = false;
  loginFromService : boolean = false
 
  constructor(private router : Router,
    private authenticationService : AuthenticationService,
    private service : LoginDataService) { }

  ngOnInit(): void {
  }

  handleLogin(){
     this.service.executeLoginService(this.username, this.password).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response : any){
    this.loginFromService = response
    console.log('loginFromService' , this.loginFromService)
    if(this.loginFromService === true){
      console.log('next navigation')
      console.log('username', this.username);
      console.log('password', this.password);
      sessionStorage.setItem('authenticateUser', this.username);
      this.router.navigate(['home', this.username])
    } else{
      this.invalidLogin = true; 
    }
  }

  handleErrorResponse(error: any){
    this.errorMessage = error.message
    this.errorFlag = true

  }


}
