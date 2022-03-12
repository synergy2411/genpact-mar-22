import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  pwd = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    this.hasExclamation,
    this.hasSpecialSymbol('#')
  ]);
  loginForm! : FormGroup;

  constructor(
    private fb : FormBuilder,
    private authService : AuthService,
    private router : Router) {
    this.loginForm = fb.group({
      username : this.uname,
      password : this.pwd
    })
  }

  onSubmit(){
    this.authService.onUserLogin(
      this.loginForm.value.username,
      this.loginForm.value.password
      ).then(response =>{
        debugger;
        this.router.navigate(['/expenses'])
        console.log("RESPONSE : ", response)
      })
      .catch(console.log)
  }

  ngOnInit(): void {
  }

  hasExclamation(control : AbstractControl){
    return control.value.includes("!") ? null : {exclamationError : true}

  }

  hasSpecialSymbol(symbol : string){
    return (control : AbstractControl) => {
      return control.value.includes(symbol) ? null : {specialSymbol : true}
    }
  }
}
