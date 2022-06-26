import {useEffect, useState} from 'react';
import ProfileSidebar from 'src/components/profile-sidebar';

import {useNotificationsStory} from '@/graph-hooks/notifications/useNotificationsStory';
import {Message} from 'src/graphql.schema';

import useNotificationsSubscription from '@/graph-hooks/notifications/useNotificationsSubscription';
import {GetServerSideProps, NextPage} from 'next';

import dynamic from 'next/dynamic';

const NotificationsMobile = dynamic(
  import('src/components/notifications/NotificationsMobile'),
);

const NotificationDesktop = dynamic(
  import('src/components/notifications/NotificationDesktop'),
);

import {Wrapper} from 'styles/notifications/notification-page';
import {initApollo} from '@/lib/apolloClient';
import {GET_NOTIFICATION_STORY} from '@/query/notifications/notificationsStory';
import {IPagination} from '@/types/common';

interface INotifications {
  isMobile: boolean;
  ssrNotification: {
    Messages: Message[];
    Pagination: IPagination;
  } | null;
}

const Notifications: NextPage<INotifications> = ({
  isMobile,
  ssrNotification,
}) => {
  // Для фильтров на потом
  // const [startDateStart, setStartDateStart] = useState(new Date());
  // const [startDateEnd, setStartDateEnd] = useState(new Date());
  const limitValue = 15;
  const offsetValue = 15;

  const [notificationsList, setNotifications] = useState<Message[]>(
    ssrNotification?.Messages || [],
  );

  const {data: subscriptionData} = useNotificationsSubscription();

  const {
    getNotificationStory,
    notifications,
    loading: loadingStory,
  } = useNotificationsStory({
    limitValue,
  });
  const {Pagination} = notifications || {};

  const [offset, setOffset] = useState(offsetValue);

  const handleNotificationStory = async () => {
    loadingStory ||
      (await getNotificationStory({
        variables: {
          limit: limitValue,
          offset,
        },
        onCompleted: (data) =>
          setNotifications((prevList) =>
            prevList.concat(data.pushNotifications.Messages),
          ),
      }));

    setOffset((prevValue) => prevValue + offsetValue);
  };

  useEffect(() => {
    if (subscriptionData?.pushNotificationSubscription) {
      getNotificationStory({
        variables: {
          limit: Math.ceil(offset / offsetValue) * limitValue + 1,
        },
      });
    }
  }, [getNotificationStory, subscriptionData]);

  return (
    <Wrapper>
      {!isMobile && <ProfileSidebar />}

      {!isMobile && (
        <NotificationDesktop
          notifications={notificationsList}
          Pagination={Pagination}
          loadingStory={loadingStory}
          handleNotificationStory={handleNotificationStory}
        />
      )}
      {isMobile && (
        <NotificationsMobile
          notifications={notificationsList}
          Pagination={Pagination}
          loadingStory={loadingStory}
          handleNotificationStory={handleNotificationStory}
        />
      )}
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query} = ctx;
  const client = initApollo(null, ctx);

  const {data} = await client.query({
    query: GET_NOTIFICATION_STORY,
    variables: {
      limit: 15,
      offset: 0,
    },
  });

  return {
    props: {
      isMobile: query?.device === 'mobile',
      ssrNotification: data?.pushNotifications || null,
    },
  };
};

export default Notifications;
