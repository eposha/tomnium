import styled from 'styled-components';
import CheckedSVG from 'public/icons/CheckedSVG.svg';
import {media} from 'styles/media';

const CheckIcon = styled(CheckedSVG)`
  position: absolute;
  content: '';
  width: 70%;
  height: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  path {
    stroke: ${({theme}) => theme.colors.common.blueberryLight};
  }
`;

const Label = styled.label`
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;
`;

const CustomCheckbox = styled.span<{top?: number}>`
  position: absolute;
  width: 15px;
  height: 15px;
  top: ${({top}) => `${top}px` || 0};
  border-radius: 50%;
  background: ${({theme}) => theme.colors.common.blueberryLight};
  cursor: pointer;

  ${media.greaterThan('md')`
  width: 20px;
  height: 20px;
  `};
`;

const Checkbox = styled.input.attrs({type: 'checkbox'})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:checked + ${CustomCheckbox} {
    background-color: ${({theme}) => theme.colors.common.blueberry};
    path {
      stroke: ${({theme}) => theme.colors.common.white};
    }
  }
`;

const TextContainer = styled.div`
  position: 'relative';
  padding-left: 20px;

  ${media.greaterThan('md')`
    padding-left: 40px;
  `};
`;

const RoundCheckbox = ({children, top, disabled, checked, onClick}: any) => {
  return (
    <Label>
      <Checkbox checked={checked} disabled={disabled} onClick={onClick} />
      <CustomCheckbox top={top}>
        <CheckIcon />
      </CustomCheckbox>
      <TextContainer>{children}</TextContainer>
    </Label>
  );
};

export default RoundCheckbox;
