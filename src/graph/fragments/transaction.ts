import {ProductFragment} from '@/fragments/product';
import {gql} from '@apollo/client';

export const TransactionFragment = gql`
  fragment TransactionFragment on Transaction {
    id
    status
    dateOfStatusChange
    amount
    actualAmount
    actualCurrency
    fee
    createdAt
    Order {
      id
      price
      Products {
        ...ProductFragment
      }
    }
  }
  ${ProductFragment}
`;
