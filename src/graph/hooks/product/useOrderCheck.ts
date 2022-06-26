import {ORDER_CHECK_QUERY} from '@/query/payments/orderCheck';
import {useLazyQuery} from '@apollo/client';
export const useOrderCheck = () => {
  const [getOrderPrice, {data, loading}] = useLazyQuery(ORDER_CHECK_QUERY);

  return {getOrderPrice, data, loading};
};
