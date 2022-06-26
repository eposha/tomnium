import Link from 'next/link';

import {DATE_FORMAT} from '@/constants/common';
import {IModule, IThread, ILesson} from '@/types/index';
import {formatDate} from '@/helpers/common';

import {
  EntityProgressBar,
  HomeworksList,
} from '@/components/learning-structure';
import {CardLableIcon} from './CardLabelIcon';
import CalendarIcon from 'public/icons/Calendar.svg';
import {IconLabel, IconWrapper} from 'styles/learningStructure/module-card';
import * as UI from 'styles/learningStructure/lesson-card';

interface ILessonCardProps {
  lesson: ILesson;
  lessonIndex: number;
  moduleIndex: number;
  module: IModule;
  threadId?: string;
  courseId?: string;
  OwnThread?: IThread | null;
  isPreviewMode?: boolean;
}

const LessonCard: React.FC<ILessonCardProps> = ({
  module,
  lesson,
  courseId,
  threadId,
  OwnThread,
  isPreviewMode,
}) => {
  const {
    id: lessonId,
    title,
    description,
    Homework,
    isAvailable,
    UserLessonProgress,
    availabilityDate,
  } = lesson;
  const {id: moduleId} = module;

  return (
    <UI.LessonCard>
      <UI.LessonContent>
        <UI.LessonTitleWrapper>
          <UI.SubNumberLabel>
            <CardLableIcon
              isAvailable={isAvailable}
              progress={UserLessonProgress?.progress}
              isLesson
            />
          </UI.SubNumberLabel>
          {isAvailable ? (
            <Link
              href={`/courses/${courseId}/threads/${threadId}/modules/${moduleId}/lessons/${lessonId}${
                isPreviewMode ? '?show=own' : ''
              }`}>
              <a>
                <UI.LessonTitle>{title}</UI.LessonTitle>
              </a>
            </Link>
          ) : (
            <UI.LessonTitle>{title}</UI.LessonTitle>
          )}
        </UI.LessonTitleWrapper>
        <UI.LessonDescription>{description}</UI.LessonDescription>
      </UI.LessonContent>

      <UI.HomeworksListWrapper>
        {availabilityDate && (
          <IconLabel>
            <IconWrapper>
              <CalendarIcon width={20} height={20} />
            </IconWrapper>
            Доступно c{' '}
            <b>{formatDate(availabilityDate, DATE_FORMAT.primary)}</b>
          </IconLabel>
        )}
        <HomeworksList homeworks={Homework} />
      </UI.HomeworksListWrapper>
      {OwnThread && (
        <UI.ProgressWrapper>
          <EntityProgressBar
            color='primary'
            progress={lesson?.UserLessonProgress?.progress ?? 0}
          />
        </UI.ProgressWrapper>
      )}
    </UI.LessonCard>
  );
};

export default LessonCard;
