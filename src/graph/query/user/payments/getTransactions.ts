import {PaginationFragment} from '@/fragments/pagination';
import {TransactionFragment} from '@/fragments/transaction';
import {IPagination} from 'src/types';
import {ITransaction} from '@/types/transactions';
import {gql} from '@apollo/client';

export interface ITransactionsResponse {
  transactions: {
    Transactions: ITransaction[];
    Pagination: IPagination;
  };
}

export const GET_TRANSACTIONS = gql`
  query transactions(
    $limit: Int
    $offset: Int
    $filter: TransactionsFilterInput
  ) {
    transactions(limit: $limit, offset: $offset, filter: $filter) {
      Transactions {
        ...TransactionFragment
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${TransactionFragment}
  ${PaginationFragment}
`;
