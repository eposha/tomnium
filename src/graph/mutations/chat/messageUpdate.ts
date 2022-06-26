import {gql} from '@apollo/client';

export const MESSAGES_UPDATE = gql`
  mutation messageUpdate($record: MessageUpdateInput) {
    messageUpdate(record: $record) {
      id
      body
      type
      theme
      isEdited
      isMy
      isRead
      repliedMessage {
        id
        body
      }
      meta {
        Author {
          id
          fullName
          avatar {
            path
          }
        }
        avatarTheme
      }
      belongsToMyCompany
      createdAt
      updatedAt
    }
  }
`;
