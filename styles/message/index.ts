import styled, {StyledProps} from 'styled-components';
import CloseSvg from 'public/icons/Close.svg';
import TriangleSvg from 'public/icons/Triangle.svg';
import {TMessage} from '@/components/common/message';
import {media} from '../media';

const getBgColor = ({type, theme}: StyledProps<{type: TMessage}>) => {
  switch (type) {
    case 'error':
      return theme.colors.common.redLight;
    case 'success':
      return theme.colors.common.greenLight;
  }
};

export const InnerMessage = styled.div<{type: TMessage; margin?: string}>`
  padding: 20px 45px 20px 25px;
  box-sizing: border-box;
  width: 100%;
  background-color: ${getBgColor};
  position: relative;
  border-radius: 5px;
  ${({margin}) => margin && `margin: ${margin}`};
  ${media.lessThan('lg')`
     padding: 10px 45px 10px 25px;
    
  `};
  overflow: hidden;
`;

export const InnerCloseButton = styled.button`
  background: rgba(255, 255, 255, 0.5);
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline-color: transparent;
`;

const getStroke = ({type, theme}: StyledProps<{type: TMessage}>) => {
  switch (type) {
    case 'error':
      return theme.colors.common.red;
    case 'success':
      return theme.colors.common.green;
  }
};

export const CloseIcon = styled(CloseSvg)<{type: TMessage}>`
  width: 8px;
  height: 8px;
  & > path {
    stroke: ${getStroke};
  }
`;

export const AttentionIcon = styled(TriangleSvg)<{type: TMessage}>`
  flex-shrink: 0;
  margin-right: 20px;
  width: 30px;
  height: 26px;
  ${media.greaterThan('lg')`
      width: 35px;
      height: 31px;
  `}
  & > path {
    fill: ${getStroke};
  }
`;

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;
