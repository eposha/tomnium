import { Maybe } from "graphql/jsutils/Maybe";
import { SurveyQuestion } from "src/graphql.schema";

export interface IAnswer {
 question: Maybe<SurveyQuestion>;
}