import styled from 'styled-components';
import { media } from 'styles/media';

export const Wrapper = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 gap: 40px;
`

export const AnswerBlock = styled.div`
  width: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  padding: 25px;
  box-sizing: border-box;
`
export const BlockAnswer = styled.div`
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 gap: 10px;
`

export const LinearWrapper = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 gap: 7px;
 flex-wrap: wrap;

 ${media.greaterThan('md')`
 flex-wrap: nowrap;
 `}
`
export const OptionTitle = styled.div`
  font-size: 12px;
  max-width: 150px;
  width: 100%;
`

export const LinearLine = styled.div<{ percent?: number }>`
  width: 100%;
  height: 6px;
  background: #E2E2E2;
  border-radius: 10px;
  position: relative;

  &:before {
   content: "";
   width: ${({percent}) => percent || 0}%;
   height: 6px;
   position: absolute;
   left: 0;
   top: 0;
   border-radius: 10px;
   background: #516FF6;
  }
`

export const Answer = styled.div`
 width: 100%;
 margin-top: 10px;
`

export const ItemAnswer = styled.div`
 max-height: 400px;
 overflow: scroll;
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 gap: 10px;
`


export const TextItemAnswer = styled.div`
 padding: 8px;
 border-radius: 6px;
 font-size: 12px;
 background: #f8f9fa;
 max-width: 300px;
`
export const SliderAnswerWrapper = styled.div`
 display: flex;
 align-items: center;
`
export const SliderItem = styled.div`
 display: flex;
 align-items: center;
 font-size: 13px;
 border-radius: 10px;
 background: #516FF6;
 max-width: 500px;
 width: 100%;
 color: #fff;
 justify-content: center;
 display: flex;
 align-items: center;
 margin-right: 5px;
`

export const SliderTitle = styled.div`
  font-size: 13px;
  font-family: 'Gilroy-Medium';
`

export const BtnWrapper = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const UsersWrapper = styled.div`
    width: 100%;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 25px;
`

export const UsersInner = styled.div`
    gap: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow: scroll;
    margin-top: 10px;
`

export const UserLink = styled.a`
  text-decoration: none;

`