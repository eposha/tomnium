import {AuthorEntityType} from '../graphql.schema';
import {IMedia} from './media';

export interface IAuthor {
  id: string;
  fullName: string;
  description?: string | null;
  avatar?: IMedia[] | null;
  regalia?: string | null;
  type?: AuthorEntityType | null;
  index: number;
}
