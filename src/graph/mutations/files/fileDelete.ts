import {gql} from '@apollo/client';

export interface IFileDeleteRequest {
  id: number;
}

export const FILE_DELETE = gql`
  mutation fileDelete($id: Int!) {
    fileDelete(id: $id)
  }
`;
