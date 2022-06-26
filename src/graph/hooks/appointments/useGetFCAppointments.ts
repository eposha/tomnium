import {useQuery} from '@apollo/client';

import {
  AppointmentsMyFilterInput,
  AppointmentsSortInput,
} from 'src/graphql.schema';

import {
  GET_FC_APPOINTMENTS,
  IFCAppointmentsResponse,
} from '@/query/appointments/FCAppointmentsMy';

export const useGetFCAppointments = (variables: {
  offset?: number;
  limit?: number;
  filter?: AppointmentsMyFilterInput;
  sort?: AppointmentsSortInput;
}) => {
  const {data, loading} = useQuery<IFCAppointmentsResponse>(
    GET_FC_APPOINTMENTS,
    {
      variables,
      fetchPolicy: 'cache-and-network',
    },
  );

  return {
    appointments: data?.FCAppointmentsMy?.Appointments || [],
    pagination: data?.FCAppointmentsMy?.Pagination,
    loading,
  };
};
