import {gql} from '@apollo/client';
import {PaginationFragment} from '@/fragments/pagination';
import {ILesson, IPagination} from 'src/types';

export interface IGetFCLessonsResponse {
  FCLessons: {
    Lessons: ILesson[];
    Pagination: IPagination;
  };
}

export const GET_LESSONS_HOMEWORKS_STATS = gql`
  query FCLessons(
    $limit: Int
    $offset: Int
    $filter: FCLessonsFilterInput
    $sort: FCLessonsSortInput
  ) {
    FCLessons(limit: $limit, offset: $offset, filter: $filter, sort: $sort) {
      Lessons {
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
