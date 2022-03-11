import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { ExpenseComponent } from './components/expenses/expense/expense.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AddNewComponent } from './components/expenses/add-new/add-new.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [     // Components, Directives, Pipes
    AppComponent,
    ExpensesComponent,
    ExpenseComponent,
    LifeCycleComponent,
    HighlightDirective,
    PipeDemoComponent,
    CountryCodePipe,
    FilterPipe,
    AddNewComponent,
    LoginComponent
  ],
  imports: [          // Import the Angular Module - Built-in / Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],      // to register the Services
  bootstrap: [AppComponent]
})
export class AppModule { }
