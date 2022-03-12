import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated : boolean = false;

  constructor(private router :Router) { }

  onUserLogin(email : string, password : string){
    // Make the call to server for User verification
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(email === 'test@test.com' && password === 'test!123#'){
          this.isAuthenticated = true
          resolve({message : "SUCCESS"})
        }else{
          reject({error : "NOT Authenticated"})
        }
      }, 1500)
    })
  }

  isUserAuthenticated(){
    return this.isAuthenticated;
  }

  onUserLogout(){
    this.isAuthenticated = false;
    this.router.navigate(['login'])
  }

}
