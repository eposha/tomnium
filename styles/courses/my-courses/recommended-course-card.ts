import styled from 'styled-components';
import {media} from 'styles/media';
import Currency from 'public/icons/CurrencySVG.svg';

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.blueberry};
  margin: 0 0 10px 0;

  ${media.greaterThan('xs')`
    margin: 0 0 20px 0;
  `}
`;

export const CardTop = styled.div<{color: string}>`
  max-width: 320px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 10px;
  border-bottom: 1px dashed ${({theme}) => theme.colors.common.blueberryLight};
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 10px;
    left: -5px;
    bottom: -5px;
    border-radius: 50%;
    background-color: ${({theme, color}) => theme.colors.common[color]};
  }

  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 10px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background-color: ${({theme, color}) => theme.colors.common[color]};
  }
`;

export const CardBottom = styled.div`
  max-width: 320px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.common.white};
  padding: 10px;
`;

export const Title = styled.h3`
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  height: 40px;
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
`;

export const CardLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
  text-decoration: underline;
`;

export const CurrencySVG = styled(Currency)<{color: string}>`
  width: 17px;
  height: 17px;
  margin-right: 6px;

  path {
    stroke: ${({theme, color}) => theme.colors.common[color]};
  }
`;
