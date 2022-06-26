import {gql} from '@apollo/client';
import {EntityName, Message, RoomFindInput} from 'src/graphql.schema';

export interface IGetRoomByIdRequest {
  record: RoomFindInput;
}

export interface IGetRoomByIdResponse {
  room: {
    id: string;
    pinnedMessage?: Message;
    meta: {
      Parent: {
        id: string;
        title: string;
        entityName: EntityName;
      };
    };
  };
}

export const GET_ROOM_BY_ID = gql`
  query room($record: RoomFindInput!) {
    room(record: $record) {
      id
      pinnedMessage {
        id
        body
      }
      meta {
        Parent {
          id
          title
          entityName
        }
      }
    }
  }
`;
