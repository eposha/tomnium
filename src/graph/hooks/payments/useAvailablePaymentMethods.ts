import {useQuery} from '@apollo/client';
import {
  AVAILABLE_PAYMENT_METHODS_QUERY,
  IPaymentMethodsResponse,
} from '@/query/payments';

export const useAvailablePaymentMethods = (productId?: string) => {
  const {data, loading, error} = useQuery<IPaymentMethodsResponse>(
    AVAILABLE_PAYMENT_METHODS_QUERY,
    {
      variables: {
        productId,
      },
      skip: !productId,
    },
  );
  return {
    paymentMethods: data?.availablePaymentMethods || null,
    loading,
    error,
  };
};
