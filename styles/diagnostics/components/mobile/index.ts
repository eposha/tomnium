import styled,{css} from 'styled-components';
import { media } from 'styles/media';
import {Media} from 'src/media-styles';

export const TicketMobileInner = styled.div`
  display: flex;
  padding: 15px 10px 10px;
  border-bottom: 1px solid #D3E2FF;
`

export const MobileContainer = styled(Media)`
  &:last-child {
    visibility: hidden;
  }
`

export const TicketNumber = styled.div`
  width: 40px;
  margin-right: 5px;
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  display: flex;
  justify-content: center;
  color: #697077;
`

export const Inner = styled.div`
 width: 100%;
`

export const TicketInfoWrapper = styled.div<{mb?: number}>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({mb}) => mb ? mb : 0}px;
`

export const CellText = styled.div<{ color?: string, mb?: number, fz?: number }>`
  font-weight: 500;
  font-size: ${({fz}) => fz ? fz : '12'}px;
  line-height: 14px;
  color: ${({ color }) => color || '#131415'};
  margin-bottom: ${({mb}) => mb ? `${mb}px` : '0'};
`

export const CellLink = styled.a`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #8BB3FF;
  text-decoration-line: underline;
`

