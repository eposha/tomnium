import {gql} from '@apollo/client';
import {IPriceListOption} from 'src/types';

export interface IGetPriceListOptionsRequest {
  productId?: string | string[];
}

export interface IGetPriceListOptionsResponse {
  priceListOptions: IPriceListOption[];
}

export const GET_PRICE_LIST_OPTIONS = gql`
  query priceListOptions($productId: String!) {
    priceListOptions(productId: $productId) {
      id
      title
    }
  }
`;
