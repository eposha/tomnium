import {useLazyQuery} from '@apollo/client';

import {
  GET_NOTIFICATION_STORY,
  INotificationStoryResponse,
  INotificationStoryRequest,
} from '@/query/notifications/notificationsStory';
import {useEffect} from 'react';

interface IUseNotificationsStory {
  limitValue: number;
  variables?: INotificationStoryRequest;
  isNotLoading?: boolean;
}

export const useNotificationsStory = (options: IUseNotificationsStory) => {
  const {limitValue, variables, isNotLoading} = options;
  const [getNotificationStory, {data, loading}] = useLazyQuery<
    INotificationStoryResponse,
    INotificationStoryRequest
  >(GET_NOTIFICATION_STORY, {
    variables,
  });

  useEffect(() => {
    if (isNotLoading) return;
    getNotificationStory({variables: {limit: limitValue}});
  }, [limitValue, isNotLoading]);

  return {
    notifications: data?.pushNotifications,
    getNotificationStory,
    loading,
  };
};
