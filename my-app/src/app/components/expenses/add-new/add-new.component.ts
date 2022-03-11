import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IExpense } from 'src/app/model/expense.model';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {

  @Output() addExpenseEvent = new EventEmitter<IExpense>()

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(myForm : NgForm){
    let newExpense : IExpense = {
      title : myForm.value.title,
      createdAt : new Date(myForm.value['created-at']),
      amount : myForm.value.amount,
      id : Date.now().toString(),
      imagePath : "https://random.imagecdn.app/200/200"
    }
    this.addExpenseEvent.emit(newExpense);
  }

}
