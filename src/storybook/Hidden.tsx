import {useState} from 'react';

import {Hidden as UIHidden} from 'styles/common';

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
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  color: ${({$isActive}) => ($isActive ? 'blue' : '#000')};
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
  width: 100%;
  border: 2px solid blue;
  border-radius: 8px;
`;

type PropsName = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '$hide';

const Hidden = () => {
  const [propsGreater, setPropsGreater] = useState<PropsName | null>(null);
  const [propsLess, setPropsLess] = useState<PropsName | null>(null);

  const togglePropsGreater = (propName: PropsName) => {
    setPropsLess(null);
    setPropsGreater((prevState) => (prevState === propName ? null : propName));
  };

  const togglePropsLess = (propName: PropsName) => {
    setPropsGreater(null);
    setPropsLess((prevState) => (prevState === propName ? null : propName));
  };

  const findSize = (propSize: string | null) => {
    const findSize = HiddenProps.find((size) => size === propSize);

    return findSize === '$hide' ? null : findSize;
  };

  return (
    <Wrapper>
      <h2>Hidden</h2>
      <PropsWrapper>
        hideUp:{' '}
        {HiddenProps.map((propName) => (
          <Prop
            key={propName}
            $isActive={propsGreater === propName}
            onClick={() => togglePropsGreater(propName)}>
            {propName}
          </Prop>
        ))}
      </PropsWrapper>
      <PropsWrapper>
        hideDown:{' '}
        {HiddenProps.map((propName) => (
          <Prop
            key={propName}
            $isActive={propsLess === propName}
            onClick={() => togglePropsLess(propName)}>
            {propName}
          </Prop>
        ))}
      </PropsWrapper>

      <UIHidden
        hideUp={findSize(propsGreater)}
        hideDown={findSize(propsLess)}
        $hide={propsGreater === '$hide'}>
        <Content>{`Component name: <Hidden />. Show children only for Mobile or Desktop`}</Content>
      </UIHidden>
    </Wrapper>
  );
};

const HiddenProps: PropsName[] = ['$hide', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

export default Hidden;
