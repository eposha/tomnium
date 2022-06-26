import {useGetCoursesForAmount} from '@/graph-hooks/courses/useGetCoursesForAmount';
import {useGetDocumentsForAmount} from '@/graph-hooks/documents';
import {useUpdateSubscription} from '@/graph-hooks/subscriptions/useUpdateSubscription';
import {getDeclension} from '@/helpers/common';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import {GET_COURSES_FOR_AMOUNT} from '@/query/courses/coursesForAmount';
import {GET_DOCUMENTS_FOR_AMOUNT} from '@/query/documents/documentsForAmount';
import {
  GET_NEXT_LESSONS_AMOUNT,
  useGetNextLessonsForAmount,
} from '@/query/lessons/getNextLessonsForAmount';
import {GetServerSideProps} from 'next';
import {FC, useMemo} from 'react';
import {StepWrapper, CardWrapper, SubTitle} from 'styles/unsubscribe/common';
import ButtonsCrontroller from '../buttons/ButtonsCrontroller';
import Card from '../cards/Card';

interface SecondStepPropsType {
  nextStepFunc: any;
}

const SecondStep: FC<SecondStepPropsType> = ({nextStepFunc}) => {
  const {nextLessonsLength} = useGetNextLessonsForAmount();
  const {coursesLength} = useGetCoursesForAmount();
  const {documentsLength} = useGetDocumentsForAmount();
  const {updateSubscription} = useUpdateSubscription();

  const handleCancelSubscription = async () => {
    await updateSubscription({
      variables: {
        record: {
          renew: false,
        },
      },
    });
    nextStepFunc();
  };

  const CardsData = useMemo(
    () => [
      {
        img: '/images/unsubscribe/1.jpg',
        description: 'пройденным и начатым курсам',
        text: `У Вас ${nextLessonsLength} ${getDeclension(
          ['купленный', 'купленных', 'купленных'],
          nextLessonsLength,
        )} ${getDeclension(['курс', 'курса', 'курсов'], nextLessonsLength)}`,
      },
      {
        img: '/images/unsubscribe/2.jpg',
        description: 'всем курсам, доступным в рамках вашей подписки',
        text: `${coursesLength} ${getDeclension(
          ['курс', 'курса', 'курсов'],
          coursesLength,
        )}`,
      },
      {
        img: '/images/unsubscribe/3.jpg',
        description: 'вашим результатам, заметкам и материалам',
        text: `${getDeclension(
          ['Доступен', 'Доступно', 'Доступно'],
          documentsLength,
        )} ${documentsLength} ${getDeclension(
          ['материал', 'материала', 'материалов'],
          documentsLength,
        )}`,
      },
      {
        img: '/images/unsubscribe/4.jpg',
        description: 'новым курсам, которые скоро появятся на платформе',
        text: 'Премьеры курсов',
      },
    ],
    [nextLessonsLength, coursesLength, documentsLength],
  );

  return (
    <StepWrapper>
      <SubTitle>
        Отменив подписку, по окончании платежного периода, вы утратите доступ:
      </SubTitle>
      <CardWrapper>
        {CardsData.map((elem) => (
          <Card
            key={elem.text}
            img={elem.img}
            description={elem.description}
            text={elem.text}
          />
        ))}
      </CardWrapper>
      <ButtonsCrontroller
        nextStepFunc={handleCancelSubscription}
        isWide
        confirmText='Cохранить доступы'
      />
    </StepWrapper>
  );
};

export default SecondStep;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initApollo(null, ctx);

  await client.query({
    query: GET_COURSES_FOR_AMOUNT,
    variables: {
      limit: 10000,
    },
  });

  await client.query({
    query: GET_DOCUMENTS_FOR_AMOUNT,
    variables: {
      limit: 10000,
    },
  });

  await client.query({
    query: GET_NEXT_LESSONS_AMOUNT,
  });

  return addApolloState(client, {
    props: {},
  });
};
