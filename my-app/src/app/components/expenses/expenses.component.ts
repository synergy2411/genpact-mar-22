import { Component, OnDestroy, OnInit } from '@angular/core';
import { IExpense } from 'src/app/model/expense.model';
import { EXPENSE_DATA } from 'src/app/data/mocks';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent implements OnInit, OnDestroy{
  expenses! : IExpense[];
  filteredYear  : string = '';
  showform : boolean = false;

  ngOnInit(): void {
    this.expenses = EXPENSE_DATA;
  }

  onCancelForm(){
    this.showform = false;
  }

  onAddNewExpense(newExpense : IExpense){
    this.expenses.push(newExpense);
    this.showform = false;
  }

  deleteExpense(id : string){
    const position = this.expenses.findIndex((exp) => exp.id === id )
    this.expenses.splice(position, 1);
  }

  ngOnDestroy(): void {
    this.expenses = [];
  }

  // changeAmount(target: EventTarget) {
  //   this.expenses[0].amount = Number((target as HTMLInputElement).value);
  // }

  // showInfo(id: string) {
  //   alert('Showin info about ' + id);
  // }
}
