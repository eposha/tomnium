import {FC} from 'react';
import {FaSurveyQuestion} from 'src/graphql.schema';
import * as UI from 'styles/survey/index';
import Survey from './Survey';

interface ISurveyCard {
  survey: FaSurveyQuestion;
  control: any;
  register?: any;
}

const SurveyCard: FC<ISurveyCard> = ({survey, control, register}) => {
  const {title, description, id, type, SurveyOptions} = survey;
  return (
    <UI.SurveyCard>
      <UI.SurveyTitle>{title}</UI.SurveyTitle>
      <UI.SurveyDescription>{description}</UI.SurveyDescription>
      <Survey
        type={type}
        SurveyOptions={SurveyOptions}
        surveyId={id}
        control={control}
        register={register}
      />
    </UI.SurveyCard>
  );
};

export default SurveyCard;
