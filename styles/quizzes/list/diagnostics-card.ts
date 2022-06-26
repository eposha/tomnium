import NextImage from 'next/image';
import styled from 'styled-components';
import {media} from 'styles/media';

import {Button as UIButton} from 'styles/common';

export const Wrapper = styled.div`
  border-radius: 5px;
  max-width: 980px;
`;

export const Image = styled(NextImage)`
  border-radius: 5px 5px 0 0;
`;

export const Content = styled.div`
  background: white;
  padding: 15px 10px 20px;
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 600;
  line-height: 120%;
  margin: 0 0 10px;

  ${media.greaterThan('xs')`
    font-size: 20px;
  `};
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  margin: 0;
  overflow-wrap: anywhere;

  ${media.greaterThan('xs')`
    font-size: 16px;
  `};
`;

export const CardLabelWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  height: 40px;
  margin: 0 0 10px;
  ${media.greaterThan('xs')`
    margin: 0;
    justify-content: space-between;
    & > :last-child{
      margin-left: auto;
    }
  `};
`;

export const Label = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 120%;
  margin: 0;
  color: ${({theme}) => theme.colors.primary};
  ${media.greaterThan('xs')`
    padding-left: 30px;
  `};
`;

export const Button = styled(UIButton)`
  min-width: 135px;
  margin: 0 auto;

  ${media.greaterThan('xs')`
    min-width: 160px;
  `};
`;
