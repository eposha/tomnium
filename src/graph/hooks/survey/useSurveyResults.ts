import {useQuery} from '@apollo/client';
import { GET_SURVEY_RESULTS } from '@/query/survey/getSurveyResult';

export const useSurveyResults = (surveyId: string | undefined) => {
  const {data} = useQuery<any>(GET_SURVEY_RESULTS, {
    variables: {
     surveyId: surveyId,
    },
    skip: !surveyId,
  });
  return data;
};
