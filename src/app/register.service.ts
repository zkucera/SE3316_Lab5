import { Injectable } from '@angular/core';

@Injectable()   
export class RegisterService {

  constructor() { }
  
        public addUser(email1, password1){
        
        
        
           fetch('http://lab5-zkucera.c9users.io:8081/api/users1', {
            method: 'post',
            headers: {'Content-Type': 'application/json' , 'Access-Control-Allow-Origin' : 'http://lasb5-zkucera.c9users.io:8080'},
             body: JSON.stringify({emailb : email1, passwordb : password1})
        
            })
        
        }

}
