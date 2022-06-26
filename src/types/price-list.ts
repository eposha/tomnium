import {PriceListPropertyType} from 'src/graphql.schema';
import {IProduct} from './product';

export interface IPriceList {
  id: number;
  title: string;
  PriceListProperties: IPriceListProperty[];
  Sale?: {
    id: string;
  };
  Tariff: {
    id: number;
    Product: IProduct;
  };
  isHighlight: boolean;
}

export interface IPriceListOption {
  id: number;
  index: number;
  title: string;
  name: string;
  isActive: boolean;
}

export interface IPriceListProperty {
  id: number;
  index: number;
  type: PriceListPropertyType;
  boolValue?: boolean;
  stringValue?: string;
  PriceList: {
    id: number;
  };
  PriceListOption: {
    id: number;
  };
}
