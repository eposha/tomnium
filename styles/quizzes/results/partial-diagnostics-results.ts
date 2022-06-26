import NextImage from 'next/image';
import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  ${media.greaterThan('xs')`
    display: grid;
    grid-template-columns: 640px minmax(400px, 500px);
    gap: 40px;
    align-items: flex-start
  `};
`;

export const GroupSchemeWrapper = styled.div`
  margin-bottom: 15px;

  ${media.greaterThan('xs')`
    margin-bottom: 0;
  `};
`;
export const HighlightedText = styled.span`
  color: ${({theme}) => theme.colors.primary};
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

export const ActiveGroupsWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 20px 10px;
  ${media.greaterThan('xs')`
    padding: 30px;

  `};
`;

export const ActiveGroupList = styled.div`
  margin-bottom: 50px;
`;

export const ActiveGroup = styled.div`
  background: #f4f6fa;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ActiveGroupImageWrapper = styled.div`
  position: relative;
  width: 95px;
  height: 95px;
  margin-right: 15px;
  box-shadow: 0px 10px 20px rgba(88, 88, 88, 0.1);
  border-radius: 50%;
  flex: none;
`;

export const ActiveGroupImage = styled(NextImage)`
  position: absolute;
`;

export const ActiveGroupContent = styled.div`
display`;

export const ActiveGroupTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  margin: 0 0 15px;
`;
export const ActiveGroupDescription = styled.div``;

export const AuthWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const AuthHeading = styled.h3`
  font-size: 16px;
  line-height: 120%;
  font-weight: 600;
  margin: 0;

  ${media.greaterThan('xs')`
    font-size: 20px;
  `};
`;

export const AuthDescription = styled.p<{
  textAlign?: 'center' | 'left' | 'right' | 'justify';
}>`
  font-size: 10px;
  line-height: 120%;
  margin: 15px 0;
  color: #697077;
  text-align: ${({textAlign}) => textAlign};

  ${media.greaterThan('xs')`
    font-size: 12px;
  `};
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
