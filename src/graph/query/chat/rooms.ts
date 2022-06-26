import {gql} from '@apollo/client';

const ROOMS = gql`
  query rooms($limit: Int, $offset: Int) {
    rooms(limit: $limit, offset: $offset) {
      Rooms {
        id
        isActive
        lastMessage {
          id
          body
          meta {
            Author {
              id
              fullName
              avatar {
                path
              }
            }
          }
        }

        meta {
          Parent {
            id
            title
            entityName
          }
        }
        hasUnreadMessage
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

export default ROOMS;
