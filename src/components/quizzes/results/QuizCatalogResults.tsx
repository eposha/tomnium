import {FC} from 'react';

import {IQuizRecommendationsResults} from '@/types/quiz';

import {Media} from 'src/media-styles';

import * as UI from 'styles/quizzes/results/quiz-catalog-results';

interface IQuizCatalogResultsProps {
  QuizRecommendationResults?: IQuizRecommendationsResults[];
}

const QuizCatalogResults: FC<IQuizCatalogResultsProps> = ({
  QuizRecommendationResults,
}) => {
  return (
    <>
      <UI.Results>
        {QuizRecommendationResults?.find(
          (item) => !item.id,
        )?.Recommendations?.map(({id, text}) => (
          <UI.ResultText key={id}>{text}</UI.ResultText>
        ))}
        <UI.ButtonContainer>
          <UI.ButtonContainer>
            <Media greaterThan='xs'>
              <UI.Button $solid>Поделиться</UI.Button>
            </Media>
            <UI.Button $solid>Пройти заново</UI.Button>
          </UI.ButtonContainer>
          <UI.Button>Следующий</UI.Button>
        </UI.ButtonContainer>
      </UI.Results>
      <Media at='xs'>
        <UI.ResultsBottomLabel>
          <UI.ShareLink href='#'>Поделиться</UI.ShareLink>
        </UI.ResultsBottomLabel>
      </Media>
    </>
  );
};

export default QuizCatalogResults;
