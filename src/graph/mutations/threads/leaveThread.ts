import {gql} from '@apollo/client';

export interface ILeaveThreadRequest {
  id: string;
}

export const LEAVE_THREAD = gql`
  mutation threadLeave($id: String!) {
    threadLeave(id: $id)
  }
`;
