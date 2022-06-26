import {gql} from '@apollo/client';
import {IPaymentMethod} from '@/types/payments';

export interface IPaymentMethodsResponse {
  availablePaymentMethods: IPaymentMethod[];
}

export const AVAILABLE_PAYMENT_METHODS_QUERY = gql`
  query availablePaymentMethods($productId: String!) {
    availablePaymentMethods(productId: $productId) {
      id
      displayName
      index
      name
    }
  }
`;
