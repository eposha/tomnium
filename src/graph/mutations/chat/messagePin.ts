import {gql} from '@apollo/client';

export const MESSAGE_PIN = gql`
  mutation messagePin($id: String!) {
    messagePin(id: $id) {
      id
      body
    }
  }
`;
