import {gql} from '@apollo/client';

export const ORDER_CREATE = gql`
  mutation orderCreate($record: OrderCreateInput!) {
    orderCreate(record: $record) {
      Order {
        id
      }
      paymentLink
    }
  }
`;
