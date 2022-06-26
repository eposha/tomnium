import {useState} from 'react';

import {Card as UICard} from 'styles/common';

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

const CardWrapper = styled.div<{$isDesktop?: boolean; $fullWidth?: boolean}>`
  width: ${({$isDesktop}) => ($isDesktop ? '1000px' : '400px')};
  max-width: ${({$isDesktop}) => ($isDesktop ? '1000px' : '400px')};

  width: ${({$fullWidth}) => $fullWidth && `100%`};
  min-width: ${({$fullWidth}) => $fullWidth && '100%'};
`;

const Content = styled.div`
  width: 100%;
  height: 250px;
  border: 2px solid blue;
  border-radius: 8px;
`;

type PropsName = '$fullWidth';

const Card = () => {
  const [props, setProps] = useState<PropsName | null>(null);

  const toggleProps = () =>
    setProps((prevState) => (prevState ? null : '$fullWidth'));

  return (
    <Wrapper>
      <h2>Card container</h2>
      <PropsWrapper>
        {CardProps.map((propName) => (
          <Prop
            key={propName}
            $isActive={props === propName}
            onClick={toggleProps}>
            {propName}
          </Prop>
        ))}
      </PropsWrapper>
      <CardWrapper $fullWidth={!!props}>
        <UICard $fullWidth={!!props}>
          <Content>{`Component name: <Card />`}</Content>
        </UICard>
      </CardWrapper>
    </Wrapper>
  );
};

const CardProps: PropsName[] = ['$fullWidth'];

export default Card;
