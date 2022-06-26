import {gql} from '@apollo/client';

export interface IFCHomeworkResultChatCreateRequest {
  record: {
    id?: number;
    chatCreated: boolean;
  };
}

export interface IFCHomeworkResulChatCreateResponse {
  id: number;
}

export const FC_HOMEWORK_RESULT_CHAT_CREATE = gql`
  mutation FCHomeworkResultUpdate($record: FCHomeworkResultUpdateInput!) {
    FCHomeworkResultUpdate(record: $record) {
      id
    }
  }
`;
