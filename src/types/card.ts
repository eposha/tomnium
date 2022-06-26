import {CardStatus, CardType} from 'src/graphql.schema';

export interface ICard {
  id: string;
  merchantId: string;
  status: CardStatus;
  type: CardType;
  masked: string;
}
