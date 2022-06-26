import styled from 'styled-components';
import {media} from 'styles/media';

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.common.blueberryLight};

  ${media.greaterThan('md')`
  font-size: 12px;
  `}
`;

export const NavBarContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media.greaterThan('md')`
  padding: 13px 10px 13px 40px;
  `};
`;

export const NavBarLink = styled.span<{color: string}>`
  font-weight: 400;
  color: ${({theme, color}) => theme.colors.common[color]};
  text-decoration: underline;
`;

export const NavBarTitleCount = styled.span`
  font-weight: 700;
  margin-right: 5px;
  color: ${({theme}) => theme.colors.common.blueberry};
`;

export const NavBarCount = styled.p`
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin: 0;
`;

export const NavBarResult = styled.span`
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
  border-radius: 20px;
  background: ${({theme}) => theme.colors.common.white};
  padding: 5px 15px 5px 15px;
`;
