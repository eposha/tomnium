import {gql} from '@apollo/client';
import {PurchasesFilterInput, PurchasesSortInput} from 'src/graphql.schema';
import {IPagination, IPurchase} from '@/types/index';
import {MediaFragment} from '@/fragments/media';
import {LearnDurationFragment} from '@/fragments/learnDuration';
import {PaginationFragment} from '@/fragments/pagination';

export interface IGetPurchasesRequest {
  filter?: PurchasesFilterInput;
  sort?: PurchasesSortInput;
}

export interface IGetPurchasesResponse {
  purchases: {
    Purchases: IPurchase[];
    Pagination: IPagination;
  };
}

export const GET_PURCHASES = gql`
  query purchases($filter: PurchasesFilterInput, $sort: PurchasesSortInput) {
    purchases(filter: $filter, sort: $sort) {
      Purchases {
        id
        Product {
          id
          price
          Consultation {
            id
            title
            description
            duration
            image {
              ...MediaFragment
            }
          }
          Thread {
            id
            title
            description
            startSubmissionDate
            lessonsCount

            Course {
              label
              studentsCount
              slug
              learnDuration {
                ...LearnDurationFragment
              }
              imageList {
                ...MediaFragment
              }
            }
          }
        }
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${MediaFragment}
  ${LearnDurationFragment}
  ${PaginationFragment}
`;
