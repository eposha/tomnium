import {useQuery} from '@apollo/client';

import {GET_SURVEY} from '@/query/survey/getSurvey';

export const useSurvey = (threadId: string | undefined) => {
  const {data} = useQuery<any>(GET_SURVEY, {
    variables: {
      threadId: threadId,
    },
    skip: !threadId,
  });
  return data;
};
