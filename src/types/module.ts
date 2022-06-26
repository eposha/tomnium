import {IContentBlock} from './content-block';
import {IHomework} from '@/types/homework';
import {ILesson} from '@/types/lesson';
import {IProgress} from './progress';

export interface IModule {
  id: string;
  courseId: string;
  threadId: string;
  title: string;
  description: string;
  availabilityDate: Date;
  availableByDate: boolean;
  isAvailable: boolean | any;
  isFree: boolean;
  Homework: IHomework[];
  Lessons: ILesson[];
  slug?: string;
  UserModuleProgress?: IProgress;
  completionRate?: number;
  lessonsCount?: number;
  homeworksCount?: number;
  ModuleContents?: IContentBlock[];
}
