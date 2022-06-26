import {
  HomeworkQuestionType,
  HomeworkType,
  UserHomeworkStatus,
} from 'src/graphql.schema';
import {IContentBlock} from './content-block';

export interface IHomework {
  id: string;
  title: string;
  description: string;
  type: HomeworkType;
  status: UserHomeworkStatus;
  createdAt: Date;
  updatedAt: Date;
  HomeworkContent: IContentBlock;
  HomeworkFluentContent?: IContentBlock;
  HomeworkTestQuestions?: IHomeworkTestQuestion[];
  maxScore: number;
}

export interface IHomeworkTypeTask {
  id: string;
  title: string;
  description: string;
  type: HomeworkType;
  status: UserHomeworkStatus;
  createdAt: Date;
  updatedAt: Date;
  HomeworkTasks: {id: number; title: string; index: number; rate: number}[];
}

export interface IHomeworkResult {
  id: string;
  score: number;
  chatCreated: boolean;
  completed: boolean;
  submitted: boolean;
  completeDate: Date;
  scoreDate: Date;
  createdAt: Date;
  Module: {
    Thread: {
      title: string;
    };
  };
  Lesson: {
    Module: {
      Thread: {
        title: string;
      };
    };
  };
}

export interface IHomeworkTestQuestion {
  id: number;
  title: string;
  type: HomeworkQuestionType;
  HomeworkTestQuestionContent: IContentBlock;
  HomeworkTestQuestionOptions: IHomeworkTestQuestionOption[];
}

export interface IHomeworkTestQuestionOption {
  id: number;
  title: string;
  right: boolean;
  clarification: string;
  questionId: number;
}
