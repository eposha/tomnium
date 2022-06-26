import styled from 'styled-components';

export const FreeCourseLink = styled.a<{$isActive: boolean}>`
  display: flex;
  align-items: center;
  margin-right: 30px;
  font-size: 14px;
  line-height: 63px;
  color: #697077;
  border-bottom: 2px solid;
  border-color: ${({$isActive, theme}) =>
    $isActive ? theme.colors.common.blueberry : 'transparent'};
`;

export const SearchWrapper = styled.div`
  display: flex;
  margin-right: 10px;
  border-radius: 5px;
  background: #fff;
`;

export const SearchInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Поиск',
}))`
  display: block;
  padding: 10px;
  height: 30px;
  width: 100px;
  font-size: 12px;
  outline: none;
  background: #ffffff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: none;
  line-height: 14px;

  ::placeholder {
    color: #697077;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  width: 100px;
  height: 30px;
  font-size: 12px;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
`;

export const LoginRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 120px;
  height: 30px;
  font-size: 12px;
  color: #fff;
  background: #516ff6;
  border-radius: 5px;
  cursor: pointer;
`;
