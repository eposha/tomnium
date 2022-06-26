import styled from 'styled-components';

export const Box = styled.div<{
  mr?: string;
  ml?: string;
  mb?: string;
  mt?: string;
  mw?: string;
  width?: string;
  height?: string;
  as?: keyof JSX.IntrinsicElements;
  position?: string;
}>`
  ${({position}) => position && `position: ${position}`};
  margin-right: ${({mr}) => mr || 0};
  margin-left: ${({ml}) => ml || 0};
  margin-top: ${({mt}) => mt || 0};
  margin-bottom: ${({mb}) => mb || 0};
  width: ${({width}) => width || 'auto'};
  height: ${({height}) => height || 'auto'};
  max-width: ${({mw}) => mw || '700px'};
`;
