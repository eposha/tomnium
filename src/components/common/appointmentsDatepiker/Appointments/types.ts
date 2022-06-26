import {SyntheticEvent} from 'react';
import {
  IUseAppointments,
  IUseBookAppointment,
} from '@/graph-hooks/appointments';
import {IAppointment, ISelectOption, ISelectOptions} from '@/types/common';
import {ConsultationDuration} from 'src/graphql.schema';

export interface IAppointmentsProps {
  timeSelected: Date | null;
  selectedDate: Date | null;
  dataAppointments: IUseAppointments;
  dataBookAppointment: IUseBookAppointment;
  currentAppointment: IAppointment | null;
  isContent: boolean;
  handleClick: (
    item: IAppointment,
    isDisabled: boolean,
  ) => (e: SyntheticEvent) => void;
  title: string | null;
  timezonesOptions: ISelectOptions;
  dataTimezone: {
    timezone: ISelectOption;
    onChangeTimezone: (tz: ISelectOption) => void;
  };
  loading: boolean;
  locale: Locale;
  duration: ConsultationDuration | string;
  handleOpenCancelAppointmentModal: () => void;
}
