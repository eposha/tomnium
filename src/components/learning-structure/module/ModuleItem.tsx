import React from 'react';

import {IModule} from '@/types/module';
import {Media} from 'src/media-styles';

import {
  ModuleCard,
  LessonCard,
  ModuleTitle,
} from '@/components/learning-structure';

import * as UI from 'styles/learningStructure/module-item';
import {IThread} from '@/types/thread';

interface IModuleItemProps {
  onClick?: () => void;
  isActive?: boolean;
  isExpandable?: boolean;
  module: IModule;
  moduleIndex: number;
  threadId?: string;
  courseId?: string;
  OwnThread?: IThread | null;

  isPreviewMode?: boolean;
}

const ModuleItem: React.FC<IModuleItemProps> = ({
  onClick,
  isActive,
  isExpandable,
  module,
  moduleIndex,
  courseId,
  threadId,
  OwnThread,
  isPreviewMode,
}) => {
  return (
    <UI.Item>
      <UI.Header onClick={onClick}>
        <Media at={'xs'}>
          <UI.HeaderInner>
            <UI.TitleWrapper>
              <ModuleTitle
                moduleIndex={moduleIndex}
                module={module}
                courseId={courseId}
                threadId={threadId}
                isPreviewMode={isPreviewMode}
              />
            </UI.TitleWrapper>

            <UI.ArrowContainer>
              <UI.Arrow $isActive={isActive} />
            </UI.ArrowContainer>
          </UI.HeaderInner>
        </Media>
        <Media greaterThan={'xs'}>
          <ModuleCard
            module={module}
            moduleIndex={moduleIndex}
            courseId={courseId}
            threadId={threadId}
            OwnThread={OwnThread}
            isPreviewMode={isPreviewMode}
          />
        </Media>
      </UI.Header>
      <UI.Content $isActive={isActive} $isExpandable={isExpandable}>
        <Media at={'xs'}>
          <ModuleCard
            module={module}
            moduleIndex={moduleIndex}
            courseId={courseId}
            threadId={threadId}
            isPreviewMode={isPreviewMode}
          />
        </Media>
        {module.Lessons?.map((lesson, lessonIndex) => (
          <LessonCard
            key={lesson.id}
            module={module}
            lesson={lesson}
            lessonIndex={lessonIndex}
            moduleIndex={moduleIndex}
            courseId={courseId}
            threadId={threadId}
            OwnThread={OwnThread}
            isPreviewMode={isPreviewMode}
          />
        ))}
      </UI.Content>
    </UI.Item>
  );
};

export default ModuleItem;
