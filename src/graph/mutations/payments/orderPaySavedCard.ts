import {gql} from '@apollo/client';

export interface IOrderPaySavedCardRequest {
  cardId: string;
  orderId: string;
}

export const ORDER_PAY_SAVED_CARD = gql`
  mutation orderPaySavedCard($record: orderPaySavedCardInput!) {
    orderPaySavedCard(record: $record)
  }
`;
