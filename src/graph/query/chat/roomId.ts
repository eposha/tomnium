import {gql} from '@apollo/client';

const ROOM_ID = gql`
  query room($record: RoomFindInput!) {
    room(record: $record) {
      id
      lastMessage {
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

export default ROOM_ID;
