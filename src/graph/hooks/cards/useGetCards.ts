import {useQuery} from '@apollo/client';
import {GET_MY_CARDS, IMyCardsResponse} from '@/query/user/payments/getMyCards';

export const useGetCards = () => {
  const {data, loading: loadingCardsMy} = useQuery<IMyCardsResponse>(
    GET_MY_CARDS,
    {
      fetchPolicy: 'network-only',
    },
  );
  return {
    cardsMy: data?.cardsMy || [],
    loadingCardsMy,
  };
};
