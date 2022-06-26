import {useRouter} from 'next/router';
import {
  GET_PARENT,
  IGetEntityParentResponse,
} from '@/query/lessons/entityGetParent';
import {useLazyQuery, useQuery} from '@apollo/client';
import {EntityName, Maybe} from 'src/graphql.schema';
import {ENTITY_GET_PARENT_HOMEWORK_TYPES} from '@/constants/homework';
import {getLinkFromParent} from '@/helpers/getLinkFromParent';

const {EntityNameLesson} = EntityName;

export const useGetParent = (props: {
  entityName?: EntityName;
  entityId?: string | undefined;
}) => {
  const {entityId, entityName} = props;

  const {data, loading} = useQuery<IGetEntityParentResponse>(GET_PARENT, {
    variables: {
      entityName,
      id: entityId,
    },
    skip: !entityId,
  });

  return {
    entity: data?.entityGetParent,
    loading,
  };
};

export const useGetLazyParent = (
  entityId: string | Maybe<string>,
  entityName = EntityNameLesson,
) => {
  const {push} = useRouter();

  const [getParent, {data, loading}] = useLazyQuery<IGetEntityParentResponse>(
    GET_PARENT,
    {
      onCompleted: () => {
        const {EntityNameLesson, EntityNameSurvey, EntityNameHomework} =
          EntityName;

        let redirectLink;

        switch (entityName) {
          case EntityNameSurvey:
            redirectLink = `${getLinkFromParent(
              data?.entityGetParent.Parent,
            )}/quiz/${entityId}`;
            break;
          case EntityNameHomework:
            redirectLink = `${getLinkFromParent(
              data?.entityGetParent.Parent,
            )}/homeworks/${entityId}/${
              data?.entityGetParent?.type &&
              (ENTITY_GET_PARENT_HOMEWORK_TYPES as any)[
                data?.entityGetParent?.type
              ]
            }`;
            break;
          case EntityNameLesson:
            redirectLink = `${getLinkFromParent(
              data?.entityGetParent.Parent,
            )}$/lessons/${entityId}`;
            break;
          default:
            redirectLink = `${getLinkFromParent(
              data?.entityGetParent.Parent,
            )}/modules/${entityId}`;
            break;
        }

        push(redirectLink);
      },
      fetchPolicy: 'cache-and-network',
    },
  );

  return {
    getParent,
    data,
    loading,
  };
};
