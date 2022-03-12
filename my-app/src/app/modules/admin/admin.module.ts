import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdminComponent } from './components/new-admin/new-admin.component';
import { RouterModule, Routes } from '@angular/router';


const LAZY_ROUTES : Routes = [
  {
    path  : "",      // http://localhost:4200/admin
    component : NewAdminComponent
  }
]

@NgModule({
  declarations: [
    NewAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ]
})
export class AdminModule { }
