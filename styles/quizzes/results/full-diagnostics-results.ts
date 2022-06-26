import styled from 'styled-components';
import {media} from 'styles/media';

import NextImage from 'next/image';

export const GroupSchemeWrapper = styled.div`
  margin-bottom: 30px;
  ${media.greaterThan('xs')`
    margin-botom: 50px;
  `};
`;

export const ResultsWrapper = styled.div`
  margin-bottom: 30px;
  ${media.greaterThan('xs')`
    margin-botom: 50px;
  `};
`;

export const RecommendationTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  margin: 0 0 10px;

  ${media.greaterThan('xs')`
    font-size: 28px;
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
    max-width: 580px;
  `};
`;

export const GroupCard = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 15px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  ${media.greaterThan('xs')`
    padding: 30px;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  `};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: '';
    height: 1px;
    position: absolute;
    right: 0;
    bottom: -15px;
    left: 0;
    background-color: #f4f6fa;
  }

  ${media.greaterThan('xs')`
    margin-bottom: 15px;

    &::after{
      visibility: hidden;
    }
  `};
`;

export const GroupImageWrapper = styled.div`
  margin-right: 15px;
  width: 60px;
  height: 60px;
  position: relative;

  ${media.greaterThan('xs')`
    width: 100px;
    height: 100px;
  `};
`;

export const GroupImage = styled(NextImage)`
  border-radius: 50%;
  position: absolute;
`;

export const GroupTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  margin: 0;

  ${media.greaterThan('xs')`
    font-size: 28px;
  `};
`;

export const ResultText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 120%;
  margin: 0 0 20px;
  color: #697077;

  ${media.greaterThan('xs')`
    font-size: 16px;
  `};
`;
