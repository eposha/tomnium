import {IAuthor} from '@/types/author';
import {
  IAppointment,
  IInterval,
  ISelectOption,
  ISelectOptions,
  TFeedbacks,
} from '@/types/common';
import {IMedia} from '@/types/media';
import {ConsultationDuration, Content, User} from 'src/graphql.schema';
import {IPrice} from './price';
import {IProduct} from './product';

export type TLanguagesConsultation =
  | {nativeName: string; code: string}[]
  | null;

export interface IConsultation {
  id: string | number;
  productId?: string;
  Appointments?: IAppointment[] | null;
  Consultant?: User;
  Author?: IAuthor | null;
  Categories:
    | {
        id: string;
        displayName: string;
      }[]
    | null;
  Languages: TLanguagesConsultation;
  Prices: IPrice[] | null;
  description?: string;
  title?: string;
  duration: ConsultationDuration;
  label: string | null;
  ticketsCount: number;
  image?: IMedia[] | null;
  MeetingMethod: {
    id: number;
    name: string;
    icon: IMedia[];
  };
  ConsultationFeedbacks?: TFeedbacks;
  ConsultationContent?: Content[] | null;
  beforeCancelDuration: IInterval | null;
  isFavorite?: boolean;
  Product?: IProduct;
  seoTitle?: string;
  seoDescription?: string;
  slug?: string;
}

export interface IAdditionalCardFields {
  key?: string | number;
  appointment?: IAppointment | null;
  duration?: ConsultationDuration | string;
  price?: string;
  languages?: string;
  entityLink?: string;
  buyLink?: string;
  isOwner?: boolean;
  categoryLabels?: {id: string; title: string}[];
  isFavorite?: boolean;
  currencies?: any;
  currentCurrencyId?: number;
  isPurchases?: boolean;
  meetingMethod?: {
    id: number;
    name: string;
    icon: IMedia[];
  };
}

export type TPropsCard = Omit<Partial<IConsultation>, 'duration'> &
  IAdditionalCardFields;

export type TSubCard = TPropsCard & {
  imageScr: string;
  handleChangeFavorite: () => void;
  selectChange?: any;
  selectOptions?: any;
  selectValue?: any;
  dataPricesSelect?: any;
};

export interface IDataSelect {
  options: ISelectOptions;
  defaultValue?: ISelectOption;
}
