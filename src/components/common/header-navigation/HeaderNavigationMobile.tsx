import {useState, useEffect, FC} from 'react';
import Link from 'next/link';
import * as UI from 'styles/navigation/headerNavigationDesktop';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import {IconButton} from 'styles/iconsButton';

import {navListItems, navListItemsMobile} from './NavigationList';
import GlobalOption from '../footer-navigation/GlobalOption';
import Policy from '../footer-navigation/Policy';

import BurgerButton from './BurgerButton';
import Logo from 'public/logo/MainLogoSVG.svg';
import ProfileIcon from 'public/icons/ProfilePrimarySVG.svg';

import NotificationsButton from './NotificationsButton';
import useLocale from 'src/hooks/useLocale';
import {ISubscriptionResponse} from 'src/graph/subscription/notifications/notificationsSubscription';
import {useRouter} from 'next/router';

const GlobalLayoutStyles = dynamic(import('styles/globalLayoutStyles'));

interface IHeaderNavMobile {
  isTildaPage?: boolean;
  notifications?: {id: string; title: string; isActive: boolean}[];
  loading?: boolean;
  user?: any;
  subscriptionData?: ISubscriptionResponse;
}

type Locale =
  | 'center'
  | 'learning'
  | 'courses'
  | 'diagnostic'
  | 'chats'
  | 'consultations'
  | 'document';

const HeaderNavigationMobile: FC<IHeaderNavMobile> = ({
  isTildaPage,
  notifications,
  loading,
  user,
  subscriptionData,
}) => {
  const {pathname} = useRouter();

  const isFromMainPage = pathname === '/';

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => setIsOpenMenu((prevValue) => !prevValue);

  const t = useLocale();

  useEffect(() => {
    window.addEventListener('scroll', () => setIsOpenMenu(false), {
      passive: true,
    });
    return () =>
      window.removeEventListener('scroll', () => setIsOpenMenu(false));
  }, []);

  return (
    <>
      {isTildaPage && <GlobalLayoutStyles />}
      <UI.NavWrapper $isTildaPage={isTildaPage}>
        <Link href={user ? '/courses' : '/'} passHref>
          <UI.LogoWrapper>
            <Logo width={80} height={25} alt={'main logo'} />
          </UI.LogoWrapper>
        </Link>
        <UI.ButtonsWrapper mobile>
          {user && (
            <>
              {' '}
              <NotificationsButton
                notifications={notifications}
                loading={loading}
                subscriptionData={subscriptionData}
              />
              <Link href={'/user'} passHref>
                <IconButton
                  variant='secondary'
                  margin={'0 10px 0 0'}
                  desktopMargin={'0'}>
                  <ProfileIcon width={16} height={16} alt='profile' />
                </IconButton>
              </Link>
            </>
          )}
        </UI.ButtonsWrapper>
        <UI.NavMenu $isActive={isOpenMenu}>
          {(user ? navListItems : navListItemsMobile).map(({name, url}) => (
            <UI.NavItem key={name} onClick={handleOpenMenu}>
              <Link href={url}>
                <a className='nav-link'>{t.header[name as Locale]}</a>
              </Link>
            </UI.NavItem>
          ))}
          <UI.NavItem onClick={handleOpenMenu} active>
            <Link href={'/documents'}>
              <a className='nav-link'>{t.header.document}</a>
            </Link>
          </UI.NavItem>

          {!user && (
            <UI.AuthButtons>
              <Link
                href={
                  isFromMainPage
                    ? '/auth/login?fromMainPage=true'
                    : '/auth/login'
                }
                passHref>
                <UI.LoginButton>Вход</UI.LoginButton>
              </Link>
              <Link
                href={
                  isFromMainPage
                    ? '/auth/register?fromMainPage=true'
                    : '/auth/register'
                }
                passHref>
                <UI.RegisterButton>Регистрация</UI.RegisterButton>
              </Link>
            </UI.AuthButtons>
          )}

          <GlobalOption sidebar />
          <UI.NavSearchWrapper>
            <Link href={'/favorites'} passHref>
              <UI.IconButtonWrapperMobile as={'a'}>
                <Image
                  src={'/icons/HeardSVG.svg'}
                  width={17}
                  height={17}
                  alt='heart'
                />
              </UI.IconButtonWrapperMobile>
            </Link>
            {/* <UI.SearchInputWrapper>
              <UI.SearchInput placeholder={t.header.search} />
              <UI.IconButtonWrapperMobile absolute>
                <Image
                  src={'/icons/SearchSVG.svg'}
                  width={17}
                  height={17}
                  alt='search'
                />
              </UI.IconButtonWrapperMobile>
            </UI.SearchInputWrapper> */}
          </UI.NavSearchWrapper>
          <Policy mobile sidebar />
        </UI.NavMenu>

        <UI.ButtonsWrapper onClick={handleOpenMenu}>
          <BurgerButton />
        </UI.ButtonsWrapper>
      </UI.NavWrapper>
    </>
  );
};

export default HeaderNavigationMobile;
