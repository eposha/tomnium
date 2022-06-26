import {IConsultation} from '@/types/consultation';
import {gql} from '@apollo/client';

export interface IFCConsultationsMyOptionsResponse {
  FCConsultationsMy: {
    Consultations: IConsultation[];
  };
}

export const GET_FC_CONSULTATIONS_MY_OPTIONS = gql`
  query FCConsultationsMy {
    FCConsultationsMy {
      Consultations {
        id
        title
      }
    }
  }
`;
