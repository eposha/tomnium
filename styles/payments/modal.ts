import styled from 'styled-components';
import {media} from 'styles/media';

export const MainWrapperModal = styled.div<{position?: 'fixed' | 'absolute'}>`
  top: 0;
  left: 0;
  position: ${({position}) => position || 'fixed'};
  width: ${({position}) => (position === 'fixed' ? '100vw' : '100%')};
  height: ${({position}) => (position === 'fixed' ? '100vh' : '100%')};
  background: ${({theme}) => theme.colors.common.black};
  z-index: 29;
  opacity: 0.15;
`;

export const InnerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({theme}) => theme.colors.common.white};
  box-shadow: 0 10px 20px rgba(88, 88, 88, 0.1);
  border-radius: 5px;
  z-index: 999999;
  width: 900px;
  height: 547px;
  display: flex;
  flex-direction: column;
  ${media.lessThan('lg')`
    width: 100%;
`}
`;

export const WrapperErrorModal = styled(InnerModal)`
  position: absolute;
  width: 70%;
  height: 60%;
  background: transparent;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainInnerModal = styled.div`
  display: grid;
  grid-template-columns: 35.55% 64.45%;
  width: 100%;
  height: 490px;
`;

export const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-grow: 1;
`;

export const InnerForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
