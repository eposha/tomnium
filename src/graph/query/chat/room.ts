import {gql} from '@apollo/client';

const ROOM = gql`
  query room($record: RoomFindInput!) {
    room(record: $record) {
      id
      isActive
      pinnedMessage {
        id
        body
        type
        theme
        isEdited
        isMy
        isRead
        meta {
          Author {
            id
            fullName
          }
          avatarTheme
          file {
            path
            fileName
            width
            height
            size
            isOriginal
          }
        }
        createdAt
        updatedAt
      }
      hasUnreadMessage
      meta {
        Parent {
          entityName
          id
          title
        }
      }
    }
  }
`;

export default ROOM;
