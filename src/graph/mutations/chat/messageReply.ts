import {gql} from '@apollo/client';

export const MESSAGES_REPLY = gql`
  mutation messageReply($record: MessageReplyInput) {
    messageReply(record: $record) {
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
