import { Injectable } from '@angular/core';
// import { EXPENSE_DATA } from '../data/mocks';
import { IExpense } from '../model/expense.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  private baseUrl = `http://localhost:3000/expenses`;

  constructor(private http : HttpClient) { }

  getExpenseData() : Observable<IExpense[]> {
    return this.http.get<IExpense[]>(this.baseUrl)
    //   .subscribe(response => console.log("RESPONSE : ",response))
    // return EXPENSE_DATA;
  }

  onDeleteExpense(id : string){
    this.http.delete(`${this.baseUrl}/${id}`)
      .subscribe(response => console.log(response));
  }

}
