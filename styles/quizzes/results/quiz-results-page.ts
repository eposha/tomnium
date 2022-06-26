import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div<{$isPartial?: boolean}>`
  padding: 20px 0 30px;
  ${media.greaterThan('xs')`
    padding: 30px 0 80px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 20px;

    ${
      //@ts-ignore
      ({$isPartial}) =>
        $isPartial &&
        `
          grid-template-columns: 1fr;
          padding: 50px 0 140px;
        `
    }
  `};
`;

export const Main = styled.main`
  width: 100%;
`;

export const Recommendations = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const RecommendationTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  margin: 0 0 10px;

  ${media.greaterThan('xs')`
    font-size: 20px;
  `};
`;

export const RecommendationDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 115%;
  color: #697077;
  margin: 0 0 15px;

  ${media.greaterThan('xs')`
    font-size: 16px;
  `};
`;

export const RecommendationsDocumentList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
