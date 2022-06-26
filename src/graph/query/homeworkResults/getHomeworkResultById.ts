import {gql} from '@apollo/client';

import {IHomeworkResult} from '@/types/homework';

export interface IHomeworkTestResultsRequest {
  homeworkId?: string;
}

export interface IHomeworkTestResultsResponse {
  homeworkResult: IHomeworkResult;
}

export const GET_HOMEWORKS_TEST_RESULT = gql`
  query getHomeworkResults($homeworkId: String!) {
    homeworkResult(homeworkId: $homeworkId) {
      id
      score
    }
  }
`;
