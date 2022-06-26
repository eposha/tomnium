import {useMutation} from '@apollo/client';

import {HOMEWORK_TEST_ANSWER} from '@/mutations/homeworks/homeworkTestAnswer';
import {useForm} from 'react-hook-form';
import {Dispatch, SetStateAction} from 'react';

interface IFormProps {
  selectedOne: string;
  selectedMany: string[];
}

export const useAnswerHomeworksTest = (params: {
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
}) => {
  const {setCurrentQuestionIndex} = params;

  const [answerTest, {loading}] = useMutation(HOMEWORK_TEST_ANSWER);

  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
      selectedOne: '',
      selectedMany: [] as string[],
    },
  });

  const onSubmit = async (record: IFormProps) => {
    try {
      const {selectedOne, selectedMany} = record;

      if (selectedOne) {
        await answerTest({variables: {optionId: +selectedOne}});
      }

      if (!!selectedMany.length) {
        selectedMany.map(
          async (item) => await answerTest({variables: {optionId: +item}}),
        );
      }

      reset({selectedMany: [], selectedOne: ''});
      setCurrentQuestionIndex((prev) => ++prev);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    answerTest,
    register,
    onSubmit: handleSubmit(onSubmit),
    loading,
  };
};
