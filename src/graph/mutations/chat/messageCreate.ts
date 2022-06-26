import {gql} from '@apollo/client';

export const MESSAGES_CREATE = gql`
  mutation messageCreate($record: MessageCreateInput) {
    messageCreate(record: $record) {
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
          avatar {
            path
          }
        }
        file {
          path
          fileName
        }
        avatarTheme
      }
      belongsToMyCompany
      createdAt
      updatedAt
    }
  }
`;
