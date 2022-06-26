import {HOMEWORK_TYPES} from '@/constants/homework';
import {useHomeworkResultCalculate} from '@/graph-hooks/homeworks/useHomeworkResultCalculate';
import {useGetNextStep} from '@/graph-hooks/lessons/useNextStep';
import {IHomework} from '@/types/homework';
import {HomeworkType} from 'src/graphql.schema';
import * as UI from 'styles/common/Remainder';

export interface IRemainderProps {
  title: string;
  description: string;
  moduleNumber: number;
  buttonLink: string;
  homework: IHomework[];
  courseId?: string;
}

const Remainder = ({
  title,
  description,
  moduleNumber,
  homework,
  courseId,
}: IRemainderProps) => {
  const displayedHomework = homework?.filter(
    (homework) => homework?.type !== HomeworkType.HomeworkTypeNoHomework,
  );
  const {homeworkResultCalculate} = useHomeworkResultCalculate();
  const {getSteps} = useGetNextStep();

  const isNoHomework = displayedHomework?.length === 0;

  const handleNextLearningStep = async () => {
    if (isNoHomework) {
      await homeworkResultCalculate({
        variables: {
          homeworkId: homework?.[0]?.id,
        },
        onError() {
          getSteps({
            variables: {
              courseId,
            },
          });
        },
      });
    }
    getSteps({
      variables: {
        courseId,
      },
    });
  };

  return (
    <UI.RemainderBlock>
      <UI.NumLabel>{moduleNumber + 1}</UI.NumLabel>
      <UI.MainBlock>
        <UI.InfoContainer>
          <UI.Title>{title}</UI.Title>
          <UI.Text>{description}</UI.Text>
        </UI.InfoContainer>

        {!!displayedHomework.length && (
          <UI.LabelContainer>
            {displayedHomework.map(({type, id}) => (
              <UI.LabelLink key={id}>{HOMEWORK_TYPES[type]}</UI.LabelLink>
            ))}
          </UI.LabelContainer>
        )}

        <UI.Button onClick={handleNextLearningStep}>Продолжить</UI.Button>
      </UI.MainBlock>
    </UI.RemainderBlock>
  );
};

export default Remainder;
