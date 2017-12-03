import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginService]
  
})
export class LoginPageComponent implements OnInit {
  
   emailtoadd2: string = "";
  passwordtoadd2: string = "";

  constructor( public loginService : LoginService) { }

  loginUser(){
    if(!(Boolean(this.passwordtoadd2))) alert("Please input a valid password!"); // If password isn't valid
   
       else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailtoadd2)) { // If it is a valid email
          this.loginService.verifyUser(this.emailtoadd2, this.passwordtoadd2);
        }  
      else (alert("Please input a valid email!")) //If it is not a valid Email
    
    
  }
  
  
  ngOnInit() {
    this.loginService.onBegin();
    
  }

}
