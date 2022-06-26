import {IAuthor} from '@/types/author';
import {IDuration, IFaq, IFeedBack} from '@/types/common';
import {IMedia} from '@/types/media';
import {IThread} from '@/types/thread';
import {CourseStatus} from 'src/graphql.schema';
import {IGift} from './gift';

export interface ICourse {
  id: string;
  title: string;
  description: string;
  label?: string;
  studentsCount?: number;
  Authors: IAuthor[];
  imageMob?: IMedia[];
  imageWeb?: IMedia[];
  imageList?: IMedia[];
  learnDuration?: IDuration;
  Threads: IThread[];
  CourseContent?: any;
  Gifts?: IGift[];
  CourseFeedbacks: IFeedBack[];
  usersImages: [IMedia[]];
  Faq: IFaq;
  isFavorite?: boolean;
  seoTitle: string;
  seoDescription: string;
  slug?: string;
  exclusive: boolean;
  DefaultThread: IThread | null;
  OwnThread: IThread | null;
  status: CourseStatus;
  freeTitle?: string;
  freeDescription?: string;
  freeImage?: IMedia[];
}
