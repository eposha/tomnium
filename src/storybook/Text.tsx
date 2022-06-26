import {useState} from 'react';

import {Text} from 'styles/common';

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
  font-size: 16px;
  color: ${({$isActive}) => ($isActive ? 'blue' : '#000')};
  cursor: pointer;
`;

type PropsName = '$title' | '$description';

type IProps = {
  [key in PropsName]?: boolean;
};

const TextUI = () => {
  const [props, setProps] = useState<IProps>({});
  const [lineClamp, setLineClamp] = useState(0);

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
      <h2>Text</h2>
      <PropsWrapper>
        {TextProps.map((propName) => (
          <Prop
            key={propName}
            $isActive={props[propName]}
            onClick={() => toggleProps(propName)}>
            {propName}
          </Prop>
        ))}
        <Prop>margin type string</Prop>
        <Prop>fontSize type string</Prop>
        <Prop>fontWeight type string</Prop>
        <Prop>fontSize type string</Prop>

        <label
          style={{
            position: 'relative',
            bottom: '20px',
          }}>
          lineClamp
          <input
            style={{
              display: 'block',
              marginBottom: 12,
            }}
            type='number'
            value={lineClamp}
            onChange={({target: {value}}) => setLineClamp(+value)}
          />
        </label>
      </PropsWrapper>

      <Text {...props} lineClamp={lineClamp}>
        Работодателю в день приходят сотни писем. Обязательно указывайте, по
        какому вопросу вы пишете. Например: Претендент на вакансию
        “Копирайтер”.Например: Претендент на вакансию “Копирайтер”.
      </Text>
    </Wrapper>
  );
};

const TextProps: PropsName[] = ['$title', '$description'];

export default TextUI;
