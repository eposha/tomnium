import {gql} from '@apollo/client';
import {IAppointment} from '@/types/common';
import {MediaFragment} from '@/fragments/media';

export interface IFCAppointmentResponse {
  FCAppointment: IAppointment;
}

export const GET_FC_APPOINTMENT = gql`
  query FCAppointment($id: Int!) {
    FCAppointment(id: $id) {
      id
      startAt
      url
      Consultation {
        id
        title
        duration
        Author {
          id
          fullName
        }
      }
      User {
        id
        fullName
        phone
        email
        avatar {
          ...MediaFragment
        }
        Country {
          id
          name
        }
        City {
          id
          name
        }
        Language {
          id
          name
        }
        timezone
      }
    }
  }
  ${MediaFragment}
`;
