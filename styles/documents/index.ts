import {media} from 'styles/media';
import styled from 'styled-components';

export const FreeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;

  ${media.greaterThan('xs')`
  margin-top: 20px;
`}
`;

export const DocumentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
