import {media} from 'styles/media';
import styled from 'styled-components';
import Calendar from 'public/icons/Calendar.svg';

export const CalendarIcon = styled(Calendar)`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;

  ${media.greaterThan('xs')`
    flex-direction: row;
    justify-content: space-between;        
  `}
`;

export const Author = styled.div`
  display: flex;
  margin-bottom: 15px;
  ${media.greaterThan('xs')`
    margin-bottom: 0;
  `}
`;

export const AuthorLogo = styled.div`
  position: relative;
  margin-right: 10px;
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  flex: 0 0 40px;
`;

export const AuthorNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${media.greaterThan('xs')`
    margin-left: auto
  `}
`;

export const Date = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: #131415;
`;

export const LinkUI = styled.a`
  width: 100%;
  height: 100%;
  line-height: 19px;
  color: #fff;
`;
