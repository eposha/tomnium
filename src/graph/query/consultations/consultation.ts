import {IConsultation} from '@/types/consultation';
import {gql} from '@apollo/client';
import {ConsultationFragment} from '@/fragments/consultation';
import {MediaFragment} from '@/fragments/media';
import {ProductFragment} from '@/fragments/product';

export interface IConsultationResponse {
  consultation: IConsultation;
}

export const CONSULTATION_QUERY = gql`
  query consultation($record: StringIdOrSlug!) {
    consultation(record: $record) {
      productId
      ConsultationFeedbacks {
        avatar {
          ...MediaFragment
        }
        fullName
        regalia
        text
      }
      ConsultationContent {
        id
        Language {
          nativeName
          code
        }
        content
      }
      Faq {
        id
        title
        FaqOptions {
          id
          index
          title
          body
        }
      }
      Product {
        ...ProductFragment
      }
      beforeCancelDuration
      ...ConsultationFragment
    }
  }
  ${ConsultationFragment}
  ${MediaFragment}
  ${ProductFragment}
`;
