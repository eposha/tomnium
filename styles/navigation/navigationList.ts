import styled from 'styled-components';

export const NavUL = styled.ul`
  display: flex;
  align-items: center;
  height: 65px;
`;

export const NavItem = styled.a<{$isActive: boolean}>`
  display: inline-block;
  margin-right: 22px;
  line-height: 63px;
  font-size: 14px;
  border-bottom: 2px solid;
  border-color: transparent;
  color: #697077;

  border-bottom: ${({$isActive, theme}) =>
    $isActive && `2px solid ${theme.colors.common.blueberry}`};

  &:hover {
    color: #516ff6;
    border-bottom: 2px solid #516ff6;
  }
`;
