import styled, {css} from 'styled-components';
import {media} from 'styles/media';

export const Title = css`
  margin: 5px 0 0 0;
  font-weight: 600;

  ${media.greaterThan('xs')`
    margin: 10px 0 0 0;
  `};
`;

export const TitleH1 = styled.h1`
  font-size: 28px;
  ${Title}
`;

export const TitleH2 = styled.h2`
  font-size: 20px;
  ${Title}
`;

export const TitleH3 = styled.h3`
  font-size: 18px;
  ${Title}
`;

export const TextUI = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 500;

  div {
    ${media.lessThan('sm')`
      color: ${({theme}) => theme.colors.common.greyDark};
  `};
  }
`;
