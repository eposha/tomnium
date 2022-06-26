import {useState, FC} from 'react';
import {Text} from 'styles/common';
import * as UI from 'styles/accordionItem';
import {TColors} from 'styles/_variables';

export const testAccordion = [
  {
    title: 'Как я могу купить консультацию?',
    body: 'Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения! Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения! ',
  },
  {
    title: 'Как активировать консультацию?',
    body: 'Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения!',
  },
  {
    title: 'Как проходит консультация?',
    body: 'Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы. Хорошо подготовленные презентации и много интересного материала для самостоятельного изучения! Грамотно составленный курс, животрепещущие вопросы, на которые обязательно нужно знать "правильные" ответы.',
  },
];

interface IAccordionItemProps {
  item: {
    id?: number;
    index?: number;
    title?: any;
    body?: any;
    content?: string;
  };
  size?: 'small' | 'middle' | 'large';
  background?: TColors;
  isSub?: boolean;
}

export const AccordionItem: FC<IAccordionItemProps> = ({
  item,
  size,
  background,
  isSub,
}) => {
  const {title, body, content} = item;
  const [isActive, setIsActive] = useState(false);
  const fontSize =
    size === 'middle' ? '14px' : size === 'small' ? '12px' : '16px';

  return (
    <UI.Wrapper background={background} isActive={isActive}>
      <UI.Header size={size} onClick={() => setIsActive((current) => !current)}>
        <Text $description color={'black'} fontSize={fontSize} isSub={isSub}>
          {title}
        </Text>
        <UI.ArrowContainer>
          <UI.StyledArrow
            $isActive={isActive}
            src='/icons/AccordionArrowSVG.svg'
            width={12}
            height={7}
          />
        </UI.ArrowContainer>
      </UI.Header>
      <UI.Content $isActive={isActive}>
        <UI.ContentInner>
          <UI.StyledText size={size} isSub={isSub}>
            {content ? content : body}
          </UI.StyledText>
        </UI.ContentInner>
      </UI.Content>
    </UI.Wrapper>
  );
};
