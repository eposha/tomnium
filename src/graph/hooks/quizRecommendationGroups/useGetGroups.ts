import {useQuery} from '@apollo/client';

import {
  GET_QUIZ_RECOMMENDATION_GROUPS,
  IGetGroupsResponse,
} from '@/query/quizRecommendationGroups/getGroups';

export const useGetQuizRecommendationGroups = () => {
  const {data, loading} = useQuery<IGetGroupsResponse>(
    GET_QUIZ_RECOMMENDATION_GROUPS,
  );

  return {
    groups: data?.quizQuestionOptionGroups.QuizQuestionOptionGroups,
    loading,
  };
};
