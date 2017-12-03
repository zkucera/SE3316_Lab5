import { Injectable } from '@angular/core';


var emails:  string[] = [];
var passwords: string[] = [];  
var url = 'http://lab5-zkucera.c9users.io:8081/api/users1';

@Injectable()   
export class RegisterService {

  constructor() { }
       
       
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
        
        
        public addUser(email1, password1){
           
           if (emails.indexOf(email1) >-1 ){ alert('Account already made with that email') }
           else{
          
           emails.push(email1);
           fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json' , 'Access-Control-Allow-Origin' : 'http://lasb5-zkucera.c9users.io:8080'},
             body: JSON.stringify({emailb : email1, passwordb : password1})
           }
             
             
        
     
        
        })
    }
}
