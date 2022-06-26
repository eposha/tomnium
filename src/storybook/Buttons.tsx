import {useState} from 'react';

import {Button} from 'styles/common';

import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 8px;
  border: 1px dashed #7b61ff;
`;

const PropsWrapper = styled.div`
  display: flex;
`;

const Prop = styled.div<{$isActive?: boolean}>`
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  color: ${({$isActive}) => ($isActive ? 'blue' : '#000')};
  cursor: pointer;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * {
    margin-right: 12px;
    margin-bottom: 6px;
  }
`;

type ButtonTypes = '$isDisabled' | '$dashed' | '$solid' | '$fullWidth';
type AdditionalTypes = 'width' | 'height';

interface IButton {
  $isDisabled?: boolean;
  $dashed?: boolean;
  $solid?: boolean;
  $fullWidth?: boolean;
}

const Buttons = () => {
  const [buttonProps, setButtonProps] = useState<IButton>({});

  const toggleProps = (propName: ButtonTypes) =>
    setButtonProps((props) => {
      const copyObject = Object.assign({}, props);
      if (copyObject[propName]) {
        delete copyObject[propName];
        return copyObject;
      }
      copyObject[propName] = true;
      return copyObject;
    });

  return (
    <Wrapper>
      <h2>Buttons</h2>
      <PropsWrapper>
        {buttonsProps.map((propName) => (
          <Prop
            key={propName}
            $isActive={buttonProps[propName]}
            onClick={() => toggleProps(propName)}>
            {propName}
          </Prop>
        ))}
        {additionalProps.map((propName) => (
          <Prop key={propName}>{propName}</Prop>
        ))}
      </PropsWrapper>
      <ComponentWrapper>
        <Button {...buttonProps}>Button</Button>
        <Button $isDisabled>$isDisabled</Button>
        <Button $isDisabled $dashed>
          $isDisabled $dashed
        </Button>
        <Button $solid>$solid</Button>
        <Button $fullWidth>$fullWidth</Button>
      </ComponentWrapper>
    </Wrapper>
  );
};

const buttonsProps: ButtonTypes[] = [
  '$isDisabled',
  '$dashed',
  '$solid',
  '$fullWidth',
];
const additionalProps: AdditionalTypes[] = ['width', 'height'];

export default Buttons;
