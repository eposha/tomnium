import {IConsultation} from '@/types/consultation';
import {gql} from '@apollo/client';
import {PaginationFragment} from '@/fragments/pagination';
import {IPagination} from '@/types/common';

export interface IConsultationsResponse {
  consultations: {
    Consultations: IConsultation[];
    Pagination: IPagination;
  };
}

export const CONSULTATIONS_QUERY = gql`
  query consultations(
    $filter: ConsultationsFilterInput
    $offset: Int
    $limit: Int
  ) {
    consultations(filter: $filter, offset: $offset, limit: $limit) {
      ... on ConsultationResponse {
        Consultations {
          id
          slug
          image {
            path
            width
            isOriginal
          }
          MeetingMethod {
            id
            name
            icon {
              path
              isOriginal
            }
          }
          description
          label
          Categories {
            id
            displayName
          }
          Product {
            id
            title
            description
            landingUrl
            price
            oldPrice
            Tariffs {
              id
              name
              Prices {
                old
                default
                withSale
                sale
                Currency {
                  id
                  name
                  code
                }
              }
            }
          }
          duration
          Languages {
            nativeName
            code
          }
          title
        }
        Pagination {
          ...PaginationFragment
        }
      }
    }
  }
  ${PaginationFragment}
`;
