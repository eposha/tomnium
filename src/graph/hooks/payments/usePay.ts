import {ApolloError, useMutation} from '@apollo/client';
import {OrderCreateInput, OrderCreateResponse} from 'src/graphql.schema';
import {ORDER_CREATE} from '@/mutations/payments/orderCreate';

export interface IUsePay {
  onPay: () => Promise<void>;
  loading: boolean;
  error?: ApolloError;
  paymentLink?: string;
}

export const usePay = (params: Partial<OrderCreateInput>): IUsePay => {
  const [createOrder, {data, loading, error}] = useMutation<
    {orderCreate: OrderCreateResponse},
    {record: OrderCreateInput}
  >(ORDER_CREATE);

  const onPay = async (): Promise<void> => {
    if (!params.productId || !params.productCount || !params.productId) return;
    try {
      await createOrder({
        variables: {
          // @ts-ignore
          record: params,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    paymentLink: data?.orderCreate?.paymentLink,
    onPay,
    loading,
    error,
  };
};
