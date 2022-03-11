import { Injectable } from '@angular/core';
import { EXPENSE_DATA } from '../data/mocks';
import { IExpense } from '../model/expense.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  private baseUrl = "http://localhost:3000";

  constructor(private http : HttpClient) { }

  getExpenseData() : IExpense[] {
    this.http.get(`${this.baseUrl}/expenses`)
      .subscribe(response => console.log("RESPONSE : ",response))
    return EXPENSE_DATA;
  }
}
