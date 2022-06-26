import {IModule} from '@/types/module';
import {FC} from 'react';
import {CourseStatus} from 'src/graphql.schema';
import AsideModule from './AsideModule';

interface IAsideModuleCard {
  module: IModule;
  moduleIndex: number;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
}

const AsideModuleCard: FC<IAsideModuleCard> = ({
  module,
  moduleIndex,
  courseId,
  threadId,
  status,
}) => {
  return (
    <AsideModule
      module={module}
      moduleIndex={moduleIndex}
      courseId={courseId}
      threadId={threadId}
      status={status}
    />
  );
};

export default AsideModuleCard;
