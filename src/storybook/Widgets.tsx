import {useState} from 'react';
import {Widget} from 'styles/common';

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

  > * {
    margin-right: 12px;
  }
`;

type PropsName =
  | '$content'
  | '$solid'
  | '$status'
  | '$statusPrimary'
  | '$statusSecondary'
  | '$secondary';

type IProps = {
  [key in PropsName]?: boolean;
};

const Widgets = () => {
  const [props, setProps] = useState<IProps>({});

  const toggleProps = (propName: PropsName) =>
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
      <h2>Labels</h2>
      <PropsWrapper>
        {WidgetProps.map((propName) => (
          <Prop
            key={propName}
            $isActive={props[propName]}
            onClick={() => toggleProps(propName)}>
            {propName}
          </Prop>
        ))}
        <Prop>background height width</Prop>
      </PropsWrapper>
      <ComponentWrapper>
        <Widget {...props}>Widget</Widget>
        <Widget $content>$content</Widget>
        <Widget $solid>$solid</Widget>
        <Widget $status>$status</Widget>
        <Widget $status $solid>
          $status $solid
        </Widget>
        <Widget $statusSecondary>$statusSecondary</Widget>
        <Widget $statusPrimary>$statusPrimary</Widget>
      </ComponentWrapper>
    </Wrapper>
  );
};

const WidgetProps: PropsName[] = [
  '$secondary',
  '$content',
  '$solid',
  '$status',
  '$statusPrimary',
  '$statusSecondary',
];

export default Widgets;
