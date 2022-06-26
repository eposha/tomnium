import {Media as MediaUI} from 'src/media-styles';

import styled from 'styled-components';

export const TildaLayoutUI = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const TildaFooterBottom = styled.div`
  margin-top: auto;
`;

export const Media = styled(MediaUI)`
  position: relative;
  z-index: 99999999;
  background: #f4f6fa;
`;
