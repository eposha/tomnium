import {gql} from '@apollo/client';
import {NotificationWithType} from 'src/graphql.schema';

export interface ISubscriptionResponse {
  pushNotificationSubscription: NotificationWithType;
}

export const NOTIFICATIONS_SUBSCRIPTION = gql`
  subscription {
    pushNotificationSubscription {
      type
      Notification {
        event
        message
      }
    }
  }
`;
