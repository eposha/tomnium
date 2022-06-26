import {gql} from '@apollo/client';
import {SubscriptionUpdateInput} from 'src/graphql.schema';

export interface ISubscriptionUpdateRequest {
  record: SubscriptionUpdateInput;
}

export const SUBSCRIPTION_UPDATE = gql`
  mutation subscriptionUpdate($record: SubscriptionUpdateInput!) {
    subscriptionUpdate(record: $record) {
      id
    }
  }
`;
