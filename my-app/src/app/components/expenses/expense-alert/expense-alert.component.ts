import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-expense-alert',
  templateUrl: './expense-alert.component.html',
  styleUrls: ['./expense-alert.component.css']
})
export class ExpenseAlertComponent implements OnInit {

  expenseId! : string;
  constructor(
    private route : ActivatedRoute,
    private dataService : DataService,
    private router : Router) {
    this.route.params.subscribe(params => {
      // console.log(params);      // {expId}
      this.expenseId = params['expId']
    })
   }

   onDelete(){
    this.dataService.onDeleteExpense(this.expenseId)
    this.router.navigate(['/expenses']);
   }

   onCancel(){
    this.router.navigate(['/expenses']);
   }

  ngOnInit(): void {
  }

}
