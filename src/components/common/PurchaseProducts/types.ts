import {IPrice} from '@/types/price';
import {ICurrency} from '@/types/currency';
import {Dispatch, SetStateAction} from 'react';
import {TypeUseChangeQualityItem} from 'src/hooks';
import {
  IUseOrderAvailableCards,
  IUsePay,
  IUsePayByNewCard,
  IUsePayBySavedCard,
  IUseUserCheck,
  IUseOrderCheck,
  IUsePayByCash,
} from '@/graph-hooks/payments';
import {Card} from 'src/graphql.schema';
import {TUseFormProfileUpdate} from '@/graph-hooks/user/useFormProfileUpdate';
import {IPaymentMethod, IUser} from '@/types/index';
import {
  ApolloQueryResult,
  InternalRefetchQueryDescriptor,
  OperationVariables,
} from '@apollo/client';
import {IUserMeResponse} from '@/query/user';

export interface IItem {
  title?: string;
  description?: string;
  productId?: string;
  avatar: string;
  price?: IPrice;
  currencies?: ICurrency[];
  responseUrl?: string;
  saleId?: string;
  tariffId?: number;
  isProductThread?: boolean;
}

export interface IDataPaymentMethod {
  paymentMethod: IPaymentMethod | null;
  setPaymentMethod: Dispatch<SetStateAction<IPaymentMethod | null>>;
}
export interface IDataCurrency {
  currency: ICurrency | Record<string, any>;
  changeCurrency: (value: any) => void;
}

export type TRefetchUser = (
  variables?: Partial<OperationVariables> | undefined,
) => Promise<ApolloQueryResult<IUserMeResponse>>;

export interface IPaymentProps {
  item?: IItem;
  user?: IUser | null;
  refetchUser: TRefetchUser;
  onClose?: () => void;
  dataQuality: TypeUseChangeQualityItem;
  paymentMethods?: IPaymentMethod[] | null;
  step: string;
  changeStep: (titleStep: string) => void;
  dataPaymentMethod: IDataPaymentMethod;
  cancelLink?: string;
  dataCurrency: IDataCurrency;
  loading?: boolean;
  dataUserCheck: IUseUserCheck;
  dataOrderCheck: IUseOrderCheck;
  dataActivePaymentCard: IDataActivePaymentCard;
  dataPaymentByCash: IUsePayByCash;
  dataPaymentCards: IUseOrderAvailableCards;
  dataPaymentBySavedCard: IUsePayBySavedCard;
  dataPaymentByNewCard: IUsePayByNewCard;
  paymentData: IUsePay;
  dataUpdateProfile: TUseFormProfileUpdate;
  dataEntitiesPage: ISuccessPayment;
  errors: Array<string | undefined>;
  isShowQuality: boolean;
}

export interface TypesItem {
  step: string;
  item?: IItem;
  isQuality: boolean;
  isShowQuality: boolean;
  dataQuality: TypeUseChangeQualityItem;
  size: 'large' | 'small';
  currency?: ICurrency | null;
  dataOrderCheck: IUseOrderCheck;
}

export interface IDataActivePaymentCard {
  activePaymentCard: Card | null;
  setActivePaymentCard: Dispatch<SetStateAction<Card | null>>;
}

export interface ISuccessPayment {
  entitiesLink: string;
  nameEntitiesPage: string;
  entityRefetchQueries?: InternalRefetchQueryDescriptor[];
  isProductThread?: boolean;
}
