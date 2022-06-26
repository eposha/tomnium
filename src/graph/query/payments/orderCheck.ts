import {gql} from '@apollo/client';
import {OrderPrice} from 'src/graphql.schema';

export interface IOrderCheckResponse {
  orderCheck: OrderPrice;
}

export const ORDER_CHECK_QUERY = gql`
  query orderCheck($record: OrderCheckInput!) {
    orderCheck(record: $record) {
      default
      total
      difference
    }
  }
`;
