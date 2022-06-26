import {IFaq} from '@/types/common';
import {gql} from '@apollo/client';

export interface IFaqByIdResponse {
  faq: IFaq;
}

export interface IFaqByIdRequest {
  id: number;
}

export const FAQ_BY_ID = gql`
  query faq($id: Int!) {
    faq(id: $id) {
      id
      title
      FaqOptions {
        id
        index
        title
        body
      }
    }
  }
`;
