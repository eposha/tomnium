import {useQuery} from '@apollo/client';

import {
  GET_TEST_SELECTED_OPTIONS,
  ITestSelectedOptionsResponse,
  ITestSelectedOptionsRequest,
} from '@/query/homeworks/test/getTestSelectedOptions';

export const useGetTestSelectedOptions = ({
  questionIds,
}: {
  questionIds?: number[];
}) => {
  const {data, loading} = useQuery<
    ITestSelectedOptionsResponse,
    ITestSelectedOptionsRequest
  >(GET_TEST_SELECTED_OPTIONS, {
    skip: !questionIds?.length,
    variables: {
      questionIds,
    },
  });

  return {
    selectedOptionsIds: data?.homeworkTestQuestionOptions?.map(
      (option) => option.id,
    ),
    loading,
  };
};
