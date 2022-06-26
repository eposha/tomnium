import {FC} from 'react';
import Link from 'next/link';
import {IconButton} from 'styles/iconsButton';
import DeskTopNavItems from './DeskTopNavItems';
import NavigationList from './NavigationList';

import * as UI from 'styles/navigation/headerNavigationDesktop';

import Logo from '/public/logo/MainLogoSVG.svg';
import ProfileIcon from 'public/icons/ProfilePrimarySVG.svg';
import NotificationsButton from './NotificationsButton';
import dynamic from 'next/dynamic';
import {ISubscriptionResponse} from 'src/graph/subscription/notifications/notificationsSubscription';

const GlobalLayoutStyles = dynamic(import('styles/globalLayoutStyles'));

interface IHeaderNavigationDesktop {
  isTildaPage?: boolean;
  notifications?: {id: string; title: string; isActive: boolean}[];
  loading?: boolean;
  user?: any;
  subscriptionData?: ISubscriptionResponse;
}

const HeaderNavigationDesktop: FC<IHeaderNavigationDesktop> = ({
  isTildaPage,
  notifications,
  loading,
  user,
  subscriptionData,
}) => {
  return (
    <>
      {isTildaPage && <GlobalLayoutStyles />}

      <UI.NavWrapper $isTildaPage={isTildaPage}>
        <Link href={user ? '/courses' : '/'} passHref>
          <UI.LogoWrapper>
            <Logo width={120} height={36} alt={'main logo'} />
          </UI.LogoWrapper>
        </Link>

        <UI.HeaderNavInner>
          <NavigationList user={user} />

          <UI.ButtonsWrapper>
            <DeskTopNavItems iconWidth={16} iconHeight={16} user={user} />

            {user && (
              <>
                <NotificationsButton
                  notifications={notifications}
                  loading={loading}
                  subscriptionData={subscriptionData}
                />
                <Link href={'/user'} passHref>
                  <a>
                    <IconButton
                      variant='secondary'
                      margin={'0 15px 0 0'}
                      desktopMargin={'0'}>
                      <ProfileIcon width={16} height={16} alt='profile' />
                    </IconButton>
                  </a>
                </Link>
              </>
            )}
          </UI.ButtonsWrapper>
        </UI.HeaderNavInner>
      </UI.NavWrapper>
    </>
  );
};

export default HeaderNavigationDesktop;
