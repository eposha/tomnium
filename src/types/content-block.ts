import {ILanguage} from './language';

export interface IContentBlock {
  id: number;
  Language: ILanguage;
  content: any;
}
