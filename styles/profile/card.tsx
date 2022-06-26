import styled from 'styled-components';

import {Widget} from 'styles/common';
// import {media} from 'styles/media';

import {Text} from 'styles/common';

export const Wrapper = styled.div<{
  margin?: string;
  $isPlain?: boolean;
  width?: string;
}>`
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  border: ${({theme}) => `1px solid ${theme.colors.common.blueberryLight}`};
  margin: ${({margin}) => margin};
  width: ${({width}) => width};

  ${({$isPlain}) =>
    $isPlain &&
    `
      background-color: #fff;
      border: none;
    `}

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const AvatarWrapper = styled.div`
  align-items: center;
  background: white;
  border-radius: 50%;
  box-shadow: 0px 0px 4px 2px rgba(149, 191, 240, 0.6);
  display: flex;
  height: 62px;
  justify-content: center;
  margin: 0 auto 10px;
  width: 62px;
`;

export const Name = styled(Text)`
  font-weight: 500;
  text-align: center;
`;

export const Level = styled(Widget)`
  font-size: 10px;
  height: 20px;
  margin: 0 auto;
  min-width: 100px;
  max-width: 115px;
`;

export const StyledLink = styled.a`
  border-bottom: ${({theme}) => `1px solid ${theme.colors.common.jordyBlue}`};
  color: ${({theme}) => theme.colors.common.jordyBlue};
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
`;
