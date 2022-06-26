import {gql} from '@apollo/client';
import {Card} from '../../../graphql.schema';

export interface IOrderAvailableCardsResponse {
  orderAvailableCards?: Card[];
}

export const ORDER_AVAILABLE_CARDS_QUERY = gql`
  query orderAvailableCards($record: OrderAvailableCardsInput!) {
    orderAvailableCards(record: $record) {
      id
      masked
      merchantId
      status
      type
    }
  }
`;
