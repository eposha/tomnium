import {Product} from 'src/graphql.schema';

export interface IOrder {
  id: string;
  price: number;
  linkToPay: string;
  Products: Product[];
}
