import {IContentBlock} from './content-block';
import {IHomework} from './homework';
import {IProgress} from './progress';

export interface ILesson {
  id: string;
  title: string;
  description: string;
  availabilityDate: Date;
  isAvailable: boolean | any;
  Homework: IHomework[];
  slug?: string;
  completionRate?: number;
  LessonContents?: IContentBlock;
  rate?: number;
  UserLessonProgress?: IProgress;
}
