import {gql} from '@apollo/client';

export const HOMEWORK_RESULT_CREATE = gql`
  mutation homeworkResultCreate($record: HomeworkResultCreate) {
    homeworkResultCreate(record: $record) {
      id
      score
      content
      chatCreated
      completed
      submitted
      completeDate
      scoreDate
      createdAt
    }
  }
`;
