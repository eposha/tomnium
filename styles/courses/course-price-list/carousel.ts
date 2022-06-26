import styled, {css} from 'styled-components';
import {
  PrevArrow as UIPrevArrow,
  NextArrow as UINextArrow,
} from '@/components/common/Carousel/Buttons';

export const Wrapper = styled.div`
  overflow: hidden;
  background-color: #fff;
  border-radius: 5px;
`;

export const Container = styled.div`
  display: flex;
  margin-left: -20px;
`;

export const Slide = styled.div`
  flex: none;
  width: calc(100% - 20px);
  color: #131415;
`;

export const PriceListWrapper = styled.div`
  padding-left: 20px;
`;

export const PriceListInner = styled.div`
  position: relative;
  padding: 0 10px 10px;
`;

const ArrowStyle = css`
  position: absolute;
  top: 0;
  width: 40px;
  height: 45px;
`;

export const NextArrow = styled(UINextArrow)`
  ${ArrowStyle};
  right: 0;
`;

export const PrevArrow = styled(UIPrevArrow)`
  ${ArrowStyle};
  left: 0;
`;

export const PriceListHeader = styled.div`
  text-align: center;
  width: calc(100% - 30px);
  margin: 0 auto;
  padding: 15px 0;
  border-bottom: 1px solid #f4f6fa;
`;

export const PriceListTitle = styled.h6`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #516ff6;
`;

export const PriceListBody = styled.div`
  margin-bottom: 30px;
`;

export const PriceListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  position: relative;

  &::after {
    content: '';
    background: #f4f6fa;
    position: absolute;
    height: 1px;
    bottom: 0;
    left: 10px;
    right: 10px;
  }
`;

export const PriceListOption = styled.p<{$isActive?: boolean}>`
  margin: 0 0 0 10px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
  color: #697077;

  ${({$isActive}) =>
    $isActive &&
    `
      color: #131415;
    `}
`;

export const PriceListProperty = styled.span`
  font-weight: 600;
  color: #516ff6;
`;

export const PriceListFooter = styled.div``;

export const PriceListPrice = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PriceListButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: space-between;
`;
