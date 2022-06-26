import styled from 'styled-components';
import { media } from '../media';

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 20px auto;
  width: 100%;
  padding: 0;

  ${media.greaterThan('sm')`
     padding 0 30px;
  `}
`
export const ContentWrapper = styled.div`
  position: relative;
  width: 100%:
  right: 0;
  background: transparent;
  flex: 1;
  display: flex;
  align-items: center;

  ${media.greaterThan('sm')`
    background: #FFFFFF;
    width: 100vw;
  `}
  ${media.greaterThan('container')`
     right: calc((100vw - 1180px) / 2)
  `}
`

export const Title = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #516FF6;
  margin: 0 0 5px;

  ${media.greaterThan('sm')`
     margin-bottom: 15px;
  `}
`

export const SubTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #697077;

  ${media.greaterThan('sm')`
     color: #131415;
  `}
`

export const InfoMessage = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #131415;
  margin: 20px 0 15px;

  ${media.greaterThan('sm')`
    margin: 60px 0 20px;
    color: #697077;
  `}
`

