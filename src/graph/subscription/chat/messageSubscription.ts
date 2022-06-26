import {gql} from '@apollo/client';

export const MESSAGE_SUBSCRIPTION = gql`
  subscription ($roomId: String!) {
    messageSubscription(roomId: $roomId) {
      Message {
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
          meta {
            Author {
              fullName
            }
          }
        }
        meta {
          file {
            path
            fileName
            width
            height
            size
          }
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
  }
`;
