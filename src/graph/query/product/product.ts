import {MediaFragment} from '@/fragments/media';
import {gql} from '@apollo/client';

import {IProduct} from '@/types/product';

export interface IGetProductResponse {
  productById: IProduct;
}

export const GET_PRODUCT = gql`
  query productById($id: String!) {
    productById(id: $id) {
      title
      description
      imageMob {
        ...MediaFragment
      }
      imageWeb {
        ...MediaFragment
      }
      Thread {
        id
        image {
          path
        }
      }
      Consultation {
        id
        image {
          path
        }
      }
      Plan {
        id
        imageWeb {
          path
        }
      }
    }
  }
  ${MediaFragment}
`;
