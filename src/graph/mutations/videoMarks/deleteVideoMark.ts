import {gql} from '@apollo/client';

export interface IDeleteMarkRequest {
  id: number;
}

export const DELETE_VIDEO_MARK = gql`
  mutation userVideoMarkDelete($id: Int!) {
    userVideoMarkDelete(id: $id)
  }
`;
