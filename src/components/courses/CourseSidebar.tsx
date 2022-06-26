import Link from 'next/link';

import {getDistanceToNow} from '@/helpers/common';

import {Text, Button} from 'styles/common';
import Sidebar from 'src/components/common/Sidebar';
import {EntityName} from 'src/graphql.schema';

import * as UI from 'styles/courses/course-sidebar';
import AsideStructureModules from '../learning-structure/AsideStructureModules';
import {CourseStatus} from 'src/graphql.schema';
import useRoomId from '@/graph-hooks/chat/useRoomId';
import {CHAT_TYPES} from '@/constants/chat';

interface ICourseSidebarProps {
  endSubmissionDate?: Date | null;
  modules?: any;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
  OwnThreadId?: string | undefined;
}

const CourseSidebar: React.FC<ICourseSidebarProps> = ({
  endSubmissionDate,
  modules,
  courseId,
  threadId,
  status,
  OwnThreadId,
}) => {
  const {data} = useRoomId(
    {
      entityId: OwnThreadId,
      entityName: EntityName.EntityNameThread,
    },
    !OwnThreadId,
  );

  const id = data?.room?.meta?.Parent?.id;
  const entityName = data?.room?.meta?.Parent?.entityName;

  return (
    <Sidebar>
      <AsideStructureModules
        modules={modules}
        courseId={courseId}
        threadId={threadId}
        status={status}
        ownThreadId={OwnThreadId}
      />
      <UI.CourseEndDateWrapper>
        <Text fontSize='14px' margin='0 0 8px'>
          До конца продаж
        </Text>
        <UI.CourseEndDate>
          {getDistanceToNow({date: endSubmissionDate, unit: 'day'})}
        </UI.CourseEndDate>
        <Link href='#' passHref>
          <UI.CourseEndDateLink>Принять участие</UI.CourseEndDateLink>
        </Link>
      </UI.CourseEndDateWrapper>
      <UI.SidebarButtons>
        <Link href={'/support'} passHref>
          <UI.SupportBtn>?</UI.SupportBtn>
        </Link>
        {!!OwnThreadId && (
          <Link
            href={`/chat/${id}/${
              CHAT_TYPES[entityName as keyof typeof CHAT_TYPES]
            }`}
            passHref>
            <Button $fullWidth>Чат потока</Button>
          </Link>
        )}
      </UI.SidebarButtons>
    </Sidebar>
  );
};

export default CourseSidebar;
