import styled from 'styled-components';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px dashed ${({theme}) => theme.colors.common.blueberry};
  border-radius: 10px;
  padding: 75px 18px 95px;

  ${media.greaterThan('md')`
    padding: 40px 20px 20px;
  `}
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 0 10px 0;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.greyDark};
  margin: 0 0 20px 0;
`;

export const Button = styled.a`
  display: block;
  min-width: 160px;
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  color: ${({theme}) => theme.colors.common.greyDark};
  background-color: transparent;
  padding: 10px;
  margin: 0 auto;
`;
