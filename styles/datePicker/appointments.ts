import styled, {css, StyledProps} from 'styled-components';
import {Text} from 'styles/common';
import {media} from '../media';
import Arrow from '../../public/icons/datepickerArrowSVG.svg';
import {TColors} from '../_variables';

export const StyledDatePicker = styled.div`
  .appointmentDay {
    display: flex;
    background: #d3e2ff !important;
  }

  .hideTime {
    display: none !important;
  }

  .react-datepicker {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    border: none;
    font-family: 'Montserrat', sans-serif;
    ${media.lessThan('xs')`
       padding: 0;  
     `}
    .react-datepicker__header {
      background: #fff;
      border: none;

      .react-datepicker__day-names {
        display: flex;
        justify-content: space-between;
        margin: 0 0.4rem;

        .react-datepicker__day-name {
          width: 45px;
          font-size: 12px;
          line-height: 14px;
          color: #131415;
          ${media.lessThan('xs')`
            width: 100%; 
         `}
        }
      }
    }

    .react-datepicker__month-container {
      width: 100%;

      .react-datepicker__month {
        ${media.lessThan('xxs')`
          margin: 0;
       `}
      }

      .react-datepicker__week {
        display: flex;
        justify-content: space-between;

        .react-datepicker__day {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-sizing: border-box;
          span {
            font-size: 15px;
            line-height: 18px;
            color: #516ff6;
            ${media.lessThan('xs')`
               font-size: 12px;
               line-height: 100%;  
           `}
          }
          ${media.lessThan('xs')`
            width: 35px;
            height: 35px;  
            margin: 5px;
         `}

          ${media.lessThan('xxs')`
            width: 30px;
            height: 30px;  
            margin: 5px;
         `}
        }

        .react-datepicker__day--weekend {
          border: 1px dashed ${({theme}) => theme.colors.primary};
          box-sizing: border-box;
          span {
            border: none;
            font-size: 15px;
            line-height: 18px;
            color: #697077;
            ${media.lessThan('xs')`
               font-size: 12px;
               line-height: 100%;  
           `}
          }
        }

        .react-datepicker__day--keyboard-selected {
          background: inherit;
        }

        .react-datepicker__day--selected {
          border: none;
          span {
            color: #fff;
            background: #516ff6;
          }
        }

        .react-datepicker__day--disabled {
          border: none;
          background: transparent !important;
          span {
            border: none;
            color: #bcbcbc;
            background: transparent;
          }
          &.react-datepicker__day--weekend {
            border: none;
          }
        }

        .react-datepicker__day--outside-month {
          visibility: hidden;
        }
      }
    }

    .react-datepicker-time__caption {
      display: none;
    }
  }
`;

export const ReactDatePickerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  padding: 30px 15px 45px 15px;
  background: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  box-sizing: border-box;
  position: relative;
  ${media.greaterThan('sm')`
      grid-template-columns: 45fr 55fr;
      grid-column-gap: 22px;
      padding: 30px 25px 45px 25px; 
  `}
  ${media.lessThan('xs')`
      padding: 10px; 
  `}
`;

export const DatePickerHeaderWrapper = styled.div`
  margin: 25px 20px;
  display: flex;
  justify-content: space-between;
  ${media.lessThan('xs')`
      margin: 20px; 
  `}
`;

export const Label = styled.div`
  font-family: 'Gilroy-Semibold', sans-serif;
  text-align: left;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.common.black};
  margin: 0 20px;
`;

export const HeaderDateTitleDate = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #697077;
  text-transform: capitalize;
`;

export const HeaderDateTitle = styled.div<{$isDate: boolean}>`
  position: ${({$isDate}) => ($isDate ? 'relative' : 'absolute')};
  display: flex;
  top: ${({$isDate}) => ($isDate ? '0' : '180px')};
  left: ${({$isDate}) => ($isDate ? '0' : '50%')};
  transform: ${({$isDate}) =>
    $isDate ? 'translate(0, 0)' : 'translate(-50%, -50%)'};
  margin-top: 26px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${({theme}) => theme.colors.common.greyDark};
  text-transform: ${({$isDate}) => ($isDate ? 'capitalize' : '')};
  ${media.lessThan('sm')`
      margin-top: 0;
      color: ${({theme}) => theme.colors.common.greyLight};
      font-size: 14px;
      line-height: 100%;
   `}
`;

export const ArrowsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & > *:last-child {
    margin-left: 44px;
  }
`;

export const ArrowButton = styled.button<{
  $isLeft?: boolean;
  disabled: boolean;
}>`
  background-color: #fff;
  border: none;
  transform: rotateY(${({$isLeft}) => ($isLeft ? '180deg' : 0)});
  cursor: pointer;
`;

export const ArrowSvg = styled(Arrow)<{color?: TColors}>`
  height: 14px;
  width: 7px;
  & path {
    stroke: ${({theme, color}) =>
      color ? theme.colors.common[color] : theme.colors.primary};
  }
`;

export const stylesSelectedDay = css`
  background: ${({theme}) => theme.colors.common.blueberryLight};
