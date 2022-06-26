import {gql} from '@apollo/client';

export const MESSAGES_DELETE = gql`
  mutation messageDelete($id: String!) {
    messageDelete(id: $id) {
      id
    }
  }
`;
