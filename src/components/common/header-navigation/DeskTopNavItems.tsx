import Link from 'next/link';
import {useRouter} from 'next/router';
import useLocale from 'src/hooks/useLocale';

import {IconButton} from 'styles/iconsButton';

import HeardIcon from 'public/icons/HeardSVG.svg';
// import SearchIcon from 'public/icons/SearchSVG.svg';

import * as UI from 'styles/navigation/deskTopNavItems';

interface IDeskTopNavItems {
  iconWidth: number;
  iconHeight: number;
  user?: any;
}

const DeskTopNavItems: React.FC<IDeskTopNavItems> = ({
  iconWidth,
  iconHeight,
  user,
}) => {
  const t = useLocale();
  const {pathname} = useRouter();

  const isMainPage = pathname === '/';

  return (
    <>
      <Link href={'/documents'} passHref>
        <UI.FreeCourseLink $isActive={pathname.includes('/documents')}>
          {t.header.document}
        </UI.FreeCourseLink>
      </Link>

      {user ? (
        <>
          {/* <UI.SearchWrapper>
            <UI.SearchInput />
            <IconButton desktopVariant={'secondary'} desktopMargin={'0'}>
              <SearchIcon width={iconWidth} height={iconHeight} />
            </IconButton>
          </UI.SearchWrapper> */}

          <Link href={'/favorites'} passHref>
            <IconButton
              desktopVariant={'secondary'}
              desktopMargin={'0 10px 0 0'}
              as={'a'}>
              <HeardIcon width={iconWidth} height={iconHeight} />
            </IconButton>
          </Link>
        </>
      ) : (
        <UI.AuthButtons>
          <Link
            href={isMainPage ? `/auth/login?fromMainPage=true` : '/auth/login'}
            passHref>
            <UI.LoginButton>Вход</UI.LoginButton>
          </Link>
          <Link
            href={
              isMainPage ? `/auth/register?fromMainPage=true` : '/auth/register'
            }
            passHref>
            <UI.LoginRegister>Регистрация</UI.LoginRegister>
          </Link>
        </UI.AuthButtons>
      )}
    </>
  );
};

export default DeskTopNavItems;
