import styled, {css, StyledProps} from 'styled-components';
import {SocialIconsWrapper} from 'styles/auth/header';
import {media} from 'styles/media';
import EyeIcon from 'public/icons/Eye.svg';
import EyeSlashIcon from 'public/icons/EyeSlashSolid.svg';

type TColor = 'primary' | 'secondary';

export const InnerAside = styled.aside<{type?: TColor}>`
  background-color: ${({theme, type}) =>
    type === 'secondary'
      ? theme.colors.common.white
      : theme.colors.common.whiteGrey};
  padding: 30px 20px 13px 20px;
  box-sizing: border-box;
  height: 100%;
`;

export const Link = styled.a`
  color: ${({theme}) => theme.colors.common.jordyBlue};
  cursor: pointer;
`;

export const SocialIconsInner = styled(SocialIconsWrapper)`
  margin: 0 auto 20px auto;
`;

const getBackGround = ({theme, color}: StyledProps<{color?: TColor}>) => {
  switch (color) {
    case 'primary':
      return theme.colors.common.white;
    case 'secondary':
      return theme.colors.common.whiteGrey;
    default:
      return theme.colors.common.white;
  }
};

export const AuthInput = styled.input<{$isError?: boolean; color?: TColor}>`
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus textarea:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${getBackGround} inset;
  }
  padding: 13px 10px;
  background-color: ${getBackGround};
  width: 100%;
  outline: none;
  border-radius: 5px;
  box-sizing: border-box;
  border: ${({$isError, theme}) =>
    $isError
      ? `1px solid ${theme.colors.common.red}`
      : `1px solid ${theme.colors.common.white}`};
  box-shadow: ${({$isError, theme}) =>
    $isError ? `0 0 ${theme.colors.common.red} 3px` : 'none'};
  cursor: pointer;

  :focus {
    border: 1px solid
      ${({theme, $isError}) =>
        $isError ? theme.colors.common.red : theme.colors.primary};
    box-shadow: 0 0 3px 0
      ${({theme, $isError}) =>
        $isError
          ? theme.colors.common.red
          : theme.colors.common.blueberryMiddle};
  }

  ::placeholder {
    color: ${({theme}) => theme.colors.common.greyLight};
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }
`;

export const PswdInput = styled(AuthInput)`
  padding-right: 18px;
`;

export const InnerButtons = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const InnerAuthInput = styled.div`
  position: relative;
`;

export const ShowPswdButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
`;

const styleEyeSvg = css`
  width: 15px;
  height: 15px;
  path {
    fill: ${({theme}) => theme.colors.common.jordyBlue};
  }
`;

export const EyeSvg = styled(EyeIcon)`
  ${styleEyeSvg};
`;

export const EyeSlashSvg = styled(EyeSlashIcon)`
  ${styleEyeSvg};
`;

export const InnerLabelUser = styled.div`
  margin-top: 20px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

export const InnerBlockCreateOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const InnerPhoneInput = styled.div<{
  $isError?: boolean;
  $isRegister?: boolean;
}>`
  border: 1px solid
    ${({theme, $isError, $isRegister}) =>
      $isError
        ? theme.colors.common.red
        : $isRegister
        ? '#f4f6fa'
        : theme.colors.common.blueberryLight};

  ${({$isError, $isRegister}) =>
    $isError && $isRegister && '  box-shadow: 0px 0px 3px #e25241'};

  box-sizing: border-box;
  border-radius: 10px;
  .phone-field-container {
    background: ${({theme}) => theme.colors.common.white};

    .phone-field-dropdown-button {
      background: ${({theme}) => theme.colors.common.white};
      .country-list {
        width: auto;
        max-height: 200px;
      }
    }
    .phone-field-input {
      background: ${({$isRegister}) =>
        $isRegister ? '#f4f6fa' : 'transparent'};
      ${media.greaterThan('xs')`      
      background: ${({
        //@ts-ignore
        $isRegister,
        theme,
      }) => ($isRegister ? '#f4f6fa' : theme.colors.common.white)};          
    `}
      color: ${({theme}) => theme.colors.common.black};
    }
  }
`;

export const UpdateUserForm = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
`;
