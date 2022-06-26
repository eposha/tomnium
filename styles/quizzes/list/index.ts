import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  padding: 20px 0 30px;
  width: 100%;
  ${media.greaterThan('xs')`
    padding: 35px 0 130px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 30px;
  `};
`;
export const Main = styled.main`
  width: 100%;
`;

export const DiagnosticsQuizzesListHeader = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 120%;
  margin: 0 0 20px;
`;

export const CatalogQuizzesContainer = styled.div`
  max-width: 980px;
`;

export const CatalogQuizzesListHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  max-width: 980px;

  & > :first-child {
    margin: 0 0 15px;
  }

  ${media.greaterThan('xs')`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    & > :first-child {
      margin: 0 15px 0 0;
    }
  `};
`;

export const CatalogQuizzesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  ${media.greaterThan('xs')`
    grid-template-columns: 1fr 1fr;
  `};
`;

export const DiagnosticsQuizzesList = styled.div`
  margin-bottom: 20px;
  & > * {
    margin-bottom: 20px;
  }
  ${media.greaterThan('xs')`
    margin-bottom: 30px;
    & > *{
      margin-bottom: 50px;
    }
  `};
`;
