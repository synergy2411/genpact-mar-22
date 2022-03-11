import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

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
    this.hasExclamation
  ]);
  loginForm! : FormGroup;

  constructor(private fb : FormBuilder) {
    this.loginForm = fb.group({
      username : this.uname,
      password : this.pwd
    })
  }

  onSubmit(){
    console.log(this.loginForm);
  }

  ngOnInit(): void {
  }

  hasExclamation(control : AbstractControl){
    const hasExcl = control.value.indexOf("!") >= 0;
    return hasExcl ? null : {exclamationError : true}
  }

}
