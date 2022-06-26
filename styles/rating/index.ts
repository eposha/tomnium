import styled from 'styled-components';
import Star from 'public/icons/RatingStar.svg';

export const RatingWrapper = styled.form`
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button.attrs(({value}) => ({
  type: 'submit',
  value,
}))``;

export const RatingItem = styled(SubmitButton)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 1.5em;
  height: 1.5em;
`;

export const RatingStar = styled(Star)<{color: string}>`
  width: 1em;
  height: 1em;

  path {
    fill: ${({theme, color}) => theme.colors.common[color]};
  }
`;
