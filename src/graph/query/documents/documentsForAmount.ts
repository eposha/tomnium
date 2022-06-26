import {gql} from '@apollo/client';

export interface IDocumentsForAmountResponse {
  documents: {
    Documents: {id: string}[];
  };
}

export const GET_DOCUMENTS_FOR_AMOUNT = gql`
  query documents($limit: Int) {
    documents(limit: $limit) {
      Documents {
        id
      }
    }
  }
`;
