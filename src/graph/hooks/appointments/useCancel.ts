import {ApolloError, useMutation} from '@apollo/client';
import {
  APPOINTMENT_CANCEL,
  IAppointmentCancelRequest,
  IAppointmentCancelResponse,
} from '@/mutations/appointments/appointmentCancel';
import {Dispatch, SetStateAction, useState} from 'react';
import {CONSULTATION_QUERY} from '@/query/consultations';
import {APPOINTMENTS_MY_QUERY} from '@/query/appointments';
import {SortType} from 'src/graphql.schema';

export interface IUseCancelAppointment {
  onCancelAppointment: (id: number) => Promise<void>;
  success: string | null;
  setSuccess: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  error?: ApolloError;
}

export const useCancelAppointment = (options: {
  consultationId?: string | number;
  fetchAppointments: () => void;
}): IUseCancelAppointment => {
  const {consultationId, fetchAppointments} = options;
  const [success, setSuccess] = useState<string | null>(null);

  const [cancel, {loading, error}] = useMutation<
    IAppointmentCancelResponse,
    IAppointmentCancelRequest
  >(APPOINTMENT_CANCEL, {
    onCompleted() {
      setSuccess('Консультация отменена');
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

  const onCancelAppointment = async (id: number): Promise<void> => {
    try {
      await cancel({
        variables: {id},
      });
    } catch (error) {
      setSuccess(null);
      console.log(error);
    }
  };

  return {
    onCancelAppointment,
    success,
    setSuccess,
    error,
    loading,
  };
};
