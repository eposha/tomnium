import styled, {css} from 'styled-components';
import {InnerPriceRow} from './mainContent';
import {TColors} from '../_variables';
import {InnerBankDetails} from './paymentCash';
import {InnerPaymentMethod} from './common';

export const WrapperMobile = styled.div`
  margin-top: 15px;
`;

export const WrapperPopup = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5px 5px 0 0;
  z-index: 30;
  max-width: 400px;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  opacity: 1;
`;

export const InnerHeader = styled.div`
  background: ${({theme}) => theme.colors.common.white};
  padding: 15px;
  box-sizing: border-box;
`;

export const DefaultInnerShowMoreBlock = styled.div`
  background: ${({theme}) => theme.colors.common.white};
  padding: 15px 10px;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const InnerCards = styled(DefaultInnerShowMoreBlock)`
  background: ${({theme}) => theme.colors.common.whiteGrey};

  padding: 5px 0 5px 10px;
  width: 100%;
  box-sizing: border-box;
  .header-show_more_block {
    padding-right: 20px;
  }
`;

export const HeaderShowMoreBlock = styled.div.attrs({
  className: 'header-show_more_block',
})`
  position: relative;
  display: flex;
  padding-right: 35px;
  align-items: center;
  box-sizing: border-box;
`;

export const ShowButton = styled.button<{isShowMore: boolean}>`
  border: none;
  background: ${({theme}) => theme.colors.common.whiteGrey};
  width: 20px;
  height: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  ${({isShowMore}) =>
    isShowMore ? `padding-top: 3px` : `padding-bottom: 3px`};
`;

export const InnerUser = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const WrapperPhoneInput = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const InnerAuthButtons = styled.div`
  max-width: 330px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
`;

export const MobileInnerPriceRow = styled(InnerPriceRow)`
  border: none;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({theme}) => theme.colors.common.whiteGrey};
`;

export const LightDivider = styled(Divider)`
  background: rgba(255, 255, 255, 0.5);
`;

export const InnerPromoCodePopup = styled.div`
  padding: 20px 10px;
  background: ${({theme}) => theme.colors.common.white};
`;

export const InnerItemContent = styled.div`
  border-radius: 5px;
  flex-grow: 1;
  height: 100%;
`;

export const PromoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const InnerPaymentContent = styled.div`
  padding: 15px 10px;
  border-radius: 5px;
  box-sizing: border-box;
  background: ${({theme}) => theme.colors.common.white};
`;

export const InnerCreateOrderContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

interface IPropsPrimaryMobileButton {
  margin?: string;
  border?: 'primary' | 'none';
}

const stylesButton = css<IPropsPrimaryMobileButton>`
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: ${({margin}) => margin || 0};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PrimaryMobileButton = styled.button<
  IPropsPrimaryMobileButton & {color: TColors}
>`
  ${stylesButton};
  border: ${({theme, border, color}) =>
    border === 'none' ? 'none' : `1px solid ${theme.colors.common[color]}`};
`;

export const MobileDownloadLink = styled.a<IPropsPrimaryMobileButton>`
  ${stylesButton};
`;

export const MobileInnerBankDetails = styled(InnerBankDetails)`
  padding: 0;
  background: transparent;
`;

export const LabelPaymentCard = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  box-sizing: border-box;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
`;

export const CardCheckBox = styled.div<{$isActive: boolean}>`
  border: ${({$isActive, theme}) =>
    $isActive
      ? 'transparent'
      : `2px solid ${theme.colors.common.blueberryLight}`};
  box-sizing: border-box;
  border-radius: 3px;
  width: 15px;
  height: 15px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({$isActive, theme}) =>
    $isActive ? theme.colors.common.blueberry : 'transparent'};
  z-index: 1;
`;

export const InnerPaymentCards = styled(InnerPaymentMethod)`
  padding: 0;
  background: transparent;
`;
