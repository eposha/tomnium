import {media} from 'styles/media';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  margin: 20px 0 40px 0;

  ${media.greaterThan('lg')`
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 20px;
    margin: 40px 0 90px 0;
  `};
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 20px 0;
`;

export const Container = styled.div`
  position: relative;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Section = styled.section<{mb?: number}>`
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : '40px')};

  ${media.greaterThan('md')`
    margin-bottom: 50px;
  `};
`;
