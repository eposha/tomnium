import {IProduct} from './product';
import {IAuthor} from './author';
import {IDuration} from './common';
import {IMedia} from './media';
import {IModule} from './module';
import {IProgress} from './progress';
import {ICourse} from './courses';
import { Survey, ThreadAvailableAction } from 'src/graphql.schema';

export interface IThread {
  id: string;
  title: string;
  description: string;
  startSubmissionDate?: Date | null;
  endSubmissionDate?: Date | null;
  totalVideos: number;
  availableActions: [ThreadAvailableAction];
  totalAudios: number;
  homeworksCount: number;
  modulesCount: number;
  lessonsCount: number;
  learnDuration: IDuration;
  Survey: Survey
  image: IMedia[];
  Authors: IAuthor[];
  Modules: IModule[];
  completedHomeworkCount: number;
  published: boolean;
  Product: IProduct | null;
  UserThreadProgress?: IProgress;
  Course?: ICourse;
  freeTitle?: string;
  freeDescription?: string;
  freeImage?: IMedia[];
  MyTariff?: {
    id: number;
    index: number;
  };
  courseId: string;
}
