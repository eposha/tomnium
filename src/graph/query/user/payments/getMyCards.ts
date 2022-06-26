import {ICard} from '@/types/card';
import {gql} from '@apollo/client';

export interface IMyCardsResponse {
  cardsMy?: {
    id: string;
    displayName: string;
    Cards: ICard[];
  }[];
}

export const GET_MY_CARDS = gql`
  query cardsMy {
    cardsMy {
      id
      displayName
      Cards {
        id
        masked
        merchantId
        status
        type
      }
    }
  }
`;
