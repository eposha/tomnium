import {IHomeworkResult} from '@/types/homework';
import {gql} from '@apollo/client';

export interface IHomeworkResultCalculateRequest {
  homeworkId?: string | string[];
}

export interface IHomeworkResultCalculateResponse {
  homeworkResultCalculate: IHomeworkResult;
}

export const HOMEWORK_RESULT_CALCULATE = gql`
  mutation homeworkResultCalculate($homeworkId: String!) {
    homeworkResultCalculate(homeworkId: $homeworkId) {
      id
    }
  }
`;
