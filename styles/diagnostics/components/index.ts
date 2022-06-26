import styled,{css} from 'styled-components';
import { media } from 'styles/media';

export const TicketsWrapper = styled.div`
  margin-bottom: 15px;
`

export const TicketItemInner = styled.div<{$isClosed?: boolean}>`
  display: grid;
  border-bottom: 1px solid #D3E2FF;
  grid-template-columns: 1fr 1fr 4fr 2fr 1fr 2fr;
  width: 100%;
  padding: 10px 20px;
  color: ${({$isClosed}) => $isClosed ? '#697077' : '#131415'};
`

export const TicketCell = styled.div<{}>`
  color: #131415;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
`

export const TitleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
`

export const ModalInner = styled.div`
  width: 100%;
`

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const QuestionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;

  ${media.greaterThan('md')`
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      gap: 20px;
  `}
`
export const InputCss = css`
  border: 1px solid #D3E2FF;
  border-radius: 5px;
  box-sizing: border-box;
  color: #131415;
  font-family: 'Gilroy-Regular';
`

export const InputWrapper = styled.div<{mw?: number}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ mw }) => media.greaterThan('lg')`
     max-width: ${mw ? `${mw}px` : 'unset'};
  `}
`

export const Label = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #697077;
  margin-bottom: 10px;

  ${media.greaterThan('md')`
    font-size: 16px;
    line-height: 19px;
  `}
`

export const Input = styled.input.attrs({ type: 'text' })`
  ${InputCss};
  height: 40px;
  outline: none;
  padding: 10px;
  color: #131415;
  font-size: 14px;
`

export const TextArea = styled.textarea`
  ${InputCss};
  resize: none;
  min-height: 100px;
  outline: none;
  font-size: 12px;
  padding: 10px;
  color: #697077;

  ${media.greaterThan('md')`
    min-height: 100px;
  `}
`

export const Wrapper = styled.div`
  margin-bottom: 50px;
`

export const Controllers = styled.div`
  margin-top: 20px;
  width: 100%;
  display:flex;
  justify-content: center;

  ${media.greaterThan('md')`
    margin-top: 20px;
    justify-content: flex-end;
  `}
`

export const UploadWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`


export const BlockController = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const Title = styled.div<{}>`
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: #131415;
  
  ${media.greaterThan('md')`
    margin-bottom: 20px;
  `}

  ${media.greaterThan('md')`
    font-size: 20px;
    line-height: 24px;
  `}
`

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #131415;
  z-index: 29;
  opacity: 0.15;
`

export const ModalBlock = styled.div`
  width: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  box-sizing: border-box;
  padding: 15px 15px 20px 15px;
  width: 90%;
  
  ${media.greaterThan('lg')`
    max-width: 980px;
    padding: 30px 50px 30px 30px;
  `}
`

export const Upload = styled.div`
  background: #F4F6FA;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80px;
  height: 50px;
`

export const UploadInput = styled.input.attrs({ type: "file" })`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
  opacity: 0;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  svg {
    height: 50%;
  }
`