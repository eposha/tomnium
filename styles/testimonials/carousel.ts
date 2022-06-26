import styled from 'styled-components';
import {media} from 'styles/media';
import {
  Dots as UIDots,
  PrevArrow as UIPrevArrow,
  NextArrow as UINextArrow,
} from '@/components/common/Carousel/Buttons';

export const Container = styled.div`
  display: flex;
  margin-left: -20px;
`;

export const Slide = styled.div`
  flex: none;
  padding-left: 20px;
  width: calc(100% - 60px);
  box-sizing: content-box;

  ${media.greaterThan('xs')`
    min-width: 380px;
    max-width: 380px;
    width: auto;
  `}
`;

export const NextArrow = styled(UINextArrow)`
  position: absolute;
  top: -35px;
  right: 0;
`;

export const PrevArrow = styled(UIPrevArrow)`
  position: absolute;
  top: -35px;
  right: 50px;
`;

export const Dots = styled(UIDots)`
  padding-top: 15px;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
