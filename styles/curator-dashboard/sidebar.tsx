import styled from 'styled-components';

export const MenuList = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.a<{$isActive: boolean}>`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  padding: 10px 0;
  display: flex;
  align-items: flex-end;
  transition: color 0.2s ease-in-out;
  color: ${({$isActive}) => ($isActive ? '#131415' : '#BCBCBC')};

  &:hover {
    color: #131415;
    font-weight: 700;
    svg {
      path {
        stroke: #516ff6;
      }
    }
  }

  svg {
    transition: color 0.2s ease-in-out;
    margin-right: 10px;
    path {
      stroke: ${({$isActive}) => ($isActive ? '#516FF6' : '#8bb3ff')};
    }
  }
`;
