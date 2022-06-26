import styled from 'styled-components';
import {media} from 'styles/media';

import {Text} from 'styles/common';

export const ModuleCard = styled.div`
  padding: 0 10px 0 40px;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
  & > :last-child {
    padding-left: 0;
  }
  ${media.greaterThan('xs')`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
    padding: 0;
    
    & > :last-child {
      padding-left: 50px;
    }
    
    & > :not(:last-child) {
      margin: 0;
    } 

    &::before{
      content: '';
      position: absolute;
      top: -31px;
      left: 15px;
      right: 15px;
      height: 1px;
      background: ${({theme}) => theme.colors.common.greyLight};
    }
  `}
`;

export const ModuleContent = styled.div`
  ${media.greaterThan('xs')`
    padding: 0;
    flex-basis: 500px;
    margin-right: 20px;
  `}
`;

export const ModuleData = styled.div`
  flex: none;
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
  ${media.greaterThan('xs')`
    padding: 0;
    min-width: 160px;
  `}
`;

export const Description = styled(Text)`
  font-weight: 600;
  color: #697077;

  ${media.greaterThan('xs')`
    padding-left: 50px;
  `}
`;

export const IconWrapper = styled.div`
  margin-right: 10px;
`;

export const IconLabel = styled(Text)`
  color: ${({theme}) => theme.colors.common.greyDark};
  font-weight: 500;
  line-height: 14.5px;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  margin-bottom: 10px;
`;

export const TitleWrapper = styled.div`
  margin-right: 10px;
  flex: 1;
`;

export const ProgressWrapper = styled.div`
  padding-left: 28px;
  ${media.greaterThan('xs')`
    padding-left: 50px;
    flex-basis: 500px;
  `}
`;

export const HomeworksListWrapper = styled.div`
  ${media.greaterThan('xs')`
    margin-bottom: 10px;
  `}
`;
