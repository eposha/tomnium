import {gql} from '@apollo/client';

export interface ICardDeleteRequest {
  id: string;
}

export const CARD_DELETE = gql`
  mutation cardDelete($id: String!) {
    cardDelete(id: $id)
  }
`;
