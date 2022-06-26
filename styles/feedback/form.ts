import styled from 'styled-components';
import {Input as CommonInput} from 'styles/auth/common';
import {media} from 'styles/media';

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: ${({theme}) => `1px solid ${theme.colors.common.jordyBlue}`};
  border-radius: 5px;

  ${media.greaterThan('xs')`
    flex-direction: unset;
    padding: 40px;
    border-width: 2px;
    max-width: 780px;
  `}
`;

export const ContentText = styled.div`
  ${media.greaterThan('xs')`
    margin-right: 40px;
  `}
`;

export const Form = styled.form`
  max-width: 335px;
  flex: none;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }

  .PhoneInput {
    background: ${({theme}) => theme.colors.common.whiteGrey};
    border-radius: 5px;
    padding-left: 10px;
  }
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  margin: 0 0 10px;

  ${media.greaterThan('xs')`
    font-size: 28px;
  `}
`;

export const Description = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
`;

export const ButtonsContainer = styled.div`
  padding-top: 5px;
  ${media.greaterThan('xs')`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `}
`;

export const Input = styled(CommonInput)`
  background: ${({theme}) => theme.colors.common.whiteGrey};
  color: ${({theme}) => theme.colors.common.greyDark};
  font-size: 12px;
  border-radius: 5px;
  &::placeholder {
    font-size: 12px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const ErrorText = styled.p<{left?: number}>`
  position: absolute;
  top: -10px;
  left: ${({left}) => (left ? `${left}px` : '7px')};
  font-size: 10px;
  color: ${({theme}) => theme.colors.common.red};
  background-color: ${({theme}) => theme.colors.common.whiteGrey};
  border-radius: 20px;
  padding: 3px 5px;
  margin: 0;
`;

export const Link = styled.a`
  font-size: 8px;
  font-weight: 600;
  color: ${({theme}) => theme.colors.primary};
  cursor: pointer;
`;
