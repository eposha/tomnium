import {IDuration, IFaq} from '@/types/common';
import {IConsultation} from '@/types/consultation';
import {ICourse, ITariff, IThread, IPlan, IMedia} from '@/types/index';
import {IGift} from './gift';

export interface IProduct {
  id: string;
  title: string;
  description: string;
  landingUrl: string;
  availableDuration: IDuration;
  availableBySubscription: boolean
  price: number;
  oldPrice: number;
  imageMob: IMedia[];
  imageWeb: IMedia[];
  Tariffs: ITariff[];
  Course: ICourse;
  Thread: IThread;
  Consultation: IConsultation;
  Faq: IFaq;
  Plan: IPlan;
  Gifts?: IGift[];
}
