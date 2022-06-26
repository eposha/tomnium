import BlockContainer from '@/components/common/Homework/BlockContainer';
import HomeworkCard from '@/components/common/Homework/HomeworkCard';
import StarRating, {RatingValueType} from '@/components/rating/StarRating';
import {
  Homework as HomeworkProps,
  HomeworkType,
  Maybe,
} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {Box, Text} from 'styles/common';
import {Button} from 'styles/homeworks/block-container';
import {useGetNextStep} from '@/graph-hooks/lessons/useNextStep';
import {useHomeworkResultCalculate} from '@/graph-hooks/homeworks/useHomeworkResultCalculate';

interface IHomeworkProps {
  rate: RatingValueType;
  entityId: string | string[] | undefined;
  homeworks: Maybe<Maybe<HomeworkProps>[]>;
  estimateEntity?: (id: string, rate: RatingValueType) => void;
  idCourse?: string;
}

const Homework = ({
  homeworks,
  entityId,
  idCourse,
  rate,
  estimateEntity,
}: IHomeworkProps) => {
  const {HomeworkTypeNoHomework} = HomeworkType;

  const displayedHomework = homeworks?.filter(
    (homework) => homework?.type !== HomeworkTypeNoHomework,
  );

  const {homeworkResultCalculate} = useHomeworkResultCalculate();

  const isNoHomework = displayedHomework?.length == 0;

  const {getSteps} = useGetNextStep();

  const handleNextLearningStep = async () => {
    if (isNoHomework) {
      await homeworkResultCalculate({
        variables: {
          homeworkId: homeworks?.[0]?.id,
        },
        onError() {
          getSteps({
            variables: {
              courseId: idCourse,
            },
          });
        },
      });
    }
    getSteps({
      variables: {
        courseId: idCourse,
      },
    });
  };

  return (
    <>
      {!!displayedHomework?.length && (
        <>
          <Media greaterThan={'xs'}>
            <Text fontSize='20px' margin='0 0 30px'>
              Домашнее задание
            </Text>
          </Media>
          <Media at={'xs'}>
            <Text fontSize='18px' margin='0 0 10px'>
              Домашнее задание
            </Text>
          </Media>
        </>
      )}

      <Box mb={'25px'} mw={'780px'}>
        {!!displayedHomework?.length &&
          displayedHomework.map((homework) => (
            <HomeworkCard
              key={homework?.id}
              status={homework?.status}
              title={homework?.title}
              type={homework?.type}
              id={homework?.id}
            />
          ))}
      </Box>
      {/* {!!displayedHomework?.length && (
        <Box mb={'10px'} mw={'780px'}>
          <HomeworkLocked>
            Для продолжения обучения выполните домашние задание.
          </HomeworkLocked>
        </Box>
      )} */}
      <Box mb={'10px'} mw={'780px'}>
        <BlockContainer
          title={'Оцените этот урок'}
          text={
            'Ваша искренняя обратная связь поможет нам сделать платформу лучше!'
          }>
          <StarRating
            entityId={entityId as string}
            rate={rate}
            estimateEntity={estimateEntity}
          />
        </BlockContainer>
      </Box>
      <BlockContainer
        title={'Продолжайте обучение'}
        text={
          'Мы направим вас на урок или модуль в этом курсе, который вам необходимо пройти.'
        }>
        <Button onClick={handleNextLearningStep}>Продолжить обучение</Button>
      </BlockContainer>
    </>
  );
};

export default Homework;
