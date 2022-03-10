import { Component } from '@angular/core';
import { IExpense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  expenses : IExpense[] = [{
    id: 'e001',
    title: 'grocery',
    amount: 19.99,
    createdAt: new Date('Dec 21, 2019'),
    imagePath: 'https://picsum.photos/200',
  },{
    id: 'e002',
    title: 'shopping',
    amount: 39.99,
    createdAt: new Date('Jan 1, 2021'),
    imagePath: 'https://picsum.photos/200',
  }];

  deleteExpense(id : string){
    console.log("Received : ", id);
  }

  changeAmount(target: EventTarget) {
    this.expenses[0].amount = Number((target as HTMLInputElement).value);
  }

  showInfo(id: string) {
    alert('Showin info about ' + id);
  }
}
