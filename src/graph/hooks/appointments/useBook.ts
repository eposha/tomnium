import {ApolloError, useMutation} from '@apollo/client';
import {Dispatch, SetStateAction, useState} from 'react';
import {
  APPOINTMENT_BOOK,
  IAppointmentBookRequest,
  IAppointmentBookResponse,
} from '@/mutations/appointments/appointmentBook';
import {CONSULTATION_QUERY} from '@/query/consultations';
import {APPOINTMENTS_MY_QUERY} from '@/query/appointments';
import {SortType} from 'src/graphql.schema';

export interface IUseBookAppointment {
  onBookAppointment: (id: number) => Promise<void>;
  success: null | string;
  loading: boolean;
  setSuccess: Dispatch<SetStateAction<string | null>>;
  error?: ApolloError;
}

export const useBookAppointment = (options: {
  consultationId?: string | number;
  fetchAppointments: () => void;
}): IUseBookAppointment => {
  const [success, setSuccess] = useState<null | string>(null);
  const {consultationId, fetchAppointments} = options;

  const [book, {loading, error}] = useMutation<
    IAppointmentBookResponse,
    IAppointmentBookRequest
  >(APPOINTMENT_BOOK, {
    onCompleted() {
      setSuccess('Консультация забронирована');
      fetchAppointments();
    },
    refetchQueries: [
      {
        query: CONSULTATION_QUERY,
        variables: {record: {id: consultationId}},
      },
      {
        query: APPOINTMENTS_MY_QUERY,
        variables: {
          filter: {consultationId},
          sort: {
            field: 'APPOINTMENT_FIELD_START_AT',
            type: SortType.SortTypeAsc,
          },
        },
      },
    ],
  });

  const onBookAppointment = async (id: number): Promise<void> => {
    try {
      await book({
        variables: {id},
      });
    } catch (error) {
      setSuccess(null);
      console.log(error);
    }
  };

  return {
    onBookAppointment,
    success,
    setSuccess,
    loading,
    error,
  };
};
