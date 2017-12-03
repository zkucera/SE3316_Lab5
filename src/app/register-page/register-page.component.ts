import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
  providers: [RegisterService]

})
export class RegisterPageComponent implements OnInit {
  emailtoadd: string = "";
  passwordtoadd: string = "";

  constructor(private registerService:RegisterService) {
    
    
  }
    registerUser(){
   if(!(Boolean(this.passwordtoadd))) alert("Please input a valid password!");
   
   else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.emailtoadd)) {
     this.registerService.addUser(this.emailtoadd,this.passwordtoadd);
   }
   else (alert("Please input a valid email!"))
   
  };
  ngOnInit() {
  }

}
