import {useQuery} from '@apollo/client';

import {
  GET_PURCHASES,
  IGetPurchasesResponse,
  IGetPurchasesRequest,
} from '@/query/purchases/getPurchases';

export const useGetPurchases = (variables: IGetPurchasesRequest) => {
  const {data, loading} = useQuery<IGetPurchasesResponse, IGetPurchasesRequest>(
    GET_PURCHASES,
    {
      variables,
      fetchPolicy: 'cache-and-network',
    },
  );

  return {
    purchases: data?.purchases?.Purchases ?? [],
    pagination: data?.purchases?.Pagination,
    loading,
  };
};
