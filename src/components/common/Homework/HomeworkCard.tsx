import Link from 'next/link';
import {HOMEWORK_STATUS_TYPES} from '@/constants/homework';
import {useHomeworkLink} from '@/helpers/hooks/useHomeworkLink';
import {HomeworkType, UserHomeworkStatus} from 'src/graphql.schema';
import * as UI from 'styles/homeworks/homework-card';

export type TaskStatusType = UserHomeworkStatus | undefined;

export interface IHomework {
  status?: UserHomeworkStatus;
  title?: string;
  type?: HomeworkType;
  id?: string[] | string | undefined;
}

const HomeworkCard = ({status, title, type, id}: IHomework) => {
  const link = useHomeworkLink(id, type);

  const taskStatus: TaskStatusType = status;

  const {
    UserHomeworkStatusDone,
    UserHomeworkStatusNotStarted,
    UserHomeworkStatusReview,
    UserHomeworkStatusStarted,
  } = UserHomeworkStatus;

  const isStarted = taskStatus === UserHomeworkStatusStarted;
  const isDone = taskStatus === UserHomeworkStatusDone;
  const isReviewing = taskStatus === UserHomeworkStatusReview;
  const isNotStarted = taskStatus === UserHomeworkStatusNotStarted;

  const borderColor = isNotStarted
    ? 'blueberryLight'
    : isDone
    ? 'greyLight'
    : 'blueberry';

  const borderStyle = isStarted || isDone ? 'dashed' : 'solid';
  const backgroundColor = isNotStarted
    ? 'white'
    : isStarted
    ? 'blueberryLight'
    : 'transparent';
  const buttonBackground = isReviewing ? 'white' : 'whiteGrey';

  const buttonBorderColor = isDone ? 'greyLight' : '';

  const arrowColor = isDone ? 'greyLight' : 'blueberry';

  const textColor = isDone ? 'greyLight' : 'black';

  const statusColor = isDone ? 'greyLight' : 'blueberry';

  return (
    <div style={{marginBottom: 10}}>
      <Link href={link ?? '#'} passHref>
        <UI.HomeworkBlock
          backgroundColor={backgroundColor}
          borderColor={borderColor}
          borderStyle={borderStyle}>
          {taskStatus === UserHomeworkStatusDone ? (
            <UI.StatusCheckedIconSVG />
          ) : (
            <UI.StatusIconSVG />
          )}
          <UI.HomeworkText color={textColor}>{title}</UI.HomeworkText>
          <UI.HomeworkStatus color={statusColor}>
            {status && HOMEWORK_STATUS_TYPES[status]}
          </UI.HomeworkStatus>
          <UI.HomeworkButton
            buttonBackground={buttonBackground}
            buttonBorderColor={buttonBorderColor}>
            <UI.ArrowIconSVG color={arrowColor} />
          </UI.HomeworkButton>
        </UI.HomeworkBlock>
      </Link>
    </div>
  );
};

export default HomeworkCard;
