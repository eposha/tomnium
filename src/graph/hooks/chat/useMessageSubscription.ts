import {useSubscription} from '@apollo/client';
import {MessageWithAction} from 'src/graphql.schema';
import {MESSAGE_SUBSCRIPTION} from '../../subscription/chat/messageSubscription';

const useMessageSubscription = (variables: {roomId: string}) => {
  const {data, loading: subscriptionLoading} = useSubscription<{
    messageSubscription: MessageWithAction;
  }>(MESSAGE_SUBSCRIPTION, {
    variables,
  });
  return {data, subscriptionLoading};
};

export default useMessageSubscription;
