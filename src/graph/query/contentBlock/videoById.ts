import {gql} from '@apollo/client';
import {FaVideo} from 'src/graphql.schema';

export interface IGetVideoResponse {
  videoById: FaVideo;
}

export const GET_VIDEO = gql`
  query videoById($id: String!) {
    videoById(id: $id) {
      id
      title
      description
      image {
        path
      }
      redirectUrl
      createdAt
      updatedAt
      Subtitles {
        Language {
          id
          name
          nativeName
          code
          index
        }
        file
      }
      VideoMarks {
        id
        timing
        text
      }
      VideoFiles {
        path
        resolution
      }
    }
  }
`;
