import styled from 'styled-components';
import { media } from '../media';

export const CardsInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 830px;

  ${media.greaterThan('sm')`
     width: 100%
  `}
`

export const CardsWrapper = styled.div`
  align-self: flex-start;
  overflow-x: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.greaterThan('sm')`
     overflow-x: unset;
  `}
`

export const Card = styled.a`
  width: 270px;
  height: 90px;
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;

  ${media.greaterThan('sm')`
    background: #F4F6FA;
  `}
`
export const ImgWrapper = styled.div`
  min-width: 60px;
  min-height: 60px;
  margin-right: 10px;

  img {
    object-fit: cover;
    border-radius: 5px;
  }
`

export const CardTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #131415;
  margin-bottom: 7px;
`

export const CardInfo = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #697077;
`