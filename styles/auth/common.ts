import {Button} from 'styles/common';
import {media} from '../media';
import styled, {css} from 'styled-components';
import {TColors} from '../_variables';
import OpenEye from 'public/icons/Eye.svg';
import CloseEye from 'public/icons/EyeSlashSolid.svg';

const InputImage = css`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  cursor: pointer;
`;

export const NotificationPageTitle = styled.h1`
  color: #131415;
  font-family: 'Gilroy-Medium', sans-serif;
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  margin: 0 0 20px;
  padding-left: 15px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;

  ${media.greaterThan('xs')`
    background: transparent;
`};
`;

export const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
  box-sizing: border-box;
  background: #fff;

  ${media.greaterThan('xs')`
    border-radius: 16px; 
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    margin: auto;
    padding: 24px;
    position: relative;
    width: 418px;    
`};
`;

export const CloseForm = styled.button<{$routePath?: boolean}>`
  ${({$routePath}) => ($routePath ? 'left: 12px;' : 'right: 12px;')}
  align-items: center;
  background-color: #d3e2ff;
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  position: absolute;
  top: 25px;
  width: 32px;

  ${media.greaterThan('xs')`
    top: 17px;
    right: 17px;
`};
`;

export const SocialIconsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  width: 181px;
`;

export const SocialIcon = styled.button`
  align-items: center;
  border-radius: 50%;
  border: 1px solid #d3e2ff;
  display: flex;
  height: 45px;
  justify-content: center;
  width: 45px;
`;

export const TextWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const Text = styled.div`
  font-size: 20px;
  line-height: 24px;
`;

export const DisabledText = styled.div`
  text-align: center;
  color: #697077;
`;

export const TextLink = styled.div`
  cursor: pointer;
  display: flex;
  font-size: 12px;
  line-height: 16px;
  margin-top: 6px;
`;

export const RouterLink = styled.a`
  color: #516ff6;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  min-height: 100%;
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 21px;
`;

export const Input = styled.input<{$isError?: boolean}>`
  background: #f4f6fa;
  border-radius: 10px;
  border: 1px solid ${({$isError}) => ($isError ? '#E25241' : '#f4f6fa')};
  box-shadow: ${({$isError}) => ($isError ? '0px 0px  3px #E25241' : 'none')};
  cursor: pointer;
  outline: none;
  padding: 14px 12px;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  position: relative;

  ${media.greaterThan('xs')`
    font-size: 14px;
  `};

  :focus {
    border: 1px solid
      ${({theme, $isError}) => ($isError ? theme.colors.common.red : '#516ff6')};
    box-shadow: 0 0 3px 0 #1e6bff;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: 14px;
    color: #bcbcbc;
  }
  :-ms-input-placeholder {
    color: #bcbcbc;
    font-size: 14px;
  }
`;

export const OpenEyeSVG = styled(OpenEye)`
  ${InputImage}
`;

export const CloseEyeSVG = styled(CloseEye)`
  ${InputImage}
`;

export const ErrorInfo = styled.span<{
  top?: string;
  left?: string;
  $transform?: boolean;
}>`
  position: absolute;
  top: ${({top}) => top ?? '100%'};
  left: ${({left}) => left ?? '0'};
  ${({$transform}) => $transform && 'transform: translate(-50%, 0);'}
  font-size: 12px;
  line-height: 15px;
  color: #e25241;
  white-space: nowrap;
`;

export const SubmitWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ResetPasswordLink = styled.button<{
  color?: TColors;
  fontSize?: string;
}>`
  font-weight: bold;
  font-size: ${({fontSize}) => fontSize || '14px'};
  line-height: 17px;
  color: ${({theme, color}) =>
    color ? theme.colors.common[color] : theme.colors.primary};
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)<{
  $fullWidth?: boolean;
  $isDisabledGrey?: boolean;
  fontSize?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: ${({fontSize}) => (fontSize ? fontSize : '20px')};
  line-height: 120%;

  ${({$fullWidth}) => $fullWidth && 'width: 100%'};
  ${({$isDisabledGrey}) =>
    $isDisabledGrey && 'background: #BCBCBC; border: 1px solid #BCBCBC'};
`;

export const ArrowIconWrapper = styled.div`
  margin-left: 0;
`;

export const Dined = styled.span`
  display: inline-block;
  width: 24px;
`;
