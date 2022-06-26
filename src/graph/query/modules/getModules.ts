import {gql} from '@apollo/client';
import {IModule, IPagination} from 'src/types';

import {HomeworkFragment} from '@/fragments/homework';
import {PaginationFragment} from '@/fragments/pagination';

export interface IGetModulesResponse {
  modules: IModule[];
}

export const GET_MODULES = gql`
  query modules($courseId: String, $threadId: String) {
    modules(courseId: $courseId, threadId: $threadId) {
      id
      courseId
      threadId
      title
      description
      availabilityDate
      isFree
      Homework {
        ...HomeworkFragment
      }
      Lessons {
        id
        title
        description
        availabilityDate

        Homework {
          ...HomeworkFragment
        }
      }
    }
  }
  ${HomeworkFragment}
`;

export interface IGetFCModulesResponse {
  FCModules: {
    Modules: IModule[];
    Pagination: IPagination;
  };
}

export const GET_MODULES_HOMEWORKS_STATS = gql`
  query modules(
    $limit: Int
    $offset: Int
    $filter: FCModulesFilterInput
    $sort: FCModulesSortInput
  ) {
    FCModules(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {
      Modules {
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
