import {Message} from 'src/graphql.schema';
import {IPagination} from '@/types/common';
import {FC, useCallback} from 'react';
import {formatDate} from '@/helpers/common';
import {DATE_FORMAT} from '@/constants/common';
import {useGetParent} from '@/graph-hooks/notifications/useGetParent';
import {
  handleGetParent,
  entityStartLink,
} from 'src/helpers/notifications/generateLink';

import * as UI from 'styles/notifications/notification-mobile-page';

interface INotificationsMobile {
  notifications: Message[];
  Pagination?: IPagination;
  loadingStory: boolean;
  handleNotificationStory: () => Promise<void>;
}

const NotificationsMobile: FC<INotificationsMobile> = ({
  notifications,
  Pagination,
  loadingStory,
  handleNotificationStory,
}) => {
  const {getParent} = useGetParent();

  //@ts-ignore
  const handleRouteToEntity = useCallback(
    (meta) => () => {
      if (!meta?.Parent) return;
      const {id, entityName} = meta.Parent;

      //@ts-ignore
      const isRender = entityName && entityStartLink[entityName];
      if (!isRender) return;

      handleGetParent(id, entityName, getParent)();
    },
    [getParent],
  );

  return (
    <UI.NotificationPopup>
      <UI.NotificationSubtitleWrapper>
        <UI.NotificationSubtitle>Уведомления</UI.NotificationSubtitle>
        {/* <UI.NotificationOptions
              onClick={handleOpenOptions(!openOptions)}>
              <UI.DotesOptions />
            </UI.NotificationOptions> */}
      </UI.NotificationSubtitleWrapper>
      {notifications?.map(({id, createdAt, updatedAt, body, isRead, meta}) => (
        <UI.NotificationItemWrapper
          key={id}
          onClick={handleRouteToEntity(meta)}>
          <UI.NotificationItemHeader>
            <UI.NotificationTitleWrapper>
              <UI.NewSuggestionNotificationTypeIcon />
              <UI.NotificationTitle>
                {/* {notificationTitle[type]} */}
                Уведомление
              </UI.NotificationTitle>
            </UI.NotificationTitleWrapper>

            <UI.NotificationTimeWrapper>
              <UI.NotificationTime>
                {formatDate(updatedAt || createdAt, DATE_FORMAT.primary)}
              </UI.NotificationTime>
              {!isRead && <UI.NotificationTimePoint />}
            </UI.NotificationTimeWrapper>
          </UI.NotificationItemHeader>

          {/* <UI.NotificationText>{them}</UI.NotificationText> */}

          <UI.NotificationText>{body}</UI.NotificationText>
        </UI.NotificationItemWrapper>
      ))}
      {/* {!loading && !isNotification && (
        <UI.EmptyNotificationItem>
          У вас нет новых сообщений
        </UI.EmptyNotificationItem>
      )} */}

      {(Pagination?.nextPageExists || loadingStory) && (
        <UI.AddMore onClick={handleNotificationStory}>
          <UI.AllNotifications>
            {loadingStory ? 'Loading...' : 'Загрузить еще'}
          </UI.AllNotifications>
        </UI.AddMore>
      )}
    </UI.NotificationPopup>
  );
};

export default NotificationsMobile;
