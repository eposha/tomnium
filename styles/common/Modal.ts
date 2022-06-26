import styled from 'styled-components';

export const Modal = styled.div<{$mobBackground?: string}>`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;
`;
