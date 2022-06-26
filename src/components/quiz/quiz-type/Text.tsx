import {SurveyItem, TextSurvey} from 'styles/survey/index';
import {Controller} from 'react-hook-form';
import {FC} from 'react';
import {Maybe} from 'src/graphql.schema';

interface IText {
  surveyId: Maybe<number>;
  control: any;
}

export const Text: FC<IText> = ({control, surveyId}) => {
  return (
    <SurveyItem>
      <Controller
        control={control}
        name={`${surveyId}`}
        rules={{required: true}}
        render={({field: {onChange}}) => (
          <TextSurvey
            onChange={(e) => {
              onChange([
                {
                  questionId: Number(surveyId),
                  freeAnswer: e.target.value,
                },
              ]);
            }}
          />
        )}
      />
    </SurveyItem>
  );
};

export default Text;
