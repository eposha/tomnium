import {ApolloError, useMutation} from '@apollo/client';
import {OrderCreateInput, OrderCreateResponse} from 'src/graphql.schema';
import {ORDER_CREATE} from '@/mutations/payments/orderCreate';
import {useRouter} from 'next/router';

export interface IUsePayByNewCard {
  onPayByNewCard: () => Promise<void>;
  loading: boolean;
  error?: ApolloError;
}

export const usePayByNewCard = (
  params: Partial<OrderCreateInput>,
): IUsePayByNewCard => {
  const router = useRouter();
  const [createOrder, {loading, error}] = useMutation<
    {orderCreate: OrderCreateResponse},
    {record: OrderCreateInput}
  >(ORDER_CREATE, {
    onCompleted(data) {
      const redirectLink = data?.orderCreate?.paymentLink;
      if (!redirectLink) return;
      router.push(redirectLink);
    },
  });

  const onPayByNewCard = async (): Promise<void> => {
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
    onPayByNewCard,
    loading,
    error,
  };
};
