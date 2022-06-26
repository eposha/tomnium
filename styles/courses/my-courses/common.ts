import styled from 'styled-components';
import {media} from 'styles/media';

export const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 980px;
`;

export const LoaderWrapper = styled.div`
  max-width: 980px;
  width: 100%;
  border-radius: 5px;
  background-color: rgb(255, 255, 255);
  position: relative;
  height: 400px;
`

export const Box = styled.section<{mbs: number; mbl: number}>`
  margin-bottom: ${({mbs}) => `${mbs}px`};

  ${({mbl}) => media.greaterThan('lg')`
  margin-bottom: ${mbl}px;
`}
`;

export const Container = styled.div<{ mb?: number; mr?: number; mw?: number; $isFullWidth?: boolean}>`
  position: relative;
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : 0)};
  max-width: ${({ mw }) => mw ? `${mw}px` : 'unset'};
  width: ${({$isFullWidth}) => $isFullWidth ? '100%' : 'unset'};
`;

export const Flex = styled.div<{mb?: number}>`
  display: flex;
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
`;

export const ColumnFlex = styled.div<{mr?: number; jc: string}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${({jc}) => jc};
  margin-right: ${({mr}) => (mr ? `${mr}px` : 0)};
`;

export const FlexVertCenter = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;

  ${media.greaterThan('lg')`
    margin: 0 0 30px 0;
  `}
`;

export const SlideContainer = styled.div`
  display: flex;
`;

export const Slide = styled.div`
  flex: none;
  width: 80%;
  max-width: 320px;
  margin-right: 10px;
`;
