import {media} from 'styles/media';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  padding-top: 20px;

  ${media.greaterThan('xs')`
    padding: 40px 0;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 20px;
`};
`;

export const InnerCards = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ContainerCards = styled(InnerCards)`
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const Divider = styled.div<{margin?: string}>`
  width: 100%;
  height: 1px;
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  margin: ${({margin}) => margin || 0};
`;

export const LinkCompleted = styled.a`
  padding: 5px 10px;
  box-sizing: border-box;
  font-weight: 600;
  font-size: 10px;
  color: ${({theme}) => theme.colors.common.blueberry};
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  cursor: pointer;
  ${media.greaterThan('xs')`
    font-size: 12px;
    color: ${({theme}) => theme.colors.blueberry};
    background: ${({theme}) => theme.colors.common.blueberryLight};
    border-radius: 20px;
    border: none;
  `};
`;

export const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const FaqContainer = styled.div<{mb?: number}>`
  width: 100%;
  margin-bottom: ${({mb}) => (mb ? `${mb}px` : '25px')};
  ${({mb}) => media.greaterThan('xs')`
    margin-bottom: ${mb} ? ${`${mb}px`} : 80px;
  `};
`;
