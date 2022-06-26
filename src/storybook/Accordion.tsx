import styled from 'styled-components';
import {AccordionItem} from 'src/components/common/AccordionItem';

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 8px;
  border: 1px dashed #7b61ff;
`;

const PropsWrapper = styled.div`
  display: flex;
`;

const ComponentWrapper = styled.div`
  padding: 10px 0;
`;

const testAccordion = [
  {
    title: 'Как я могу купить консультацию?',
    content:
      'Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения! Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения! ',
  },
  {
    title: 'Как активировать консультацию?',
    content:
      'Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения!',
  },
  {
    title: 'Как проходит консультация?',
    content:
      'Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения! Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы.',
  },
];

const Accordion = () => (
  <Wrapper>
    <h2>{`<AccordionItem />`}</h2>
    <PropsWrapper>{`item: {title, content}`}</PropsWrapper>
    <ComponentWrapper>
      {testAccordion.map((item, index) => (
        <AccordionItem item={item} key={`${item.title}_${index}`} />
      ))}
    </ComponentWrapper>
  </Wrapper>
);

export default Accordion;
