import {media, BREAKPOINT_CONTAINER} from 'styles/media';

import styled from 'styled-components';

export const FooterNavWrapper = styled.div<{
  $isTildaPage?: boolean;
  isActive?: boolean;
  mobile?: boolean;
}>`
  position: relative;
  right: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: ${(mobile) => (mobile.mobile ? '0 30px 25px' : '0 30px')};
  padding-top: ${(isActive) => (isActive.isActive ? '35px' : '15px')};
  align-items: center;
  width: 100vw;
  background: #1d1d1f;
  overflow-y: ${(isActive) => (isActive.isActive ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;

  ${media.greaterThan('sm')`
    right: 0;
  `}

  > * {
    box-sizing: border-box !important;
    color: #131415 !important;

    input {
      box-sizing: border-box !important;
    }

    ul,
    ol {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    a {
      outline: none;
      box-sizing: border-box !important;
    }

    button,
    input[type='submit'],
    input[type='reset'] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      box-sizing: border-box !important;
    }
  }

  ${media.greaterThan('container')`
    right:${({
      //@ts-ignore
      $isTildaPage,
    }) =>
      $isTildaPage ? `0` : `calc((100vw - ${BREAKPOINT_CONTAINER}px) / 2)`} ;
`}
`;

export const FooterNavData = styled.div<{isActive: boolean | any}>(
  ({isActive}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '20px',
    width: '100%',
    maxWidth: `${BREAKPOINT_CONTAINER}px`,
    color: '#fff',
    borderBottom: '0.5px solid rgba(255, 255, 255, 0.5)',
    transition: '0.3s ease-in-out',
    position: 'relative',
    marginBottom: isActive ? '0' : '-190px',
  }),
);

export const LogoWrapper = styled.div`
  height: 65px;
  padding-right: 80px;
`;
