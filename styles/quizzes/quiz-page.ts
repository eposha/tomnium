import NextImage from 'next/image';
import styled from 'styled-components';
import {media} from 'styles/media';

import {Button as UIButton} from 'styles/common';

export const Wrapper = styled.div`
  padding: 20px 0 30px;
  ${media.greaterThan('xs')`
    padding: 30px 0 80px;
    display: grid;
    grid-template-columns: 180px minmax(640px, 980px);
    gap: 20px;
  `};
`;

export const Main = styled.main`
  width: 100%;
  background-color: white;
`;

export const Image = styled(NextImage)`
  border-radius: 5px 5px 0 0;
`;

export const ContentBlockWrapper = styled.div`
  padding: 20px 10px 30px;
  ${media.greaterThan('xs')`
    padding: 20px 30px 30px;
  `};
  & > :first-child {
    max-width: unset;
  }
`;

export const ButtonContainer = styled.div`
  background-color: ${({theme}) => theme.colors.common.blueberryLight};
  display: flex;
  justify-content: flex-end;
  border-radius: 5px;
`;

export const Button = styled(UIButton)`
  min-width: 160px;
`;

export const QuestionTitle = styled.h2`
  font-size: 14px;
  font-weight: 600;
  line-height: 120%;
  margin: 0 0 10px;
  ${media.greaterThan('xs')`
    font-size: 20px
  `};
`;
