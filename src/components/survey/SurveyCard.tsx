import * as UI from 'styles/homeworks/homework-card';
import Link from 'next/link';
import {FC} from 'react';
import {FaSurvey} from 'src/graphql.schema';

interface ISurveyCard {
  ownThreadId: string | undefined;
  courseId: string | undefined;
  survey: FaSurvey;
  surveyOptions: any;
}

const SurveyCard: FC<ISurveyCard> = ({
  ownThreadId,
  courseId,
  survey,
  surveyOptions,
}) => {
  const {surveyQuestionResults} = surveyOptions || {};

  const {id, title} = survey;

  const isSurveyDone =
    (surveyQuestionResults || []).filter(
      (elem: any) => !!elem.optionId || elem.optionId === null,
    ).length > 0;

  const borderColor = isSurveyDone ? 'blueberryLight' : 'blueberry';
  const borderStyle = isSurveyDone ? 'solid' : 'dashed';
  const backgroundColor = isSurveyDone ? 'white' : 'blueberryLight';
  const buttonBackground = 'white';

  const arrowColor = 'blueberry';

  const textColor = 'black';

  const statusColor = 'blueberry';

  return (
    <Link
      href={
        !isSurveyDone
          ? `/courses/${courseId}/threads/${ownThreadId}/quiz/${id}`
          : '#'
      }
      passHref>
      <UI.HomeworkBlock
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        borderStyle={borderStyle}
        onClick={(e) => {
          if (isSurveyDone) e.preventDefault();
        }}>
        {isSurveyDone ? <UI.StatusCheckedIconSVG /> : <UI.StatusIconSVG />}
        <UI.HomeworkText color={textColor}>{title}</UI.HomeworkText>
        <UI.HomeworkStatus color={statusColor}>
          {isSurveyDone ? 'Пройден' : 'Не пройден'}
        </UI.HomeworkStatus>
        <UI.HomeworkButton buttonBackground={buttonBackground}>
          <UI.ArrowIconSVG color={arrowColor} />
        </UI.HomeworkButton>
      </UI.HomeworkBlock>
    </Link>
  );
};

export default SurveyCard;
