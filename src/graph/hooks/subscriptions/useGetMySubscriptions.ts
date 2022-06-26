import {useQuery} from '@apollo/client';

import {
  GET_MY_SUBSCRIPTIONS,
  IGetSubscriptionsResponse,
} from '@/query/subscriptions/getMySubscriptions';

export const useGetMySubscriptions = () => {
  const {data, loading} = useQuery<IGetSubscriptionsResponse>(
    GET_MY_SUBSCRIPTIONS,
    {
      fetchPolicy: 'cache-and-network',
    },
  );
  return {
    subscriptions: data?.subscriptions || [],
    loading,
  };
};
