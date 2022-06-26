import styled from 'styled-components';
import { media } from 'styles/media';

export const NotificationBlockWrapper = styled.div`
  border-radius: 5px;
  padding: 20px 0 25px;

  ${media.greaterThan('sm')`
    background: #FFFFFF;
    padding: 30px 15px;
  `};
`

export const NotificationBlockInner = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
 width: 100%;

 ${media.greaterThan('sm')`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px 70px;
  `}
`

export const NotificationBlock = styled.div`
 display: flex;
 flex-direction: column;
 gap: 15px;
 padding: 15px;
 background: #FFFFFF;
 border-radius: 5px;

 ${media.greaterThan('sm')`
    max-width: 400px
  `}
`

export const NotificationBlockTitle = styled.div`
 font-family: 'Gilroy-Medium',sans-serif;
 font-weight: 600;
 font-size: 18px;
 line-height: 21px;
 color: #131415;
 flex: 1;

 ${media.greaterThan('sm')`
    width: 100%;
    flex: unset;
    font-size: 20px;
    line-height: 23px;
  `}
`
export const NotificationBlockData = styled.div`
 font-weight: 600;
 font-size: 14px;
 line-height: 140%;
 color: #131415;
 width: 100%;
 gap: 10px;

 ${media.greaterThan('sm')`
    width: auto;

    &:before {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      margin-right: 7px;
      vertical-align: sub;
      background-image: url('/icons/Pen.svg');
    }
  `}

`

export const NotificationBlockItems = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`

export const BlockInfoWrapper = styled.div`
 display: flex;
 align-items: center;
 flex-wrap: wrap;
 width: 100%;
`

export const ChangeLink = styled.a`
 font-weight: 600;
 font-size: 10px;
 line-height: 120%;
 text-decoration-line: underline;
 color: #516FF6;
 cursor: pointer;

 ${media.greaterThan('sm')`
    order: 1;
    margin-left: 10px;
  `};
`

export const ButtonLink = styled.a`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 min-width: 260px;
 height: 60px;
 border: 1px solid #D3E2FF;
 border-radius: 5px;
 font-weight: 600;
 font-size: 16px;
 line-height: 19px;
 color: rgba(0, 87, 255, 0.5);
 margin-top: 15px;
 font-family: 'Gilroy-Medium',sans-serif;

 &:before {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-image: url('/icons/ViberIcon.svg');
 }

 ${media.greaterThan('sm')`
    width: 260px;
  `};
 
`

export const NotificationPromt = styled.div`
  width: 100%;
  color: #516FF6;
  padding: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 120%;
  margin: 15px 0;
  background: #D3E2FF;
  border-radius: 5px;

  ${media.greaterThan('sm')`
    width: auto;
    max-width: 500px;
    padding: 0;
    font-size: 16px;
    line-height: 19px;
    color: #697077;
    background: transparent;
    border-radius: 0;
    margin: 0 0 20px;
    padding: 0 15px;
  `}
`

export const NotificationPageTitle = styled.h1`
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  color: #131415;
  margin: 0 0 20px;
  padding-left: 15px;
`
