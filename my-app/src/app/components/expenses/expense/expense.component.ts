import { Component, Input, EventEmitter, Output, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IExpense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  @Input() expense! : IExpense;
  @Input() isEven! : boolean;

  @Output() deleteEvent = new EventEmitter<string>();

  dynamicClasses = {'my-border' : false, 'feature' : true}

  dynamicStyle = {
    'background-color' : 'grey',
    'font-weight' : 'bold'
  }

  ngOnInit(): void {
    this.dynamicClasses['feature'] = !this.isEven
    this.dynamicClasses['my-border'] = this.isEven
  }

  constructor(private router : Router){}

  onDelete(){
    // this.deleteEvent.emit(this.expense.id)
    this.router.navigate([`/expenses/${this.expense.id}`])
  }

}
