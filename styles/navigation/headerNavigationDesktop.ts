import {media} from 'styles/media';

import styled from 'styled-components';

export const NavWrapper = styled.div<{$isTildaPage?: boolean}>`
  position: relative;
  right: ${({$isTildaPage}) => ($isTildaPage ? '0' : '10px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  height: 50px;
  width: 100vw;
  background: #fff;
  box-sizing: border-box;

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
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      box-sizing: border-box !important;
    }
  }

  ${media.greaterThan('sm')`
    right: 0;
    padding:0;
    width: 100%;
    height: 65px;
    background: inherit;
    align-items: end;
    ${({
      //@ts-ignore
      $isTildaPage,
    }) => $isTildaPage && `margin: auto; max-width: 1180px; `};
  `};
`;

export const HeaderNavInner = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bcbcbc;
  width: 100%;
  margin-left: 77px;
`;

export const LogoWrapper = styled.a`
  min-width: 80px;
  display: inline-block;

  ${media.greaterThan('xs')`
    min-width: 120px;
    cursor: pointer;
  `};
`;

export const ButtonsWrapper = styled.div<{mobile?: boolean}>`
  position: relative;
  display: flex;
  z-index: 999990;

  ${media.greaterThan('xs')`
    display: flex;
    align-items: center;
    margin-left: auto;
    height: 100%;
    z-index: 999990;
  `};
  ${({mobile}) =>
    mobile &&
    `
    flex: 1;
    justify-content: end;
  `}
`;

export const LoadingHeaderNav = styled.div`
  height: 50px;
  width: 100vw;
  background: #fff;

  ${media.greaterThan('xs')`
    width: 100%;
    height: 65px;    
    background: inherit;
`};
`;

export const NavMenu = styled.div<{$isActive: boolean}>`
  position: absolute;
  left: 100%;
  top: 50px;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  padding: 20px 30px 30px;
  border-top: 1px solid #d3e2ff;
  text-align: center;
  transition: 0.3s;
  box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  z-index: 9999999;
  ${({$isActive}) => $isActive && 'left: 0'};
`;

export const NavItem = styled.div<{active?: boolean}>`
  margin: ${({active}) => (active ? '30px 0 40px' : '5px 0')};
  border: 1px solid ${({active}) => (active ? '#8BB3FF' : '#D3E2FF')};
  box-sizing: border-box;
  border-radius: 5px;

  .nav-link {
    font-size: 14px;
    display: block;
    padding: 10px;
    color: ${({active}) => (active ? '#8BB3FF' : '#697077')};
  }
`;

export const NavSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`;
export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  padding: 13px 10px;
  height: 40px;
  width: 100%;
  font-size: 12px;
  outline: none;
  border: none;
  background: #f4f6fa;
  border-radius: 5px;

  ::placeholder {
    color: #697077;
  }
`;

export const IconButtonWrapperMobile = styled.button<{absolute?: boolean}>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  ${({absolute}) =>
    absolute &&
    `
    position: absolute;
    right: 0;
    top: 0;
  `}
  ${({absolute}) =>
    !absolute &&
    `
    margin-right: 5px;
  `}
`;

export const AuthButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  width: 100%;
  height: 40px;
  font-weight: 400;
  font-size: 12px;
  color: #8bb3ff;
  border-radius: 5px;
  border: 1px solid #d3e2ff;
  background: #fff;
`;

export const RegisterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  width: 100%;
  height: 40px;
  font-weight: 400;
  font-size: 12px;
  color: #fff;
  border-radius: 5px;
  background: #516ff6;
`;
