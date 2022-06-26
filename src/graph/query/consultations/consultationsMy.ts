import {IConsultation} from '@/types/consultation';
import {gql} from '@apollo/client';
import {ConsultationFragment} from '@/fragments/consultation';

export interface IConsultationsMyResponse {
  consultationsMy: IConsultation[];
}

export const CONSULTATIONS_MY_QUERY = gql`
  query consultationsMy {
    consultationsMy {
      ...ConsultationFragment
    }
  }
  ${ConsultationFragment}
`;
