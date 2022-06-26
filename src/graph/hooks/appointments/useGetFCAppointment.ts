import {useQuery} from '@apollo/client';

import {
  GET_FC_APPOINTMENT,
  IFCAppointmentResponse,
} from '@/query/appointments/FCAppointment';

export const useGetFCAppointment = (variables: {id: number}) => {
  const {data, loading} = useQuery<IFCAppointmentResponse>(GET_FC_APPOINTMENT, {
    variables,
  });

  return {
    appointment: data?.FCAppointment || null,
    loading,
  };
};
