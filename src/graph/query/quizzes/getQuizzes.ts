import {gql} from '@apollo/client';

import {PaginationFragment} from '@/fragments/pagination';
import {MediaFragment} from '@/fragments/media';

import {IPagination} from '@/types/common';
import {IQuiz} from '@/types/quiz';

export interface IGetQuizzesResponse {
  quizzes: {
    Quizzes: IQuiz[];
    Pagination: IPagination;
  };
}

export const GET_QUIZZES = gql`
  query getQuizzes($limit: Int, $offset: Int, $filter: QuizzesFilterInput) {
    quizzes(limit: $limit, offset: $offset, filter: $filter) {
      Quizzes {
        id
        title
        description
        type
        label
        duration
        studentsCount
        status
        questionCount
        usersImages {
          ...MediaFragment
        }
        imageWeb {
          ...MediaFragment
        }
        imageMob {
          ...MediaFragment
        }
        imageList {
          ...MediaFragment
        }
        QuizQuestion {
          id
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
