import {IDuration} from '@/types/index';
import {IMedia} from './media';

export interface IPlan {
  id: string;
  title: string;
  shortTitle: string;
  duration: IDuration;
  trialPeriod: number;
  duePeriod: number;
  imageWeb: IMedia[];
}
