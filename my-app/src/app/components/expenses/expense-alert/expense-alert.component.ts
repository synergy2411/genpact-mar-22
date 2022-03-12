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
  title! : string;

  constructor(
    private route : ActivatedRoute,
    private dataService : DataService,
    private router : Router) {
        this.route.params.subscribe(params => {
        // console.log(params);      // {expId}
        this.expenseId = params['id']
      });
      this.route.queryParams.subscribe(queryParams =>{
        this.title = queryParams['title'];
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
