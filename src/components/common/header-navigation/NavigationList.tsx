import {FC} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import useLocale from 'src/hooks/useLocale';

import * as UI from 'styles/navigation/navigationList';
import {IUser} from '@/types/user';

type Locale =
  | 'center'
  | 'learning'
  | 'courses'
  | 'diagnostic'
  | 'chats'
  | 'consultations';

interface INavigationList {
  user?: IUser;
}

const NavigationList: FC<INavigationList> = ({user}) => {
  const t = useLocale();
  const {pathname} = useRouter();

  const navList = !!user ? navListItems : navListItemsNotLogin;

  return (
    <UI.NavUL>
      {navList.map(({name, url}) => (
        <Link key={name} href={url} passHref>
          <UI.NavItem $isActive={pathname === url}>
            {t.header[name as Locale]}
          </UI.NavItem>
        </Link>
      ))}
    </UI.NavUL>
  );
};

export const navListItems = [
  // {
  //   name: 'center',
  //   url: '/center',
  // },
  {
    name: 'learning',
    url: '/my-courses',
  },
  {
    name: 'courses',
    url: '/courses',
  },
  // {
  //   name: 'diagnostic',
  //   url: '/quizzes',
  // },
  {
    name: 'chats',
    url: '/chat',
  },
  {
    name: 'consultations',
    url: '/consultations',
  },
];

export const navListItemsNotLogin = [
  {
    name: 'courses',
    url: '/courses',
  },
  {
    name: 'consultations',
    url: '/consultations',
  },
];

export const navListItemsMobile = [
  {
    name: 'courses',
    url: '/courses',
  },

  {
    name: 'consultations',
    url: '/consultations',
  },
];

export default NavigationList;
