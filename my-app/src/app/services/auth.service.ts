import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onUserLogin(email : string, password : string){
    // Make the call to server for User verification
    return new Promise((resolve, reject) => {
      if(email === 'test@test.com' && password === 'test!123#'){
        resolve({message : "SUCCESS"})
      }else{
        reject({error : "NOT Authenticated"})
      }
    })
  }
}
