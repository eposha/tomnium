import {gql} from '@apollo/client';

import {PaginationFragment} from '@/fragments/pagination';

import {IPagination} from '@/types/common';
import {IThread} from 'src/types';

export interface IGetThreadsResponse {
  FCThreads: {
    Threads: IThread[];
    Pagination: IPagination;
  };
}

export const GET_THREADS_FOR_SELECT = gql`
  query getThreads(
    $limit: Int
    $offset: Int
    $filter: FCThreadsFilterInput
    $sort: FCThreadsSortInput
  ) {
    FCThreads(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {
      Threads {
        id
        title
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;

export const GET_THREADS = gql`
  query getThreads(
    $limit: Int
    $offset: Int
    $filter: FCThreadsFilterInput
    $sort: FCThreadsSortInput
  ) {
    FCThreads(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {
      Threads {
        id
        title
        startSubmissionDate
        endSubmissionDate
        studentsCount
        homeworksCount
        completedHomeworkCount
        published
        Product {
          price
        }
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;

export const GET_THREADS_HOMEWORK_STATS = gql`
  query getThreads(
    $limit: Int
    $offset: Int
    $filter: FCThreadsFilterInput
    $sort: FCThreadsSortInput
  ) {
    FCThreads(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {
      Threads {
        id
        title
        homeworksCount
        availableHomeworkCount
        submittedHomeworkCount
        completedHomeworkCount
        uncompletedHomeworkResultCount
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;

export const GET_THREADS_STUDENTS_STATS = gql`
  query getThreads(
    $limit: Int
    $offset: Int
    $filter: FCThreadsFilterInput
    $sort: FCThreadsSortInput
  ) {
    FCThreads(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {
      Threads {
        id
        title
        studentsCount
        studentsCompletedCount
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;

export const GET_THREADS_STATS = gql`
  query getThreads(
    $limit: Int
    $offset: Int
    $filter: FCThreadsFilterInput
    $sort: FCThreadsSortInput
  ) {
    FCThreads(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {
      Threads {
        id
        title
        startSubmissionDate
        Course{
          title
          Survey{
            id
            title
          }
        }
        Survey{
          id
        }
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;