import {FC} from 'react';
import styled from 'styled-components';
import CheckedSVG from 'public/icons/CheckedSVG.svg';
import {media} from 'styles/media';

const CheckIcon = styled(CheckedSVG)<{isNote?: string}>`
  position: absolute;
  content: '';
  width: ${({isNote}) => (isNote ? '80%' : '70%')};
  height: ${({isNote}) => (isNote ? '80%' : '70%')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Label = styled.label<{isNote?: boolean}>`
  position: relative;
  margin-bottom: ${({isNote}) => (isNote ? '0' : '30px')};
  display: flex;
`;

const CustomCheckbox = styled.span<{top?: number}>`
  position: absolute;
  width: 15px;
  height: 15px;
  top: ${({top}) => `${top}px` || 0};
  border: 1.5px solid ${({theme}) => theme.colors.common.blueberryLight};
  border-radius: 3px;
  cursor: pointer;

  ${media.greaterThan('md')`
    width: 20px;
    height: 20px;
  `};
`;

const TextContainer = styled.div<{isNote?: boolean}>`
  position: 'relative';
  padding-left: 20px;
  width: 100%;
  ${({isNote}) =>
    isNote &&
    `
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #697077;
  `}

  ${media.greaterThan('md')`
    padding-left: 30px;
    font-size: 14px;
    line-height: 19px;
  `};
`;

const Checkbox = styled.input.attrs({type: 'checkbox'})`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);

  &:checked + ${CustomCheckbox} {
    border: 1.5px solid ${({theme}) => theme.colors.common.blueberry};
    background-color: ${({theme}) => theme.colors.common.blueberry};
  }

  &:checked ~ ${TextContainer} {
    color: #131415;
  }
`;

interface ISqareCheckboxProps {
  top?: number;
  name?: string;
  register?: any;
  rules?: any;
  value?: string | number;
  isNote?: boolean;
  onFocus?: () => void;
}

const SquareCheckbox: FC<ISqareCheckboxProps> = ({
  children,
  top,
  register,
  name,
  rules,
  value,
  isNote,
  onFocus,
}) => {
  return (
    <Label isNote>
      <Checkbox
        name={name}
        value={value}
        {...(register && register(name, rules))}
        onFocus={onFocus}
      />
      <CustomCheckbox top={top}>
        <CheckIcon isNote={isNote && isNote.toString()} />
      </CustomCheckbox>
      <TextContainer isNote={isNote}>{children}</TextContainer>
    </Label>
  );
};

export default SquareCheckbox;
