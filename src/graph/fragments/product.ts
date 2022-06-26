import {gql} from '@apollo/client';
import {MediaFragment} from './media';

export const ProductFragment = gql`
  fragment ProductFragment on Product {
    id
    title
    description
    landingUrl
    price
    oldPrice
    availableBySubscription
    imageMob {
      ...MediaFragment
    }
    imageWeb {
      ...MediaFragment
    }
    Tariffs {
      id
      name
      Prices {
        old
        default
        withSale
        sale
        Currency {
          id
          name
          code
        }
      }
    }
  }
  ${MediaFragment}
`;
