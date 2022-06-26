import {GiftEntityType} from 'src/graphql.schema';
import {IDocument, ITariff} from '@/types/index';

export interface IGift {
  id: string;
  title: string;
  description: string;
  type: GiftEntityType;
  Document?: IDocument;
  Tariff?: ITariff;
  tariffIds: number[];
}
