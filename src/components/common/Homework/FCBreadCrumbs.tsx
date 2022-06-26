import {FC} from 'react';
import {EntityName} from 'src/graphql.schema';
import {getLinkFromParent} from '@/helpers/getLinkFromParent';
import {useGetParent} from '@/graph-hooks/lessons/useGetParent';
import {Text} from 'styles/common';
import {CellLink} from 'styles/table';

interface IFCBreadCrumbsProps {
  homeworkId?: string;
}

const FCBreadCrumbs: FC<IFCBreadCrumbsProps> = ({homeworkId}) => {
  const {entity} = useGetParent({
    entityName: EntityName.EntityNameHomework,
    entityId: homeworkId,
  });

  const isLessonParent =
    entity?.Parent?.entityName === EntityName.EntityNameLesson;

  return (
    <>
      <Text fontSize='16px'>
        Курс:{' '}
        <CellLink
          href={getLinkFromParent(
            isLessonParent
              ? entity.Parent?.Parent?.Parent?.Parent
              : entity?.Parent?.Parent?.Parent,
          )}
          target='__blank'>
          {isLessonParent
            ? entity?.Parent?.Parent?.Parent?.Parent?.title
            : entity?.Parent?.Parent?.Parent?.title}
        </CellLink>
      </Text>
      <Text fontSize='16px'>
        Поток:{' '}
        <CellLink
          href={getLinkFromParent(
            isLessonParent
              ? entity?.Parent?.Parent?.Parent
              : entity?.Parent?.Parent,
          )}
          target='__blank'>
          {isLessonParent
            ? entity?.Parent?.Parent?.Parent?.title
            : entity?.Parent?.Parent?.title}
        </CellLink>
      </Text>
      <Text fontSize='16px'>
        Модуль:{' '}
        <CellLink
          href={getLinkFromParent(
            isLessonParent ? entity?.Parent?.Parent : entity?.Parent,
          )}
          target='__blank'>
          {isLessonParent
            ? entity?.Parent?.Parent?.title
            : entity?.Parent?.title}
        </CellLink>
      </Text>
      {isLessonParent && (
        <Text fontSize='16px'>
          Урок:{' '}
          <CellLink href={getLinkFromParent(entity.Parent)} target='__blank'>
            {entity?.Parent?.title}
          </CellLink>
        </Text>
      )}
    </>
  );
};

export default FCBreadCrumbs;
