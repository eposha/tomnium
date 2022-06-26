import {media} from '../media';

import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 10px 15px;
  min-height: 300px;

  ${media.greaterThan('sm')`
     max-width: 225px;
     height: 242px;
     min-height: unset;
     background: #F4F6FA;
  `}
`;

export const CardImg = styled.div`
  width: 100%;
  margin-bottom: 15px;
  position: relative;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  ${media.greaterThan('sm')`
     height: 117px;
  `}
`;

export const CardDescription = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #131415;
  position: relative;
  padding-left: 10px;
  font-family: 'Gilroy-Medium', sans-serif;
  margin-bottom: 30px;

  &:before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #516ff6;
    position: absolute;
    left: 0;
    top: 5px;
  }

  ${media.greaterThan('sm')`
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 0px;
  `}
`;

export const SubTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #131415;
  margin-bottom: 15px;
`;
