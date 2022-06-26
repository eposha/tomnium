import {useState, FC} from 'react';

import {IModule} from '@/types/module';

import {ModuleItem} from '@/components/learning-structure';
import {IThread} from '@/types/thread';

interface ICourseLearningProcessItemProps {
  module: IModule;
  moduleIndex: number;
  openStructure?: boolean;
  courseId?: string;
  threadId?: string;
  OwnThread?: IThread | null;
  isPreviewMode?: boolean;
}

const CourseLearningProcessItem: FC<ICourseLearningProcessItemProps> = ({
  module,
  moduleIndex,
  courseId,
  threadId,
  OwnThread,
  openStructure,
  isPreviewMode,
}) => {
  const [isActive, setIsActive] = useState(openStructure || moduleIndex === 0);

  return (
    <ModuleItem
      module={module}
      moduleIndex={moduleIndex}
      isActive={isActive}
      onClick={() => setIsActive((current) => !current)}
      isExpandable
      courseId={courseId}
      threadId={threadId}
      OwnThread={OwnThread}
      isPreviewMode={isPreviewMode}
    />
  );
};
export default CourseLearningProcessItem;
