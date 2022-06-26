import {gql} from '@apollo/client';

export interface IResetQuizRequest {
  quizId?: string | string[];
}

export const RESET_QUIZ = gql`
  mutation quizReset($quizId: String!) {
    quizReset(quizId: $quizId)
  }
`;
