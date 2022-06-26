import styled from 'styled-components';

import {media} from 'styles/media';

interface IHidden {
  $hide?: boolean;
  hideUp?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'container' | null;
  hideDown?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'container' | null;
  display?: string;
}

const Hidden = styled.div<IHidden>`
  display: ${({display}) => display ?? 'block'};

  ${({hideUp, hideDown}) => {
    if (hideUp) {
      return media.greaterThan(hideUp)`
      display: none !important;
    `;
    } else if (hideDown) {
      return media.lessThan(hideDown)`
      display: none !important;
    `;
    }
  }}}
  ${({$hide}) => $hide && 'display: none'};
`;

export default Hidden;
