import {gql} from '@apollo/client';

export interface IAppointmentCancelRequest {
  id: number;
}

export interface IAppointmentCancelResponse {
  appointmentCancel: {
    id: number;
  };
}

export const APPOINTMENT_CANCEL = gql`
  mutation appointmentCancel($id: Int!) {
    appointmentCancel(id: $id) {
      id
    }
  }
`;
