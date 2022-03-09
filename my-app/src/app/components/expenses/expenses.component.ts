import { Component } from '@angular/core';
import { IExpense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})
export class ExpensesComponent {
  expense: IExpense = {
    id: 'e001',
    title: 'grocery',
    amount: 19.99,
    createdAt: new Date('Dec 21, 2019'),
    imagePath: 'https://picsum.photos/200',
  };

  changeAmount(target: EventTarget) {
    this.expense.amount = Number((target as HTMLInputElement).value);
  }

  showInfo(id: string) {
    alert('Showin info about ' + id);
  }
}
