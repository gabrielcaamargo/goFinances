import { Category } from './ICategory';

export interface ITransactionCard {
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category,
  date: string;
}