`;

const getStyleBorder = ({
  theme,
  $isAppointment,
  $isAppointmentTeacher,
}: StyledProps<{
  $isAppointment?: boolean;
  $isAppointmentTeacher?: boolean;
}>) => {
  if ($isAppointment || !$isAppointmentTeacher) {
    return 'none';
  }
  return `1px solid ${theme.colors.primary} !important`;
};

export const UIDay = styled.span<{
  $isAppointment?: boolean;
  $isAppointmentTeacher?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: ${getStyleBorder};
  ${({$isAppointment}) => $isAppointment && stylesSelectedDay};
`;

export const UITimeWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 30px;
  max-height: 250px;
  overflow-y: auto;
  padding-right: 15px;
  ${media.lessThan('sm')`
      padding-right: 0; 
      max-height: max-content;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 15px;
      grid-row-gap: 10px;  
      margin-top: 0;   
  `}
`;

export const stylesSelectedTime = css`
  background: ${({theme}) => theme.colors.primary} !important;
  color: ${({theme}) => theme.colors.common.white} !important;
`;

interface ITimeItem {
  $isAppointmentTime: boolean;
  $isSelectedTime: boolean | null;
  $isDisabled: boolean;
}

const getColor = ({
  theme,
  $isDisabled,
  $isAppointmentTime,
}: StyledProps<ITimeItem>) => {
  if ($isAppointmentTime && $isDisabled) {
    return theme.colors.common.white;
  }
  if ($isDisabled) {
    return theme.colors.common.blueberryLight;
  }
  if ($isAppointmentTime) {
    return theme.colors.primary;
  }
  return theme.colors.common.black;
};

const getBorder = ({
  theme,
  $isDisabled,
  $isAppointmentTime,
}: StyledProps<ITimeItem>) => {
  if ($isDisabled) {
    return `1px solid ${theme.colors.common.blueberryLight}`;
  }
  if ($isAppointmentTime) {
    return 'none';
  }
  return `1px solid ${theme.colors.primary}`;
};

export const TimeItem = styled.div<ITimeItem>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 0 0 0;
  width: 70px;
  height: 35px;
  border: ${getBorder};
  border-radius: 5px;
  background: ${({$isAppointmentTime, theme}) =>
    $isAppointmentTime
      ? theme.colors.common.blueberryLight
      : theme.colors.common.white};
  ${({$isSelectedTime}) => $isSelectedTime && stylesSelectedTime}
  font-size: 14px;
  line-height: 16px;
  color: ${getColor};
  cursor: ${({$isDisabled}) => ($isDisabled ? 'auto' : 'pointer')};
  font-weight: 600;
  ${media.lessThan('sm')`
       width: 100%;  
   `}
`;

export const NotSelectedDateTitle = styled.div``;

export const WrapperCustomInput = styled.div`
  background: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: space-between;
  min-height: 100%;
  padding-top: 28px;
  position: relative;
  width: 100%;
  ${media.lessThan('sm')`
      padding: 15px 10px 10px 10px;  
      height: 100%;
      min-height: max-content;
      z-index: 12;
   `}
`;

export const InnerButtons = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 39px;
  grid-column-gap: 10px;
  ${media.lessThan('sm')`
     margin-top: 10px; 
  `}
`;

export const WrapperModal = styled.div`
  background: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  height: max-content;
  max-height: 225px;
  padding: 20px;
  position: absolute;
  right: 0;
  top: -140px;
  width: 300px;
  z-index: 16;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 11px;
  height: 11px;
  border: none;
  &::before,
  &::after {
    top: 50%;
    content: '';
    position: absolute;
    left: 5px;
    height: 11px;
    width: 1px;
    background-color: ${({theme}) => theme.colors.common.black};
  }
  &:before {
    transform: translateY(-50%) rotate(45deg);
  }
  &:after {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

export const LinkModal = styled(Text)`
  text-decoration: underline;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

export const InnerHeaderMobile = styled.div`
  display: grid;
  grid-template-columns: 16px 1fr 16px;
  align-items: center;
  & > *:nth-child(2) {
    margin: 0 auto;
  }
`;

export const BackMobileBtn = styled.button`
  border: none;
  background: transparent;
  width: max-content;
`;

export const InnerMessage = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerAppointments = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InnerSuccessModal = styled.div`
  align-items: center;
  background: ${({theme}) => theme.colors.common.white};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 20px 25px;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 9;
`;

export const InnerLinkModal = styled.div`
  align-items: center;
  bottom: 20px;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  width: 100%;
`;

export const DisabledInner = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.2;
  border-radius: 5px;
  background: ${({theme}) => theme.colors.common.blueberryMiddle};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 15;
`;

export const WrapperCancelAppointmentModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
  background: rgba(19, 20, 21, 0.15);
  top: 0;
  left: 0;
`;

export const InnerCancelAppointmentModal = styled.div`
  background: ${({theme}) => theme.colors.common.white};
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(88, 88, 88, 0.1);
  box-sizing: border-box;
  left: 50%;
  opacity: 1;
  padding: 20px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 370px;
  z-index: 21;
  ${media.lessThan('xxs')`
       width: 100%;  
   `}
`;

export const InnerButtonsCancelModal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;
