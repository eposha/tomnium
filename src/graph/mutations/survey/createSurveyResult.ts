import { gql } from '@apollo/client';

export const SURVEY_RESULT_CREATE = gql`
mutation survey($record: SurveyQuestionResultCreateInput!){
 surveyQuestionResultCreate(record: $record)
}

`