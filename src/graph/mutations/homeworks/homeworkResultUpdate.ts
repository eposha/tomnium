import {gql} from '@apollo/client';

export const HOMEWORK_RESULT_UPDATE = gql`
  mutation homeworkResultUpdate($record: HomeworkResultUpdateInput!) {
    homeworkResultUpdate(record: $record) {
      id
    }
  }
`;
