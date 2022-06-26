import Image from 'next/image';
import styled from 'styled-components';
import {media} from 'styles/media';

import {Text} from 'styles/common';

export const Wrapper = styled.div`
  padding-top: 50px;
`;

export const Inner = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 0 20px 20px;
  text-align: center;
  min-height: 305px;
  position: relative;

  ${media.greaterThan('xs')`
    box-shadow: 0px 10px 20px rgba(88, 88, 88, 0.1);
    border-radius: 10px;
    min-height: unset;
    height: 250px;
  `}
`;

export const ImageBackground = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  padding: 5px;
  margin: 0 auto;
  position: absolute;
  top: -35px;
  left: calc(50% - 35px);
`;

export const StyledImageWrapper = styled.div`
  filter: none;
  box-shadow: 0px 0px 4px 2px #95BFF0;
  border-radius: 50%;
`;

export const StyledImage = styled(Image)`
  border-radius: 50%;
`;

export const Header = styled.div`
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 10px;
    right: 10px;
    height: 1px;
    background: #D3E2FF;
  }
`;
export const ContentText = styled(Text)`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #697077;
`;

export const Title = styled(Text)`
  font-size: 16px;
  line-height: 19px;
  margin: 0 0 5px;
  justify-content: center;
`;

export const Role = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 400;
  margin: 0 0 30px;
  justify-content: center;
`;
