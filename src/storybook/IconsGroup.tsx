import styled from 'styled-components';
import {IconsGroup as UIIconsGroup} from 'src/components/common/logo';

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

type CardTypes = 'groupListSize' | 'iconsList';

const IconsGroup = () => {
  return (
    <Wrapper>
      <h2>{`<IconsGroup />`}</h2>
      <PropsWrapper>
        {CardProps.map((propName) => (
          <Prop key={propName}>{propName}</Prop>
        ))}
      </PropsWrapper>

      <UIIconsGroup
        groupListSize={{width: 40, height: 20}}
        iconsSizes={{width: 20, height: 20}}
        iconsList={[
          [{path: '/icons/test-icons/avatar.png'}],
          //@ts-ignore
          [{path: '/icons/test-icons/author1.png'}],
          //@ts-ignore
          [{path: '/icons/test-icons/author2.png'}],
        ]}
      />
    </Wrapper>
  );
};

const CardProps: CardTypes[] = ['groupListSize', 'iconsList'];

export default IconsGroup;
