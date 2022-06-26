import {IPrice} from '@/types/price';
import {IGift} from '@/types/gift';
import {IProduct} from './product';

export interface ITariff {
  id: number;
  name: string;
  index: number;
  priceDifference: number;
  Gifts?: IGift[];
  Prices?: IPrice[];
  Product?: IProduct;
}
