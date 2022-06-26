import {gql} from '@apollo/client';

export const GET_MESSAGES = gql`
  query messages($filter: MessagesFilterInput!, $limit: Int, $offset: Int) {
    messages(filter: $filter, limit: $limit, offset: $offset) {
      Messages {
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
        belongsToMyCompany
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
        createdAt
        updatedAt
      }
      Pagination {
        total
        totalPages
        currentPage
        nextPageExists
        previousPageExists
      }
    }
  }
`;
