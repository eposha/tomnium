import {gql} from '@apollo/client';
import {IAppointment} from '@/types/common';

export interface IAppointmentsResponse {
  appointments: IAppointment[];
}

export const APPOINTMENTS_QUERY = gql`
  query appointments(
    $filter: AppointmentsFilterInput
    $sort: AppointmentsSortInput
  ) {
    appointments(filter: $filter, sort: $sort) {
      id
      startAt
      url
      active
      bookedByMe
    }
  }
`;
