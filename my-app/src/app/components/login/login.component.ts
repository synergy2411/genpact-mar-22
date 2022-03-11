import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';

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
    Validators.minLength(6)
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

}
