import {gql} from '@apollo/client';

export interface IFreeThreadRequest {
  id: string;
}

export const ACTIVATE_FREE_THREAD = gql`
  mutation threadFreeActivate($id: String!) {
    threadFreeActivate(id: $id)
  }
`;
