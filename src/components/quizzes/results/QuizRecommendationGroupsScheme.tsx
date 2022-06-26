import {useGetQuizRecommendationGroups} from '@/graph-hooks/quizRecommendationGroups/useGetGroups';
import {getNonOriginalImage} from '@/helpers/common';
import {FC} from 'react';

import * as UI from 'styles/quizzes/results/quiz-recommendation-group-scheme';

interface IQuizRecommendationGroupsScheme {
  activeGroups?: string[];
  $isPartial?: boolean;
}

const QuizRecommendationGroupsScheme: FC<IQuizRecommendationGroupsScheme> = ({
  activeGroups,
  $isPartial,
}) => {
  const {groups} = useGetQuizRecommendationGroups();

  return (
    <UI.Wrapper $isPartial={$isPartial}>
      <UI.Inner>
        {groups?.map(({id, title, description, iconDisabled, iconEnabled}) => {
          const isActive = activeGroups?.includes(id);

          const iconSrc = getNonOriginalImage(
            isActive ? iconEnabled : iconDisabled,
          );

          return (
            <UI.Group key={id} $isActive={isActive}>
              <UI.GroupImageWrapper $isActive={isActive}>
                <UI.GroupImage
                  src={iconSrc || '/images/quizzes/disabled.svg'}
                  layout='fill'
                  alt='Group icon'
                />
              </UI.GroupImageWrapper>
              <UI.GroupContent>
                <UI.GroupTitle $isActive={isActive}>{title}</UI.GroupTitle>
                <UI.Line $isActive={isActive} />
                <UI.GroupDescription $isActive={isActive}>
                  {description}
                </UI.GroupDescription>
              </UI.GroupContent>
            </UI.Group>
          );
        })}
      </UI.Inner>
    </UI.Wrapper>
  );
};

export default QuizRecommendationGroupsScheme;
