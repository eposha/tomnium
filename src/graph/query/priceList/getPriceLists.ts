import {MediaFragment} from '@/fragments/media';
import {gql} from '@apollo/client';
import {IPriceList} from 'src/types';

export interface IGetPriceListsRequest {
  productId?: string | string[];
}

export interface IGetPriceListsResponse {
  priceLists: IPriceList[];
}

export const GET_PRICE_LISTS = gql`
  query priceLists($productId: String!) {
    priceLists(productId: $productId) {
      id
      title
      isHighlight
      Sale {
        id
      }
      Tariff {
        id
        Product {
          id
          title
          description
          imageMob {
            ...MediaFragment
          }
          imageWeb {
            ...MediaFragment
          }
          Plan {
            id
            duration
          }
        }
      }
      PriceListProperties {
        id
        stringValue
        boolValue
        PriceListOption {
          id
        }
      }
    }
  }
  ${MediaFragment}
`;
