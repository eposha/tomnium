import {gql} from '@apollo/client';
import {PaginationFragment} from '@/fragments/pagination';
import {IPagination} from '@/types/common';
import {Message, PushNotificationsFilterInput} from 'src/graphql.schema';

export interface INotificationStoryResponse {
  pushNotifications: {
    Messages: Message[];
    Pagination: IPagination;
  };
}

export interface INotificationStoryRequest {
  filter?: PushNotificationsFilterInput;
  limit?: number;
  offset?: number;
}

export const GET_NOTIFICATION_STORY = gql`
  query pushNotifications(
    $limit: Int
    $offset: Int
    $filter: PushNotificationsFilterInput
  ) {
    pushNotifications(limit: $limit, offset: $offset, filter: $filter) {
      Messages {
        id
        body
        isRead
        createdAt
        updatedAt
        meta {
          Parent {
            id
            entityName
          }
        }
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;
