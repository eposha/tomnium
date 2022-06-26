import styled from 'styled-components';
import {media} from 'styles/media';

const colorVariant = {
  primary: '#D3E2FF',
  secondary: '#fff',
  warning: '#fff',
};

export const NoticeWrapper = styled.div<{
  variant: 'primary' | 'secondary' | 'warning';
}>`
  display: flex;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  background-color: ${({variant}) => colorVariant[variant]};
  width: calc(100% + 20px);
  margin-left: -10px;

  ${({variant}) =>
    variant === 'secondary' &&
    'border-top: 1px solid #516FF6; border-bottom: 1px solid #516FF6'};

  ${media.greaterThan('xs')`
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    margin-left: 0;
    ${
      //@ts-ignore
      ({variant}) => variant === 'secondary' && 'border: 1px solid #516FF6'
    };
  `};
`;

export const IconWrapper = styled.div`
  margin-right: 20px;
`;

export const Text = styled.div``;
