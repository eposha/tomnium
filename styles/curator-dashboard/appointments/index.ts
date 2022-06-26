import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${media.greaterThan('xs')`
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Item = styled.div<{margin?: string}>`
  color: #131415;
  margin: ${({margin}) => margin ?? '0 0 10px'};
`;

export const UserLabel = styled.span`
  display: inline-block;
  width: 100%;
  margin-right: 10px;
  font-weight: 500;

  ${media.greaterThan('xs')`
    width: 150px;
  `}
`;
