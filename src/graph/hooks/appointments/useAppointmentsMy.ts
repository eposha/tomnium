import {useLazyQuery} from '@apollo/client';
import {
  APPOINTMENTS_MY_QUERY,
  IAppointmentsMyResponse,
} from '@/query/appointments/';
import {SortType} from 'src/graphql.schema';
import {getIsToken} from '@/helpers/getIsToken';
import {useEffect} from 'react';

export const useAppointmentsMy = (
  consultationId?: string | number,
  queryAppointmentId?: string,
) => {
  const isToken = getIsToken();
  const [getData, {loading, error, data}] =
    useLazyQuery<IAppointmentsMyResponse>(APPOINTMENTS_MY_QUERY);

  useEffect(() => {
    if (!isToken || !consultationId) return;
    getData({
      variables: {
        filter: {consultationId},
        sort: {
          field: 'APPOINTMENT_FIELD_START_AT',
          type: SortType.SortTypeAsc,
        },
      },
    });
  }, [isToken, consultationId]);

  const appointmentsMy =
    data?.appointmentsMy?.map((it) => ({...it, bookedByMe: true})) || null;

  const queryAppointment = appointmentsMy?.find(
    (it) => String(it.id) === String(queryAppointmentId),
  );

  return {
    appointmentsMy,
    queryAppointment,
    loading,
    error,
  };
};
