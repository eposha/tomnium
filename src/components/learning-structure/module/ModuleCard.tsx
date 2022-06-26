import {IModule} from '@/types/module';
import {formatDate, getDeclension} from '@/helpers/common';
import {DATE_FORMAT} from '@/constants/common';

import {
  EntityProgressBar,
  ModuleTitle,
  HomeworksList,
} from 'src/components/learning-structure';
import {Media} from 'src/media-styles';

import * as UI from 'styles/learningStructure/module-card';

import CalendarIcon from 'public/icons/Calendar.svg';
import FileIcon from 'public/icons/FileSVG.svg';
import BookIcon from 'public/icons/BookSVG.svg';
import {IThread} from '@/types/thread';

interface IModuleCardProps {
  module: IModule;
  moduleIndex: number;
  threadId?: string;
  courseId?: string;
  OwnThread?: IThread | null;
  isPreviewMode?: boolean;
}

const ModuleCard: React.FC<IModuleCardProps> = ({
  module,
  moduleIndex,
  courseId,
  threadId,
  OwnThread,
  isPreviewMode,
}) => {
  const {
    description,
    availableByDate,
    Homework,
    availabilityDate,
    homeworksCount,
    lessonsCount,
  } = module || {};

  return (
    <UI.ModuleCard>
      <UI.ModuleContent>
        <Media greaterThan={'xs'}>
          <UI.TitleWrapper>
            <ModuleTitle
              module={module}
              moduleIndex={moduleIndex}
              courseId={courseId}
              threadId={threadId}
              isPreviewMode={isPreviewMode}
            />
          </UI.TitleWrapper>
        </Media>
        {description && <UI.Description>{description}</UI.Description>}
      </UI.ModuleContent>
      <UI.ModuleData>
        {availableByDate && (
          <UI.IconLabel>
            <UI.IconWrapper>
              <CalendarIcon width={20} height={20} />
            </UI.IconWrapper>
            Доступно c{' '}
            <b>{formatDate(availabilityDate, DATE_FORMAT.primary)}</b>
          </UI.IconLabel>
        )}

        {(!!lessonsCount || lessonsCount === 0) && (
          <Media greaterThan={'xs'}>
            <UI.IconLabel>
              <UI.IconWrapper>
                <FileIcon width={20} height={20} />
              </UI.IconWrapper>
              <b>{module?.lessonsCount} </b>
              {getDeclension(['урок', 'урока', 'уроков'], lessonsCount)}
            </UI.IconLabel>
          </Media>
        )}
        {(!!homeworksCount || homeworksCount === 0) && (
          <Media greaterThan={'xs'}>
            <UI.IconLabel>
              <UI.IconWrapper>
                <BookIcon width={20} height={20} />
              </UI.IconWrapper>
              <b>{homeworksCount} </b>
              {getDeclension(['задание', 'задания', 'заданий'], homeworksCount)}
            </UI.IconLabel>
          </Media>
        )}
      </UI.ModuleData>

      {!!Homework?.length && (
        <Media at={'xs'}>
          <UI.HomeworksListWrapper>
            <HomeworksList homeworks={Homework} />
          </UI.HomeworksListWrapper>
        </Media>
      )}
      {OwnThread && (
        <UI.ProgressWrapper>
          <EntityProgressBar
            color='primary'
            progress={module?.UserModuleProgress?.progress ?? 0}
          />
        </UI.ProgressWrapper>
      )}
    </UI.ModuleCard>
  );
};

export default ModuleCard;
