import { IExpense } from '../model/expense.model';

export const EXPENSE_DATA: IExpense[] = [
  {
    id: 'e001',
    title: 'grocery',
    amount: 19.99,
    createdAt: new Date('Dec 21, 2019'),
    imagePath: 'https://picsum.photos/200',
  },
  {
    id: 'e002',
    title: 'shopping',
    amount: 39.99,
    createdAt: new Date('Jan 1, 2021'),
    imagePath: 'https://picsum.photos/200',
  },
];

