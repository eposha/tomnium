import {FC, ReactChild} from 'react';

import * as UI from 'styles/globalContainer/globalContainer';

interface IContainer {
  children: ReactChild;
}

const Container: FC<IContainer> = ({children}) => {
  return (
    <UI.ContainerWrapper>
      <UI.UIContainer>{children}</UI.UIContainer>
    </UI.ContainerWrapper>
  );
};

export default Container;
