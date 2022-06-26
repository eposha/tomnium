import {FC} from 'react';

import {Wrapper, ProfileCard} from 'styles/sidebar';

const Sidebar: FC = ({children}) => {
  return (
    <Wrapper>
      <ProfileCard />
      {children}
    </Wrapper>
  );
};

export default Sidebar;
