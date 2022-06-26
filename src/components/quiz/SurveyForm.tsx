import {useSendSurvey} from '@/graph-hooks/survey/sendSurvey';
import {FC, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {FaSurveyQuestion} from 'src/graphql.schema';
import {SurveysWrapper, SurveyQuiz} from 'styles/survey/index';
import {Button} from 'styles/common';
import SurveyCard from './SurveyCard';
import {useRouter} from 'next/router';

interface ISurveyForm {
  SurveyQuestions: FaSurveyQuestion[] | undefined;
  courseId: string;
}

const SurveyForm: FC<ISurveyForm> = ({courseId, SurveyQuestions}) => {
  const {register, handleSubmit, control} = useForm();

  const {sendSurvey} = useSendSurvey();

  const [isBtnDisabled, setDisabled] = useState(false);

  const {push} = useRouter();

  const onSubmit: SubmitHandler<any> = async (data) => {
    const keysData = Object.keys(data);

    setDisabled(true);

    keysData.forEach((elem) => {
      const correctData = data[elem]?.filter(
        (item: any) => item.optionId != false,
      );

      correctData?.forEach(async (dataItem: any) => {
        const record = dataItem;

        record.questionId = Number(elem);

        if (record.optionId) {
          record.optionId = Number(record.optionId);
        }
        if (Object.keys(record).includes('freeAnswer')) {
          record.freeAnswer = record.freeAnswer || '';
        }

        await sendSurvey({
          variables: {
            record: record,
          },
        });
      });
    });

    push(`/courses/${courseId}`);
  };

  return (
    <SurveysWrapper>
      {SurveyQuestions ? (
        <SurveyQuiz onSubmit={handleSubmit(onSubmit)}>
          {SurveyQuestions.map((survey: FaSurveyQuestion, index: number) => (
            <SurveyCard
              survey={survey}
              key={index}
              register={register}
              control={control}
            />
          ))}
          <Button $isDisabled={isBtnDisabled} disabled={isBtnDisabled}>
            Сохранить
          </Button>
        </SurveyQuiz>
      ) : (
        'Квиз недоступен'
      )}
    </SurveysWrapper>
  );
};

export default SurveyForm;
