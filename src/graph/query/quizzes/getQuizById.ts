import {gql} from '@apollo/client';

import {MediaFragment} from '@/fragments/media';
import {ContentBlockFragment} from '@/fragments/contentBlock';

import {IQuiz} from '@/types/quiz';

export interface IGetQuizByIdResponse {
  quizById: IQuiz;
}

export const GET_QUIZ_BY_ID = gql`
  query getQuizById($id: String!) {
    quizById(id: $id) {
      id
      type
      imageWeb {
        ...MediaFragment
      }
      imageList {
        ...MediaFragment
      }
      QuizContent {
        ...ContentBlockFragment
      }
    }
  }
  ${MediaFragment}
  ${ContentBlockFragment}
`;
