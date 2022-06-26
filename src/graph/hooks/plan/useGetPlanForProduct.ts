import {useQuery} from '@apollo/client';

import {
  GET_PLAN_FOR_PRODUCT,
  IGetPlanForProductResponse,
  IGetPlanForProductRequest,
} from '@/query/plans/getPlanForProduct';

export const useGetPlanForProduct = (params: {id?: string; skip?: boolean}) => {
  const {id, skip} = params;

  const {data, loading} = useQuery<
    IGetPlanForProductResponse,
    IGetPlanForProductRequest
  >(GET_PLAN_FOR_PRODUCT, {
    variables: {
      id,
    },
    skip,
  });

  return {
    productId: data?.planById?.productId,
    loading,
  };
};
