import {QuizUserStatus} from 'src/graphql.schema';
import {IInterval} from './common';
import {IConsultation} from './consultation';
import {IContentBlock} from './content-block';
import {ICourse} from './courses';
import {IDocument} from './document';
import {IMedia} from './media';

export interface IQuiz {
  id: string;
  title: string;
  description: string;
  type: string;
  label: string;
  studentsCount: number;
  duration: IInterval;
  imageWeb: IMedia[];
  imageMob: IMedia[];
  imageList: IMedia[];
  QuizQuestion: IQuizQuestion[];
  QuizContent: IContentBlock;
  questionCount: number;
  status: QuizUserStatus;
  usersImages: [IMedia[]];
}

export interface IQuizQuestion {
  id: string;
  title: string;
  type: string;
  forGuest: boolean;
  QuizQuestionContent: IContentBlock;
  QuizQuestionOptions: IQuizQuestionOption[];
  Quiz: {
    questionCount: number;
  };
  number: number;
}

export interface IQuizQuestionOption {
  id: string;
  title: string;
  recommendation: string;
  weight: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  RateDuration: {
    from: number;
    to: number;
  };
}

export interface IQuizRecommendationsResults {
  id: string;
  title: string;
  description: string;
  iconDisabled: IMedia[];
  iconEnabled: IMedia[];
  Recommendations: {
    id: string;
    text: string;
  }[];
}

export interface IQuizResult {
  QuizRecommendationResults: IQuizRecommendationsResults[];
  QuizRecommendedCourseResults: {
    Course: ICourse;
  }[];
  QuizRecommendedDocumentResults: {
    Document: IDocument;
  }[];
  QuizRecommendedConsultationResults: {
    Consultation: IConsultation;
  }[];
}

export interface IQuizRecommendationGroup {
  id: string;
  title: string;
  description?: string;
  iconDisabled?: IMedia[];
  iconEnabled?: IMedia[];
}
