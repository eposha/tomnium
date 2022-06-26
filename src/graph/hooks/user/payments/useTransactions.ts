import {
  GET_TRANSACTIONS,
  ITransactionsResponse,
} from '@/query/user/payments/getTransactions';
import {useQuery} from '@apollo/client';

export const useTransactions = (variables: {
  offset?: number | number[];
  limit?: number;
  filter?: {
    createdAt: {
      from: string | string[] | undefined;
      to: string | string[] | undefined;
    };
  };
}) => {
  const {data, loading, error} = useQuery<ITransactionsResponse>(
    GET_TRANSACTIONS,
    {
      variables,
    },
  );
  return {
    transactions: data?.transactions || null,
    loading,
    error,
  };
};
