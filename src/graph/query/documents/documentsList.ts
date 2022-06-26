import {gql} from '@apollo/client';
import {DocumentsFragment} from '@/fragments/documents';
import {PaginationFragment} from '@/fragments/pagination';

export const DOCUMENTS = gql`
  query documents(
    $filter: DocumentsFilterInput
    $sort: DocumentsSortInput
    $limit: Int
    $offset: Int
  ) {
    documents(filter: $filter, sort: $sort, limit: $limit, offset: $offset) {
      Documents {
        ...DocumentsFragment
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${DocumentsFragment}
  ${PaginationFragment}
`;
