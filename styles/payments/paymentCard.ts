import styled from 'styled-components';
import {
  ContainerWithCustomScroll,
  LeftArrow,
  RightArrow,
  Text,
} from 'styles/common';
import {Arrow} from '@/components/common/PurchaseProducts/Desktop/PaymentCardsSlider/Buttons';
import MasterCard from 'public/icons/MasterCard.svg';
import Visa from 'public/icons/Visa.svg';

export const InnerPaymentCard = styled.div`
  background: ${({theme}) => theme.colors.common.whiteGrey};
  border-radius: 5px;
  width: 150px;
  height: 90px;
  &:hover {
    background: ${({theme}) => theme.colors.common.blueberry};
    .text-payment-card {
      color: ${({theme}) => theme.colors.common.white};
    }
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px 10px 10px;
  cursor: pointer;
`;

export const PaymentText = styled(Text).attrs({
  className: 'text-payment-card',
})`
  color: ${({theme}) => theme.colors.common.greyDark};
`;

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const InnerNewCard = styled.div`
  border: 1px dashed ${({theme}) => theme.colors.common.jordyBlue};
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 90px;
  cursor: pointer;
`;

export const Slide = styled.div`
  flex: none;
  padding-left: 20px;
`;

export const ArrowWrapper = styled.div<{disabled?: boolean}>`
  background: ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  width: 20px;
  height: 20px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({disabled}) => (disabled ? 'unset' : 'pointer')};
  opacity: ${({disabled}) => (disabled ? '0.6' : '1')};
`;

export const UIRightArrow = styled(RightArrow).attrs({
  color: 'blueberry',
  width: 2,
  padding: 2,
})``;

export const UILeftArrow = styled(LeftArrow).attrs({
  color: 'blueberry',
  width: 2,
  padding: 2,
})``;

export const NextArrowSlider = styled(Arrow).attrs({Component: UIRightArrow})`
  position: absolute;
  box-sizing: border-box;
  padding-right: 2px;
  bottom: -35px;
  right: 0;
`;

export const PrevArrowSlider = styled(Arrow).attrs({Component: UILeftArrow})`
  position: absolute;
  box-sizing: border-box;
  padding-left: 2px;
  bottom: -35px;
  right: 35px;
`;

export const InnerFAQ = styled(ContainerWithCustomScroll)`
  max-height: 190px;
  margin-top: 15px;
`;

export const FooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 7px;
`;

export const MasterCardSVG = styled(MasterCard)`
  flex-basis: 25px;
`;

export const VisaSVG = styled(Visa)`
  flex-basis: 25px;
`;
