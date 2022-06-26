import {useQuery} from '@apollo/client';

import {
  GET_PRICE_LISTS,
  IGetPriceListsResponse,
  IGetPriceListsRequest,
} from '@/query/priceList/getPriceLists';

export const useGetPriceLists = (variables: IGetPriceListsRequest) => {
  const {data, loading} = useQuery<
    IGetPriceListsResponse,
    IGetPriceListsRequest
  >(GET_PRICE_LISTS, {
    variables,
    fetchPolicy: 'cache-and-network',
    skip: !variables.productId,
  });

  return {
    priceLists: data?.priceLists ?? [],
    loading,
  };
};
