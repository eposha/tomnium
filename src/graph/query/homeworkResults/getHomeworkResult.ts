import {gql} from '@apollo/client';
import {HomeworkResult} from 'src/graphql.schema';

export interface IGetHomeworkResultResponse {
  homeworkResult: HomeworkResult;
}

export const GET_HOMEWORK_RESULT = gql`
  query homeworkResult($homeworkId: String!) {
    homeworkResult(homeworkId: $homeworkId) {
      id
      score
      content
      chatCreated
      completed
      submitted
      completeDate
      scoreDate
      createdAt
      User {
        id
        fullName
      }
    }
  }
`;
