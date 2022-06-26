import {FC, useState} from 'react';

import {getNonOriginalImage} from '@/helpers/common';

import {IQuizRecommendationsResults} from '@/types/quiz';
import QuizRecommendationGroupsScheme from '../QuizRecommendationGroupsScheme';

import {Button, Text} from 'styles/common';
import {Media} from 'src/media-styles';
import {LoginForm, RegistrationForm} from './AuthForms';

import * as UI from 'styles/quizzes/results/partial-diagnostics-results';

interface IQuizDiagnosticsResultsProps {
  QuizRecommendationResults?: IQuizRecommendationsResults[];
  activeGroups?: string[];
}

const PartialDiagnosticsResults: FC<IQuizDiagnosticsResultsProps> = ({
  QuizRecommendationResults,
  activeGroups,
}) => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const filteredGroups = QuizRecommendationResults?.filter((item) => item.id);

  return (
    <>
      <UI.RecommendationTitle>
        Ваш результат прохождения{' '}
        <UI.HighlightedText>первой группы вопросов</UI.HighlightedText>
      </UI.RecommendationTitle>
      <UI.RecommendationDescription>
        Ваши ответы на первую группу вопросов помогли нам определить{' '}
        {filteredGroups?.length} области жизни, которые требуют внимания.
      </UI.RecommendationDescription>
      <UI.Wrapper>
        <UI.GroupSchemeWrapper>
          <QuizRecommendationGroupsScheme
            activeGroups={activeGroups}
            $isPartial
          />
        </UI.GroupSchemeWrapper>

        <UI.ActiveGroupsWrapper>
          {!showRegister && !showLogin && (
            <>
              <Media greaterThan='xs'>
                <Text fontSize='18px' fontWeight='600' margin=' 0 0 15px'>
                  Сферы жизни, которые требуют внимания:
                </Text>

                <UI.ActiveGroupList>
                  {filteredGroups?.map((item) => (
                    <UI.ActiveGroup key={item.id}>
                      <UI.ActiveGroupImageWrapper>
                        <UI.ActiveGroupImage
                          src={getNonOriginalImage(item.iconEnabled) || ''}
                          layout='fill'
                          objectFit='cover'
                          alt='Group icon'
                        />
                      </UI.ActiveGroupImageWrapper>
                      <UI.ActiveGroupContent>
                        <UI.ActiveGroupTitle>{item.title}</UI.ActiveGroupTitle>
                        <UI.ActiveGroupDescription>
                          {item.description}
                        </UI.ActiveGroupDescription>
                      </UI.ActiveGroupContent>
                    </UI.ActiveGroup>
                  ))}
                </UI.ActiveGroupList>
              </Media>
              <UI.AuthWrapper>
                <UI.AuthHeading>
                  Для продолжения требуется{' '}
                  <UI.HighlightedText>регистрация</UI.HighlightedText>
                </UI.AuthHeading>
                <UI.AuthDescription>
                  Пожалуйста, укажите ваше имя email, на который мы отправим
                  результаты диагностики после ее завершения.
                </UI.AuthDescription>
                <UI.ButtonsWrapper>
                  <Button $fullWidth onClick={() => setShowRegister(true)}>
                    Регистрация
                  </Button>
                  <Button $solid $fullWidth onClick={() => setShowLogin(true)}>
                    Вход
                  </Button>
                </UI.ButtonsWrapper>
              </UI.AuthWrapper>
            </>
          )}
          {showRegister && (
            <RegistrationForm setShowRegister={setShowRegister} />
          )}
          {showLogin && <LoginForm setShowLogin={setShowLogin} />}
        </UI.ActiveGroupsWrapper>
      </UI.Wrapper>
    </>
  );
};

export default PartialDiagnosticsResults;
