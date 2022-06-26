import {gql} from '@apollo/client';

import {ContentBlockFragment} from '@/fragments/contentBlock';
import {IQuizQuestion} from '@/types/quiz';

export interface IGetQuizNextQuestionRequest {
  quizId?: string | string[];
  answer?: {questionId?: string; optionIds?: string[]};
}

export interface IGetQuizNextQuestionResponse {
  quizNextQuestion: IQuizQuestion;
}

export const GET_QUIZ_NEXT_QUESTION = gql`
  mutation getQuizNextQuestion(
    $quizId: String!
    $answer: QuizQuestionAnswerCreateInput
  ) {
    quizNextQuestion(quizId: $quizId, answer: $answer) {
      id
      title
      type
      number
      QuizQuestionContent {
        ...ContentBlockFragment
      }
      QuizQuestionOptions {
        id
        title
        RateDuration {
          from
          to
        }
      }
      Quiz {
        questionCount
      }
    }
  }
  ${ContentBlockFragment}
`;
