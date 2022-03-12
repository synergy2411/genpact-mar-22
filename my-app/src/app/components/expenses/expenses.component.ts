import { AfterContentInit, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { IExpense } from 'src/app/model/expense.model';
// import { EXPENSE_DATA } from 'src/app/data/mocks';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit, OnDestroy, AfterViewInit{
  expenses! : IExpense[];
  filteredYear  : string = '';
  showform : boolean = false;

  constructor(private dataService : DataService){}

  ngOnInit(): void {
    // this.expenses = EXPENSE_DATA;
    this.fetchExpenses()
  }

  ngAfterViewInit(): void {
    this.fetchExpenses();
  }

  private fetchExpenses(){
    this.dataService.getExpenseData()
      .subscribe((response : IExpense[]) => this.expenses = response)
  }

  onCancelForm(){
    this.showform = false;
  }

  onAddNewExpense(newExpense : IExpense){
    // this.expenses.push(newExpense);
    this.dataService.onCreateExpense(newExpense)
      .subscribe(response => {
        console.log(response);
        this.showform = false;
        this.fetchExpenses();
      })
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
