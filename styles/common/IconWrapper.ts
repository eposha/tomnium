import styled from 'styled-components';

export const IconWrapper = styled.div<{ size?: number }>`
  display: inline-block;
  min-width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-right: 5px;
  vertical-align: middle;
`