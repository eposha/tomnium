import {FC} from 'react';
import {CourseStatus} from 'src/graphql.schema';
import * as UI from 'styles/learningStructure/aside-modules';
import AsideModuleCard from './module/AsideModuleCard';
import Link from 'next/link';

interface IAsideStructureModules {
  modules: any;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
  ownThreadId?: string | undefined;
}

const AsideStructureModules: FC<IAsideStructureModules> = ({
  modules,
  courseId,
  threadId,
  status,
}) => {
  return (
    <UI.ModulesWrapper>
      <UI.AsideTitle mb={11} border='#D3E2FF'>
        Модули
      </UI.AsideTitle>
      <UI.AsideTitle>Уроки</UI.AsideTitle>
      <Link href={`/courses/${courseId}/threads/${threadId}`} passHref>
        <UI.AsideLink>Старт курса</UI.AsideLink>
      </Link>
      {modules?.map((elem: any, index: number) => (
        <AsideModuleCard
          module={elem}
          moduleIndex={index}
          courseId={courseId}
          threadId={threadId}
          key={index}
          status={status}
        />
      ))}
    </UI.ModulesWrapper>
  );
};

export default AsideStructureModules;
