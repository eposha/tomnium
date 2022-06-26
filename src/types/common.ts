import {EntityName} from 'src/graphql.schema';
import {IConsultation} from './consultation';
import {IMedia} from './media';
import {IUser} from './user';

export interface IAppointment {
  id: number | string;
  startAt: string | Date;
  consultationId: string;
  bookedByMe?: boolean | null;
  url?: string | null;
  active?: boolean;
  Consultation: IConsultation;
  User: IUser;
}

export interface IMeetingMethod {
  id: number;
  name: string;
  icon: IMedia[];
}
export interface IDuration {
  years?: number | null;
  months?: number | null;
  weeks?: number | null;
  days?: number | null;
  hours?: number | null;
  minutes?: number | null;
  seconds?: number | null;
}

export interface ISelectOption {
  label: string | number;
  value: any;
}

export type ISelectOptions = ISelectOption[];

export interface IFeedBack {
  avatar: IMedia[];
  text: string;
  fullName: string;
  regalia: string;
  id: string;
}

export type TFeedbacks = IFeedBack[] | null;

export interface IPagination {
  currentPage: number;
  nextPageExists: boolean;
  previousPageExists: boolean;
  total: number;
  totalPages: number;
}

export interface IInterval {
  hours?: number | null;
  minutes?: number | null;
  seconds?: number | null;
}

export type TypeFAQ =
  | {
      title: string;
      content: string;
    }[]
  | {
      title: string;
      body: string;
    }[]
  | undefined;

export interface IFaq {
  id: number;
  title: string;
  FaqOptions: {
    id: number;
    index: number;
    title: {language: string; content: string}[];
    body: {language: string; content: string}[];
  }[];
}

export interface IFaqOptions {
  id: number;
  index: number;
  title: {language: string; content: string}[];
  body: {language: string; content: string}[];
}

export interface ICookiesProps {
  languageCode: string | number;
  currencyId: string | number;
  timezoneCode: string | number;
}

export interface IEntityParent {
  id: string;
  entityName: EntityName;
  title: string;
  Parent?: IEntityParent | null;
  type?: string;
}
