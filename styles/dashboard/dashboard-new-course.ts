import styled from 'styled-components';
import {media} from 'styles/media';

export const CardContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({theme}) => theme.colors.common.jordyBlue};
  border-radius: 5px;
  padding: 30px 15px;
  min-height: 295px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 10px 0;

  ${media.greaterThan('md')`
    font-size: 18px;
`};
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0 0 15px 0;

  ${media.greaterThan('md')`
    margin: 0 0 30px 0;
  `};
`;

export const Button = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: ${({theme}) => theme.colors.common.blueberry};
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  padding: 10px 30px;
`;
