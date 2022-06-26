import {IModule} from '@/types/module';
import {FC, useState} from 'react';
import {CourseStatus} from 'src/graphql.schema';
import * as UI from 'styles/learningStructure/aside-modules';
import AsideLessonCard from '../AsideLessonCard';
import AsideModuleTitle from '../module/AsideModuleTitle';

interface IAsideModule {
  module: IModule;
  moduleIndex: number;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
}

const AsideModule: FC<IAsideModule> = ({
  module,
  moduleIndex,
  courseId,
  threadId,
  status,
}) => {
  const [isActive, setActive] = useState(true);
  return (
    <UI.ModuleItem>
      <AsideModuleTitle
        module={module}
        moduleIndex={moduleIndex}
        onClick={() => {
          setActive(!isActive);
        }}
        isActive={isActive}
        courseId={courseId}
        threadId={threadId}
        status={status}
      />

      <AsideLessonCard
        module={module}
        moduleIndex={moduleIndex}
        isActive={isActive}
        courseId={courseId}
        threadId={threadId}
        status={status}
      />
    </UI.ModuleItem>
  );
};

export default AsideModule;
