import {FC, ReactNode, memo, useEffect} from 'react';

import dynamic from 'next/dynamic';
import {useUser} from '@/graph-hooks/user';
import useNotificationsSubscription from '@/graph-hooks/notifications/useNotificationsSubscription';
import {toast} from 'react-toastify';
import useSound from 'use-sound';

import 'react-toastify/dist/ReactToastify.css';
import {Media} from 'src/media-styles';
import styled from 'styled-components';
import {EventName} from 'src/graphql.schema';
import ToastNotificationText from '../toaster/Toast';
import {Toast} from 'styles/toaster/index';
const notificationSound = '/sounds/notification-sound.wav';

export const HeaderNavigationMobile = dynamic(
  import('src/components/common/header-navigation/HeaderNavigationMobile'),
);

const HeaderNavigationDesktop = dynamic(
  import('src/components/common/header-navigation/HeaderNavigationDesktop'),
);

const FooterNavigation = dynamic(
  import('src/components/common/footer-navigation/FooterNavigation'),
);

export const FooterNavigationMobile = dynamic(
  import('src/components/common/footer-navigation/FooterNavigationMobile'),
);

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  & > :last-child {
    margin-top: auto;
  }
`;

const FooterNavWrapper = styled(Media)`
  margin-top: auto;
`;

interface INavigationLayout {
  children: ReactNode;
}

const NavigationLayout: FC<INavigationLayout> = ({children}) => {
  const {user} = useUser();

  const {data: subscriptionData} = useNotificationsSubscription();
  const [play] = useSound(notificationSound, {
    interrupt: true,
  });

  useEffect(() => {
    if (
      subscriptionData?.pushNotificationSubscription &&
      subscriptionData.pushNotificationSubscription?.Notification?.event !==
        EventName.EventNameUserUpdateMe
    ) {
      play();
      toast(
        <ToastNotificationText
          message={
            subscriptionData.pushNotificationSubscription?.Notification?.message
          }
        />,
      );
    }
  }, [play, subscriptionData]);

  return (
    <NavigationWrapper>
      <Toast />
      <Media at={'xs'}>
        <HeaderNavigationMobile
          user={user}
          subscriptionData={subscriptionData}
        />
      </Media>

      <Media greaterThan={'xs'}>
        <HeaderNavigationDesktop
          user={user}
          subscriptionData={subscriptionData}
        />
      </Media>
      {children}
      <FooterNavWrapper greaterThan={'xs'}>
        <FooterNavigation />
      </FooterNavWrapper>
      <FooterNavWrapper lessThan={'sm'}>
        <FooterNavigationMobile />
      </FooterNavWrapper>
    </NavigationWrapper>
  );
};

export default memo(NavigationLayout);
