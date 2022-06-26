import {useQuery} from '@apollo/client';

import {IGetProductResponse, GET_PRODUCT} from '@/query/product/product';

export const useProduct = (id: string) => {
  const {data, loading} = useQuery<IGetProductResponse>(GET_PRODUCT, {
    variables: {id},
    skip: !id,
  });
  return {
    product: data?.productById || null,
    loading,
  };
};
