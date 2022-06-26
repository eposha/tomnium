import {gql} from '@apollo/client';
import {IAppointment} from '@/types/common';

export interface IAppointmentsMyResponse {
  appointmentsMy: IAppointment[];
}

export const APPOINTMENTS_MY_QUERY = gql`
  query appointmentsMy(
    $filter: AppointmentsMyFilterInput
    $sort: AppointmentsSortInput
  ) {
    appointmentsMy(filter: $filter, sort: $sort) {
      id
      startAt
      url
      active
      bookedByMe
    }
  }
`;
