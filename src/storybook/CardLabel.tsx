import {useState} from 'react';
import styled from 'styled-components';
import {CardLabel as UICardLabel} from 'styles/common';

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

type CardTypes = '$isPromo';

interface ICard {
  $isPromo?: boolean;
}

const CardLabel = () => {
  const [props, setProps] = useState<ICard>({});

  const toggleProps = (propName: CardTypes) =>
    setProps((props) => {
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
      <h2>{`<CardLabel />`}</h2>
      <PropsWrapper>
        {CardProps.map((propName) => (
          <Prop
            key={propName}
            $isActive={props[propName]}
            onClick={() => toggleProps(propName)}>
            {propName}
          </Prop>
        ))}
      </PropsWrapper>
      <ComponentWrapper>
        <UICardLabel {...props}>label</UICardLabel>
        <UICardLabel $isPromo>$isPromo</UICardLabel>
      </ComponentWrapper>
    </Wrapper>
  );
};

const CardProps: CardTypes[] = ['$isPromo'];

export default CardLabel;
