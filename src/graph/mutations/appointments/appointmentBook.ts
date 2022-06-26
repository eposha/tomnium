import {gql} from '@apollo/client';

export interface IAppointmentBookRequest {
  id: number;
}

export interface IAppointmentBookResponse {
  appointmentBook: {
    id: number;
  };
}

export const APPOINTMENT_BOOK = gql`
  mutation appointmentBook($id: Int!) {
    appointmentBook(id: $id) {
      id
    }
  }
`;
