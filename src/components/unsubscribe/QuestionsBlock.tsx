import {AccordionItem} from '@/components/common/AccordionItem';
import {QuestionsData} from '@/components/unsubscribe/questions';
import {QuestionsWrapper, SubTitle} from 'styles/unsubscribe/index';
const QuestionsBlock = () => {
  return (
    <QuestionsWrapper>
      <SubTitle>Часто задаваемые вопросы</SubTitle>
      {QuestionsData.map((elem) => (
        <AccordionItem
          key={elem.title}
          item={{title: elem.title, content: elem.text}}
          isSub
        />
      ))}
    </QuestionsWrapper>
  );
};

export default QuestionsBlock;
