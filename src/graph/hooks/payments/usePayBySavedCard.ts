import {
  ApolloError,
  InternalRefetchQueryDescriptor,
  useMutation,
} from '@apollo/client';
import {Card, OrderCreateInput, OrderCreateResponse} from 'src/graphql.schema';
import {ORDER_CREATE} from '@/mutations/payments/orderCreate';
import {
  IOrderPaySavedCardRequest,
  ORDER_PAY_SAVED_CARD,
} from '@/mutations/payments';

export interface IUsePayBySavedCard {
  onPayBySavedCard: (activeCard?: Card) => Promise<void>;
  loading: boolean;
  error?: ApolloError;
  paymentResult?: boolean;
}

export const usePayBySavedCard = (
  params: Partial<OrderCreateInput> & {
    cardId?: string;
    entityRefetchQueries?: InternalRefetchQueryDescriptor[];
  },
): IUsePayBySavedCard => {
  const {cardId, entityRefetchQueries, ...record} = params;
  const [createOrder, {loading: loadingCreateOrder, error: errorCreateOrder}] =
    useMutation<{orderCreate: OrderCreateResponse}, {record: OrderCreateInput}>(
      ORDER_CREATE,
    );

  const [pay, {data, loading: loadingPayByCard, error: errorPayByCard}] =
    useMutation<
      {orderPaySavedCard: boolean},
      {record: IOrderPaySavedCardRequest}
    >(ORDER_PAY_SAVED_CARD, {
      refetchQueries: entityRefetchQueries,
    });

  const onPayBySavedCard = async (activeCard?: Card): Promise<void> => {
    if (
      !params.productId ||
      !params.productCount ||
      !params.paymentMethodId ||
      (!params.cardId && !activeCard)
    )
      return;

    try {
      const dataCreate = await createOrder({
        variables: {
          // @ts-ignore
          record,
        },
      });
      const orderId = dataCreate?.data?.orderCreate?.Order?.id;
      if (!orderId) {
        throw new Error();
      }
      const id = cardId || activeCard?.id;
      await pay({
        variables: {
          // @ts-ignore
          record: {orderId, cardId: id},
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    paymentResult: data?.orderPaySavedCard,
    onPayBySavedCard,
    loading: loadingCreateOrder || loadingPayByCard,
    error: errorCreateOrder || errorPayByCard,
  };
};
