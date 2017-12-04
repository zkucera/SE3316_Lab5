import { Injectable } from '@angular/core';

var emails:  string[] = [];
var passwords: string[] = [];  
var url = 'http://lab5-zkucera.c9users.io:8081/api/users1';

@Injectable()
export class LoginService {

  

  constructor() {  }

public onBegin(){
    fetch(url)
      .then((resp) => resp.json())
      .then(function(data) {
        console.log(data);
        return data.map(function(user) {
            
        emails.push(user.email);
        passwords.push(user.password);
        
        })
      })
    }

public verifyUser(email2, password2){
      
       for (var i = 0; i < emails.length; i ++){
         if(email2 == emails[i]){
           if (passwords[i] == password2) alert('login successful')
           else alert('invalid login')
         }
         else {
           if (i == emails.length - 1) alert('invalid login (email)')
         }
       }
}

  


}
