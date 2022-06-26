import {gql} from '@apollo/client';

import {ISubscription} from '@/types/index';

export interface IGetSubscriptionsResponse {
  subscriptions: ISubscription[];
}

export const GET_MY_SUBSCRIPTIONS = gql`
  query subscriptions {
    subscriptions {
      id
      price
      activeEndDate
      status
      stopReason
      lastPaymentDate
      isTrial
      renew
      Tariff {
        id
      }
      Plan {
        title
        description
        productId
        imageWeb {
          path
        }
        imageMob {
          path
        }
        Product {
          imageWeb {
            path
          }
          imageMob {
            path
          }
        }
      }
    }
  }
`;
