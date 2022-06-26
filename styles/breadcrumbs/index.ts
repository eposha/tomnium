import styled from 'styled-components';

export const CrumbsNavigation = styled.nav`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  color: ${({theme}) => theme.colors.common.greyDark};
`;

export const CrumbsList = styled.ul`
  display: flex;
  align-items: center;
`;

export const CrumbsItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const CrumbsLink = styled.a`
  display: block;
  padding: 10px 0;
`;

export const CrumbsText = styled.pre<{color?: string}>`
  font-family: 'Gilroy-Regular', sans-serif;
  color: ${({theme, color}) =>
    (color && theme.colors.common[color]) || 'black'};
`;
