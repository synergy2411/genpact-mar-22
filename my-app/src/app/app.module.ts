import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseComponent } from './components/expenses/expense/expense.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    ExpensesComponent,
    ExpenseComponent
  ],
  imports: [          // Import the Angular Module - Built-in / Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],      // to register the Services
  bootstrap: [AppComponent]
})
export class AppModule { }
