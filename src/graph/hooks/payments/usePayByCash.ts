import {ApolloError, useMutation} from '@apollo/client';
import {
  MerchantMeta,
  OrderCreateInput,
  OrderCreateResponse,
} from 'src/graphql.schema';
import {ORDER_CREATE_FOR_PAYMENT_BY_CASH} from '@/mutations/payments';

export interface IUsePayByCash {
  onPayByCash: () => Promise<void>;
  loading: boolean;
  error?: ApolloError;
  paymentDetails?: MerchantMeta;
}

export const usePayByCash = (
  params: Partial<OrderCreateInput>,
): IUsePayByCash => {
  const [createOrder, {data, loading, error}] = useMutation<
    {orderCreate: OrderCreateResponse},
    {record: OrderCreateInput}
  >(ORDER_CREATE_FOR_PAYMENT_BY_CASH);

  const onPayByCash = async (): Promise<void> => {
    if (!params.productId || !params.productCount || !params.paymentMethodId)
      return;
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
    paymentDetails: data?.orderCreate?.Order?.Merchant?.meta,
    onPayByCash,
    loading,
    error,
  };
};
