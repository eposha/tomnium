
import {IMedia, IProduct} from '@/types/index';
import {SubscriptionStatus, SubscriptionStopReason} from 'src/graphql.schema';

export interface ISubscription {
  id: string;
  price: number;
  activeEndDate: Date;
  status: SubscriptionStatus;
  stopReason: SubscriptionStopReason;
  lastPaymentDate: Date;
  isTrial: boolean;
  renew: boolean;
  Tariff: {
    id: number;
  };
  Plan: {
    title: string;
    description: string;
    imageWeb: IMedia[];
    imageMob: IMedia[];
    productId: string;
    Product: IProduct
  };
}
