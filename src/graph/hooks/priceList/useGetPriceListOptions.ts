import {useQuery} from '@apollo/client';

import {
  GET_PRICE_LIST_OPTIONS,
  IGetPriceListOptionsResponse,
  IGetPriceListOptionsRequest,
} from '@/query/priceList/getPirceListOptions';

export const useGetPriceListOptions = (
  variables: IGetPriceListOptionsRequest,
) => {
  const {data, loading} = useQuery<
    IGetPriceListOptionsResponse,
    IGetPriceListOptionsRequest
  >(GET_PRICE_LIST_OPTIONS, {
    variables,
    fetchPolicy: 'cache-and-network',
    skip: !variables.productId,
  });

  return {
    priceListOptions: data?.priceListOptions || [],
    loading,
  };
};
