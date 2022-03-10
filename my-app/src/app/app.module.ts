import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseComponent } from './components/expenses/expense/expense.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    ExpensesComponent,
    ExpenseComponent,
    LifeCycleComponent,
    HighlightDirective
  ],
  imports: [          // Import the Angular Module - Built-in / Custom
    BrowserModule,
    FormsModule
  ],
  providers: [],      // to register the Services
  bootstrap: [AppComponent]
})
export class AppModule { }
