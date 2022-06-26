import {IModule} from '@/types/module';
import {FC} from 'react';
import {useRouter} from 'next/router';
import {
  ModuleHeader,
  IconWrapper,
  ModuleItemTxt,
  ModuleItemLink,
} from 'styles/learningStructure/aside-modules';
import IconArrow from 'public/icons/sidebar/Arrow.svg';
import Link from 'next/link';
import React from 'react';
import {IThread} from '@/types/thread';
import {CourseStatus} from 'src/graphql.schema';

interface IAsideModuleTitle {
  module: IModule;
  moduleIndex: number;
  onClick: any;
  isActive: boolean;
  courseId?: string;
  threadId?: string;
  OwnThread?: IThread | null;
  status?: CourseStatus;
}

const AsideModuleTitle: FC<IAsideModuleTitle> = ({
  module,
  onClick,
  isActive,
  courseId,
  threadId,
}) => {
  const {
    query: {show},
  } = useRouter();
  const {id, title, slug, isAvailable} = module;

  const moduleId = slug ?? id;

  return (
    <ModuleHeader onClick={onClick}>
      {isAvailable ? (
        <Link
          href={`/courses/${courseId}/threads/${threadId}/modules/${moduleId}${
            !!show ? '?show=own' : ''
          }`}
          passHref>
          <ModuleItemLink onClick={(e) => e.stopPropagation()}>
            {title}
          </ModuleItemLink>
        </Link>
      ) : (
        <ModuleItemTxt>{title}</ModuleItemTxt>
      )}

      <IconWrapper $isActive={isActive}>
        <IconArrow />
      </IconWrapper>
    </ModuleHeader>
  );
};

export default React.memo(AsideModuleTitle);
