import {gql} from '@apollo/client';

export const ORDER_CREATE_FOR_PAYMENT_BY_CASH = gql`
  mutation orderCreate($record: OrderCreateInput!) {
    orderCreate(record: $record) {
      Order {
        Merchant {
          meta {
            mfo
            edrpoyCode
            accountNumber
            purposeOfPayment
          }
        }
      }
    }
  }
`;
