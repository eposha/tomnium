import {gql} from '@apollo/client';
import {IAppointment, IPagination} from '@/types/common';
import {PaginationFragment} from '@/fragments/pagination';

export interface IFCAppointmentsResponse {
  FCAppointmentsMy: {
    Appointments: IAppointment[];
    Pagination: IPagination;
  };
}

export const GET_FC_APPOINTMENTS = gql`
  query FCAppointmentsMy(
    $filter: FCAppointmentsMyFilterInput
    $sort: AppointmentsSortInput
  ) {
    FCAppointmentsMy(filter: $filter, sort: $sort) {
      Appointments {
        id
        startAt
        url
        Consultation {
          id
          title
        }
        User {
          id
          email
          fullName
        }
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;
