import {media} from 'styles/media';
import styled from 'styled-components';

export const PlugWrapper = styled.div<{mh: number}>`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({theme}) => theme.colors.common.jordyBlue};
  border-radius: 5px;
  padding: 25px;
  min-height: ${({mh}) => `${mh}px`};
`;

export const Title = styled.h3`
  max-width: 450px;
  font-size: 16px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;

  ${media.greaterThan('md')`
    font-size: 18px;
    `};
`;

export const Text = styled.p`
  max-width: 450px;
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 20px 0;
`;

export const Button = styled.a`
  min-width: 160px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
  padding: 10px;
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
`;
