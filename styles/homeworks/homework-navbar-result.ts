import styled from 'styled-components';

export const NavbarResultContainer = styled.ul`
  width: 180px;
  height: fit-content;
  margin-top: 62px;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.common.white};
`;

export const NavbarResultItem = styled.li`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding: 20px 5px;
  color: ${({theme}) => theme.colors.common.greyDark};

  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    color: ${({theme}) => theme.colors.common.blueberry};
    background: ${({theme}) => theme.colors.common.blueberryLight};
  }
  &:nth-child(2) {
    border-bottom: 1px solid ${({theme}) => theme.colors.common.whiteGrey};
  }

  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
