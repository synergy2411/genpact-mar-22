import { Routes } from '@angular/router';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { LoginComponent } from './components/login/login.component';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';

export const APP_ROUTES : Routes = [
  {
    path : "",                  // http://localhost:4200
    redirectTo : "login",
    pathMatch : "full"
  },{
    path : "login",             // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "expenses",          // http://localhost:4200/expenses
    component : ExpensesComponent,
    canActivate : [LoginGaurdService]
  },{
    path : "pipe-demo",         // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : "**",   // does not match above mentioned path http://localhost:4200/notexist
    redirectTo : "login",
    pathMatch : "full"
  }
]
