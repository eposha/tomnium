import {CourseSidebar} from '@/components/courses';

import Link from 'next/link';
import {useHomeworkTestMainLink} from 'src/hooks/homeworks/test/useHomeworkTestMainLink';
import {Media} from 'src/media-styles';
import {Wrapper} from 'styles/courses/course-page';
import * as UI from 'styles/homeworks/common';

const HomeworkResults = () => {
  const {mainLink} = useHomeworkTestMainLink();

  return (
    <Wrapper>
      <Media greaterThan={'xs'}>
        <CourseSidebar />
      </Media>
      <div>
        <UI.HomeworkTitle>Результат теста</UI.HomeworkTitle>
        <UI.Wrapper>
          <UI.ResultsContainer>
            <UI.ResultTitle>Вы прошли тест!</UI.ResultTitle>
            <UI.ResultText>
              Браво! Блестящий результат! Узнайте подробнее результаты
            </UI.ResultText>
            <UI.FlexContainer>
              <Link href={`${mainLink}/test/answers`}>
                <a>
                  <UI.TestButton>Результат</UI.TestButton>
                </a>
              </Link>
            </UI.FlexContainer>
          </UI.ResultsContainer>
        </UI.Wrapper>
      </div>
    </Wrapper>
  );
};

export default HomeworkResults;
