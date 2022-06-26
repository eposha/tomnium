import {Media} from 'src/media-styles';
import {Widget, CardLabel} from 'styles/common';
import {media} from 'styles/media';
import styled from 'styled-components';

export const WidgetPosition = styled(Widget)<{
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}>`
  position: absolute;
  height: fit-content;
`;

export const WidgetBottomLeft = styled(WidgetPosition)`
  bottom: 5px;
  left: 5px;

  ${media.greaterThan('xs')`
    bottom: 10px;
    left: 10px;
`}
`;

export const HiddenBottomRight = styled(Media)`
  position: absolute;
  right: 5px;
  bottom: 5px;
`;

export const IconsGroupWrapper = styled.div`
  display: flex;
`;

export const WidgetMargin = styled(Widget)`
  margin-left: 5px;
`;

export const CardLabelUI = styled(CardLabel)`
  position: absolute;
  top: -5px;
  left: -5px;

  ${media.greaterThan('xs')`
    top: -10px;
    left: -10px;
  `}
`;
