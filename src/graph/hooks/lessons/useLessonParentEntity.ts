import {
  GET_PARENT,
  IParentRequest,
  IParentResponse,
} from '@/query/entityParent/getEntityParent';
import {useQuery} from '@apollo/client';
import {EntityName} from 'src/graphql.schema';

export const useLessonParentEntity = (id?: string[] | string) => {
  const {EntityNameLesson} = EntityName;
  const {data, loading, refetch} = useQuery<IParentResponse, IParentRequest>(
    GET_PARENT,
    {
      variables: { id, entityName: EntityNameLesson },
      skip: !id
    },
  );
  return {
    parent: data?.entityGetParent ?? null,
    loading,
    refetch,
  };
};
