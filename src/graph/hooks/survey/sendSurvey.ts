import { SURVEY_RESULT_CREATE } from '@/mutations/survey/createSurveyResult';
import { useLazyQuery } from '@apollo/client';
import {useMutation} from '@apollo/client';
export const useSendSurvey = () => {
 const [sendSurvey, { data }] = useMutation(SURVEY_RESULT_CREATE);
 return {sendSurvey,data}
}