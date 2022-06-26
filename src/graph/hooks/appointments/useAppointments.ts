import {APPOINTMENTS_QUERY, IAppointmentsResponse} from '@/query/appointments/';
import {SortType} from 'src/graphql.schema';
import {useState} from 'react';
import {initApollo} from '@/lib/apolloClient';
import {IAppointment} from '@/types/common';
import {addSeconds, startOfDay, startOfMonth, endOfMonth} from 'date-fns';
import {ApolloError} from '@apollo/client';
import {zonedTimeToUtc} from 'date-fns-tz';

export interface IUseAppointments {
  fetchAppointments: (
    startAt?: Date | null,
    byMonth?: boolean,
  ) => Promise<void>;
  appointments?: IAppointment[] | null;
  loading: boolean;
  error?: ApolloError | null;
}

export const useAppointments = (options: {
  consultationId?: string | number;
  timezone?: string;
}): IUseAppointments => {
  const {consultationId, timezone} = options;
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApolloError | null | undefined>(null);
  const apolloClient = initApollo();

  const fetchAppointments = async (
    startAt?: Date | null,
    byMonth?: boolean,
  ) => {
    if (!startAt || !timezone || !consultationId) return;
    setLoading(true);

    let startTime: Date;
    let endTime: Date;

    if (!byMonth) {
      startTime = zonedTimeToUtc(startOfDay(startAt), timezone);
      endTime = addSeconds(startTime, 86399);
    } else {
      startTime = zonedTimeToUtc(startOfMonth(startAt), timezone);
      endTime = zonedTimeToUtc(endOfMonth(startAt), timezone);
    }

    try {
      const {
        data,
        loading: queryLoading,
        error,
      } = await apolloClient.query<IAppointmentsResponse>({
        query: APPOINTMENTS_QUERY,
        variables: {
          filter: {consultationId, startAt: {from: startTime, to: endTime}},
          sort: {
            field: 'APPOINTMENT_FIELD_START_AT',
            type: SortType.SortTypeAsc,
          },
        },
        fetchPolicy: 'no-cache',
      });

      if (error) {
        setError(error);
      }

      const res = data?.appointments;
      setAppointments(res);
      setLoading(queryLoading);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return {
    appointments: appointments || null,
    fetchAppointments,
    loading,
    error,
  };
};
