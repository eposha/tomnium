import {FC} from 'react';

import {IQuizRecommendationsResults} from '@/types/quiz';
import {getNonOriginalImage} from '@/helpers/common';

import QuizRecommendationGroupsScheme from '../QuizRecommendationGroupsScheme';

import * as UI from 'styles/quizzes/results/full-diagnostics-results';

interface IQuizDiagnosticsResultsProps {
  QuizRecommendationResults?: IQuizRecommendationsResults[];
  activeGroups?: string[];
}

const FullDiagnosticsResults: FC<IQuizDiagnosticsResultsProps> = ({
  QuizRecommendationResults,
  activeGroups,
}) => {
  return (
    <>
      <UI.GroupSchemeWrapper>
        <QuizRecommendationGroupsScheme activeGroups={activeGroups} />
      </UI.GroupSchemeWrapper>
      <UI.ResultsWrapper>
        <UI.RecommendationTitle>
          Ваш результат прохождения опроса
        </UI.RecommendationTitle>
        <UI.RecommendationDescription>
          Ваши ответы на полную группу вопросов помогли нам определить 3 области
          жизни, которые требуют внимания.
        </UI.RecommendationDescription>

        {QuizRecommendationResults?.filter((item) => item.id).map((item) => (
          <UI.GroupCard key={item.id}>
            <UI.Group>
              <UI.GroupImageWrapper>
                <UI.GroupImage
                  src={getNonOriginalImage(item.iconEnabled)}
                  layout='fill'
                  objectFit='cover'
                  alt='Group icon'
                />
              </UI.GroupImageWrapper>
              <UI.GroupTitle>{item.title}</UI.GroupTitle>
            </UI.Group>
            {item.Recommendations?.map(({id, text}) => (
              <UI.ResultText key={id}>{text}</UI.ResultText>
            ))}
          </UI.GroupCard>
        ))}
      </UI.ResultsWrapper>
    </>
  );
};

export default FullDiagnosticsResults;
