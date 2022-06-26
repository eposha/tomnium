import {gql} from '@apollo/client';
import {PaginationFragment} from '@/fragments/pagination';

import {IPagination} from '@/types/common';
import {IHomeworkResult} from '@/types/homework';

export interface IHomeworkResultsResponse {
  homeworkResults: {
    HomeworkResults: IHomeworkResult[];
    Pagination: IPagination;
  };
}

export const GET_HOMEWORKS_RESULTS = gql`
  query getHomeworkResults(
    $filter: HomeworkResultsFilterInput
    $limit: Int
    $offset: Int
  ) {
    homeworkResults(filter: $filter, limit: $limit, offset: $offset) {
      HomeworkResults {
        id
        score
        chatCreated
        completed
        submitted
        completeDate
        scoreDate
        createdAt
        User {
          fullName
        }
        Homework {
          type
          Module {
            Thread {
              title
            }
          }
          Lesson {
            Module {
              Thread {
                title
              }
            }
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
