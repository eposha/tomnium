import {StringSurvey, SurveyItem} from 'styles/survey/index';
import {Controller} from 'react-hook-form';
import {FC} from 'react';
import {Maybe} from 'src/graphql.schema';
interface IString {
  surveyId: Maybe<number>;
  control: any;
}

export const String: FC<IString> = ({surveyId, control}) => {
  return (
    <SurveyItem>
      <Controller
        control={control}
        name={`${surveyId}`}
        rules={{required: true}}
        render={({field: {onChange}}) => (
          <StringSurvey
            type={'text'}
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

export default String;
