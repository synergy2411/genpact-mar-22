import { Pipe, PipeTransform } from '@angular/core';
import { IExpense } from '../model/expense.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(expenses : IExpense[], filteredYear:string): Array<IExpense> {
    if(filteredYear === ''){
      return expenses;
    }
    let resultArray : IExpense []= [];
    for(let expense of expenses){
      const year = expense.createdAt.getFullYear()
      if(year.toString() === filteredYear){
        resultArray.push(expense);
      }
    }
    return resultArray;
  }

}
