import {gql} from '@apollo/client';

export interface IFCHomeworkResultUpdateRequest {
  record: {
    id?: number;
    completed: boolean;
    score: number;
  };
}

export interface IFCHomeworkResultUpdateResponse {
  id: number;
}

export const FC_HOMEWORK_RESULT_UPDATE = gql`
  mutation FCHomeworkResultUpdate($record: FCHomeworkResultUpdateInput!) {
    FCHomeworkResultUpdate(record: $record) {
      id
    }
  }
`;
