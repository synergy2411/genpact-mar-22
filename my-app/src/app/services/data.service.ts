import { Injectable } from '@angular/core';
import { EXPENSE_DATA } from '../data/mocks';
import { IExpense } from '../model/expense.model';

@Injectable({
  providedIn : 'root'
})
export class DataService {

  constructor() { }
  getExpenseData() : IExpense[] {
    return EXPENSE_DATA;
  }
}
