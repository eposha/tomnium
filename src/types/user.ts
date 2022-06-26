import {ITimezone} from '@/types/timezone';
import {IMedia} from './media';

export interface IUser {
  id?: string;
  fullName?: string;
  email?: string;
  avatar?: IMedia[];
  Currency: {
    code: string;
    id: number;
  };
  Language?: {
    id: number;
    code: string;
    nativeName: string;
    name: string;
  } | null;
  Timezone: ITimezone;
  phone?: string;
  isResident?: string;
  birthDate?: Date | string;
  Role: {
    id: string;
    name: string;
    displayName: string;
  };
  City: {
    id: number;
    name: string;
  };
  Country: {
    id: number;
    name: string;
  };
  Subscription: {
    maxActivated: number;
    activationsLeft: number;
    activationsUsed: number;
    Plan: {
      id: string;
      shortTitle: string;
      productId: string;
    };
  };
  timezone: string;
}
