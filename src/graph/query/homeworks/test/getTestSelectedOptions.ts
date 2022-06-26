import {IHomeworkTestQuestionOption} from '@/types/homework';
import {gql} from '@apollo/client';

export interface ITestSelectedOptionsResponse {
  homeworkTestQuestionOptions: IHomeworkTestQuestionOption[];
}

export interface ITestSelectedOptionsRequest {
  questionIds?: number[];
}

export const GET_TEST_SELECTED_OPTIONS = gql`
  query homeworkById($questionIds: [Int]!) {
    homeworkTestQuestionOptions(questionIds: $questionIds) {
      id
    }
  }
`;
