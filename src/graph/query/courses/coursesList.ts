import {gql} from '@apollo/client';
import {PaginationFragment} from '@/fragments/pagination';
import {ICourse} from '@/types/courses';
import {IPagination} from '@/types/common';
import {MediaFragment} from '@/fragments/media';

export interface ICoursesListResponse {
  courses: {
    Courses: ICourse[];
    Pagination: IPagination;
  };
}

export const COURSES_LIST = gql`
  query courses($limit: Int, $offset: Int, $filter: CoursesFilterInput) {
    courses(limit: $limit, offset: $offset, filter: $filter) {
      Courses {
        id
        title
        description
        label
        studentsCount
        isFavorite
        slug
        exclusive
        learnDuration {
          years
          months
          weeks
          days
          hours
          minutes
          seconds
        }
        DefaultThread {
          startSubmissionDate
          lessonsCount
        }
        status
        imageList {
          ...MediaFragment
        }
        usersImages {
          ...MediaFragment
        }
        Threads {
          startSubmissionDate
          lessonsCount
        }
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${MediaFragment}
  ${PaginationFragment}
`;

export const COURSES_FOR_SELECT = gql`
  query courses($limit: Int, $offset: Int) {
    courses(limit: $limit, offset: $offset) {
      Courses {
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
