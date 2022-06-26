import {TransactionStatus} from 'src/graphql.schema';
import {IOrder} from './order';

export interface ITransaction {
  id: number;
  status: TransactionStatus;
  dateOfStatusChange: Date;
  amount: number;
  actualAmount: number;
  actualCurrency: string;
  fee: number;
  createdAt: Date;
  Order: IOrder;
}
