import {useMutation} from '@apollo/client';

import {
  SUBSCRIPTION_UPDATE,
  ISubscriptionUpdateRequest,
} from '@/mutations/subscription/subscriptionUpdate';

export const useUpdateSubscription = () => {
  const [updateSubscription] = useMutation<null, ISubscriptionUpdateRequest>(
    SUBSCRIPTION_UPDATE,
  );

  return {
    updateSubscription,
  };
};
