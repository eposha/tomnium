import {DOCUMENT_TYPE} from '@/constants/common';
import {IAuthor} from './author';
import {ICategory} from './category';
import {IDuration} from './common';
import {ICourse} from './courses';
import {IMedia} from './media';

export interface IDocument {
  id: string;
  Author?: IAuthor | null;
  Category?: ICategory[];
  Course: ICourse | null;
  DocumentContents?: any;
  description?: string;
  durationLabel?: IDuration;
  chatCreated?: boolean;
  imageList?: IMedia[];
  imageMob?: IMedia[];
  imageWeb?: IMedia[];
  isFavorite?: boolean;
  label?: string;
  publishDate?: Date | null;
  quizQuestionCount?: number;
  startDate?: Date | null;
  title?: string;
  type: keyof typeof DOCUMENT_TYPE;
  visibleSince?: Date | null;
  visibleUntil?: Date | null;
}
