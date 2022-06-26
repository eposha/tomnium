import DatePickerReact from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Calendar from 'public/icons/Calendar.svg';
import SearchSvg from 'public/icons/SearchSVG.svg';

import styled, {css} from 'styled-components';
import {media} from 'styles/media';

const TriangleCss = css`
  margin-top: 4px;
  width: 10px;
  height: 34px;
  background: #d3e2ff;

  clip-path: polygon(
    0% 50%,
    0% 0%,
    80% 0%,
    0% 0%,
    100% 100%,
    100% 100%,
    0% 100%,
    0% 100%
  );
`;

export const InputStyles = css`
  width: 95px;
  height: 30px;
  outline: none;
  border: 1px solid #d3e2ff;
  border-radius: 5px;
  background: transparent;
  padding: 10px 14px;
  font-weight: 500;
  color: #131415;
  font-family: 'Gilroy', sans-serif;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
`;

export const Wrapper = styled.div`
  display: flex;
  margin: 20px 0;

  ${media.greaterThan('sm')`
    margin: 30px 0;
`};
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  padding-top: 5px;
  width: 100%;
`;

export const NavigationWrapper = styled.div`
  display: flex;
`;

export const NavCardWrapper = styled.div`
  display: flex;
  cursor: pointer;

  &:hover div {
    color: #fff !important;
    background: #8bb3ff;
  }

  // Добавить когда будет вкладка поддержка
  // &:last-child {
  //   margin-left: auto;
  // }
`;

export const Triangle = styled.div`
  ${TriangleCss}
`;

export const LastTriangle = styled.div`
  ${TriangleCss};

  transform: scale(-1, 1);
`;

export const NavTabs = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
  min-width: 65px;
  height: 38px;
  background: #d3e2ff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #8bb3ff;

  &:last-child {
    padding: 8px;
  }
`;

export const NotificationWrapper = styled.div`
  position: relative;
  padding: 20px;
  // убрать padding-top: 0; когда будут фильтра
  padding-top: 0;
  width: 100%;
  height: 100%;
  bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
`;

// Filter

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  // flex-wrap: nowrap;
`;

export const LeftSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    margin-left: auto;
  }
`;

export const CalendarIcon = styled(Calendar)`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  margin-right: 5px;
`;

export const Decline = styled.div`
  margin: 0 5px;
  color: #d3e2ff;
`;

export const DatePickerWrapper = styled.div`
  max-width: 95px;
`;

export const DatePicker = styled(DatePickerReact)`
  ${InputStyles}
`;

export const Actions = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;

  color: #697077;
`;

export const SearchWrapper = styled.div`
  display: flex;
  position: relative;
  left: 30px;
`;

export const Search = styled.input`
  padding-left: 10px;
  padding-right: 40px;
  width: 130px;
  height: 30px;
  background: #f4f6fa;
  border-radius: 5px;
  border: none;
  outline: none;

  ::placeholder {
    font-size: 12px;
    line-height: 14px;
    color: #697077;
  }
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 30px;
  width: 30px;
  height: 30px;
  background: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 0px 0px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
`;

export const SearchIcon = styled(SearchSvg)`
  width: 12px;
  height: 12px;
  min-width: 12px;
  min-height: 12px;
`;

export const AddMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;
`;
