import styled from 'styled-components';
import {media} from 'styles/media';

export const PageWrapper = styled.div`
  margin: 20px 0 30px 0;

  ${media.greaterThan('lg')`
    margin: 35px 0 80px 0;
`};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.2;

  ${media.greaterThan('md')`
    flex-direction: row;
`};

  &:not(:last-child) {
    margin-bottom: 30px;

    ${media.greaterThan('md')`
      margin-bottom: 65px;
  `}
  }
`;

export const PageTitle = styled.h2<{mb?: number}>`
  max-width: 140px;
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 ${({mb}) => (mb ? `${mb}px` : 0)} 0;

  ${media.greaterThan('md')`
    max-width: 100%;
`};
`;

export const PageSubtitle = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 30px 0;

  ${media.greaterThan('md')`
    font-size: 16px;
    margin: 0 0 55px 0;
`};
`;

export const PageText = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
`;
export const Flex = styled.div<{mb?: number}>`
  display: flex;
  min-height: 20px;
  justify-content: space-between;
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : 0)};
`;

export const Button = styled.a`
  font-size: 12px;
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.greyDark};
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 5px 10px;
`;

export const Container = styled.div`
  position: relative;
`;
export const FlexContainer = styled.div`
  display: flex;
`;

export const Box = styled.div<{width: number}>`
  max-width: ${({width}) => `${width}px`};

  ${media.greaterThan('md')`
    width: 180px;
  `}
`;
