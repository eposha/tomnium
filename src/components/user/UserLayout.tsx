import {FC, ReactChild, ReactNode} from 'react';

import dynamic from 'next/dynamic';

import {Media} from 'src/media-styles';
import * as UI from 'styles/user/profile';

const UserSideMenu = dynamic(() => import('src/components/user/UserSideMenu'));

interface IProps {
  children: ReactChild & ReactNode;
}

const UserLayout: FC<IProps> = ({children}) => {
  return (
    <UI.UserWrapper>
      <Media greaterThan={'xs'}>
        <UserSideMenu />
      </Media>
      <UI.Main>{children}</UI.Main>
    </UI.UserWrapper>
  );
};

export default UserLayout;
