import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IExpense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent {

  @Input() expense! : IExpense;

  @Output() deleteEvent = new EventEmitter<string>();

  dynamicClasses = {'my-border' : false, 'feature' : true}

  dynamicStyle = {
    'background-color' : 'grey',
    'font-weight' : 'bold'
  }

  onDelete(){
    this.deleteEvent.emit(this.expense.id)
  }

}
