import {ApolloError, useQuery} from '@apollo/client';
import {
  IOrderAvailableCardsResponse,
  ORDER_AVAILABLE_CARDS_QUERY,
} from '@/query/payments';
import {Card, OrderAvailableCardsInput} from 'src/graphql.schema';

export interface IUseOrderAvailableCards {
  paymentCards?: Card[] | null;
  loading?: boolean;
  errorPaymentCards?: ApolloError;
}

export const useOrderAvailableCards = (params: {
  productId?: string;
  isSkip: boolean;
}): IUseOrderAvailableCards => {
  const {productId = '', isSkip} = params;
  const {data, loading, error} = useQuery<
    IOrderAvailableCardsResponse,
    {record: OrderAvailableCardsInput}
  >(ORDER_AVAILABLE_CARDS_QUERY, {
    variables: {
      record: {
        productId,
        paymentMethodId: 2,
      },
    },
    skip: !productId || isSkip,
  });
  return {
    paymentCards: data?.orderAvailableCards || null,
    loading,
    errorPaymentCards: error,
  };
};
