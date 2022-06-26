import styled from 'styled-components';
import { media } from 'styles/media';

export const MainWrapper = styled.div`
  padding: 20px 10px 30px;

  ${media.greaterThan('md')`
    padding: 30px 10px;
  `}
`

export const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 980px;
  margin-left: auto;
`

export const Block = styled.div<{mb?: number}>`
  width: 100%;
  background: #FFFFFF;
  border-radius: 5px;
  
  ${({mb}) => media.greaterThan('md')`
    padding: 30px 10px;
    margin-bottom: ${mb || 0}px;
  `}
`

export const BtnLink = styled.a`
  width: 160px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #D3E2FF;
  border-radius: 5px;
  font-size: 14px;
  color: #516FF6;
`