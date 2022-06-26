import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  padding: 20px 0 30px;
  ${media.greaterThan('xs')`
    padding: 30px 0 50px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 20px;
  `};
`;

export const Main = styled.main`
  overflow: hidden;
`;

export const Title = styled.h1`
  font-size: 18px;
  line-height: 120%;
  font-weight: 400;
  margin: 0 0 25px;
  color: #131415;

  ${media.greaterThan('xs')`
    font-size: 22px;
    margin:  0 0 15px;
  `}
`;
