import {useSubscription} from '@apollo/client';

import {
  ISubscriptionResponse,
  NOTIFICATIONS_SUBSCRIPTION,
} from '../../subscription/notifications/notificationsSubscription';

const useNotificationsSubscription = () => {
  const {data, loading: subscriptionLoading} =
    useSubscription<ISubscriptionResponse>(NOTIFICATIONS_SUBSCRIPTION);
  return {data, subscriptionLoading};
};

export default useNotificationsSubscription;
