import {
  Buttons,
  Card,
  Text,
  Widgets,
  Hidden,
  CardLabel,
  IconsGroup,
  Accordion,
} from 'src/storybook';

import styled from 'styled-components';

const WrapperUIComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Title = styled.h1``;

const CommonStyles = () => {
  return (
    <>
      <Title>Styles Components</Title>
      <WrapperUIComponent>
        <Buttons />
        <Widgets />
        <Text />
        <Card />
        <Hidden />
        <CardLabel />
        <IconsGroup />
        <Accordion />
      </WrapperUIComponent>
    </>
  );
};

export default CommonStyles;
