import styled, {css} from 'styled-components';
import {ContainerWithCustomScroll, Text} from 'styles/common';
import {media} from '../media';
import {ResetPasswordLink} from '../auth/common';

export const FormPromoInput = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UIPromoInput = styled.input<{$isError: boolean}>`
  padding: 15px 10px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background: ${({theme}) => theme.colors.common.whiteGrey};
  border: 2px solid transparent;
  &::placeholder {
    color: ${({theme}) => theme.colors.common.greyDark};
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
  }
  &:active,
  &:focus {
    border: 2px solid
      ${({theme, $isError}) =>
        $isError ? theme.colors.common.red : theme.colors.common.blueberry};
  }
  margin-right: 10px;
  border-radius: 5px;
  outline-color: transparent;
`;

export const InnerFooterProduct = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: 30fr 70fr;
`;

export const SpaceBetweenColumnInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const InnerMainContent = styled.div`
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 498px;
`;

export const InnerMainContentSecondary = styled(InnerMainContent)`
  justify-content: flex-start;
  padding-bottom: 0;
`;

export const InnerPaymentMethod = styled.div<{$isActive?: boolean}>`
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  background: ${({theme}) => theme.colors.common.whiteGrey};
  border: 1px solid
    ${({$isActive, theme}) =>
      $isActive ? theme.colors.common.jordyBlue : 'transparent'};
  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background: ${({theme}) => theme.colors.primary};
    .text-payment-method {
      color: ${({theme}) => theme.colors.common.white};
    }
    ${media.lessThan('xs')`
      background: ${({theme}) => theme.colors.common.whiteGrey};
      .text-payment-method {
        color: ${({theme}) => theme.colors.common.greyDark};
        }
    `}
  }
`;

export const PaymentMethodArrowRight = styled.div`
  border: solid ${({theme}) => theme.colors.common.blueberry};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 2px;
  transform: rotate(-45deg);
`;

export const InnerPaymentArrow = styled.div`
  width: 20px;
  height: 20px;
  padding-right: 3px;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.common.white};
`;

export const StyledText = styled(Text).attrs({
  className: 'text-payment-method',
})`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const InnerPaymentsMethods = styled(ContainerWithCustomScroll)`
  max-height: 315px;
  margin-top: 20px;
`;

const stylesButton = css`
  color: ${({theme}) => theme.colors.common.jordyBlue};
  font-weight: 500;
  font-size: 10px;
  line-height: 120%;
  text-decoration: underline;
`;

export const DownloadLink = styled.a`
  ${stylesButton}
`;

export const InnerLinks = styled.div`
  margin: 10px 0 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ShowEmailButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  ${stylesButton};
`;

export const InnerBankDetailsInput = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`;

export const BankDetailsInput = styled.input`
  background: ${({theme}) => theme.colors.common.whiteGrey};
  border: 1px solid transparent;
  height: 40px;
  flex-grow: 1;
  border-radius: 5px;
  outline-color: ${({theme}) => theme.colors.common.blueberry};
  padding: 15px 10px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.common.greyLight};
  }
`;

export const InnerFlexCenter = styled.div<{margin?: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({margin}) => margin && `margin: ${margin}`}
`;

export const ButtonLink = styled(ResetPasswordLink)`
  font-size: 10px;
  font-weight: 500;
  text-decoration: underline;
`;

export const HeaderPaymentsMethods = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 12px;
  box-sizing: border-box;
`;

export const InnerSuccesPayment = styled(InnerFlexCenter)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const InnerRequiredFields = styled.div<{margin?: string}>`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  ${({margin}) => margin && `margin: ${margin}`};
`;
