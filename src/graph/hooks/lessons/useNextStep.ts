import {GET_NEXT_STEP} from './../../query/lessons/getNextStep';
import {useLazyQuery} from '@apollo/client';
import {useGetLazyParent} from './useGetParent';

export const useGetNextStep = () => {
  const [getSteps, {loading, data}] = useLazyQuery<any>(GET_NEXT_STEP, {
    onCompleted: () => {
      parentData.getParent({
        variables: {
          entityName: data.nextLearningStep.entityName,
          id: data.nextLearningStep.entityId,
        },
      });
    },
    fetchPolicy: 'cache-and-network',
  });

  const {entityId, entityName} = data?.nextLearningStep || {};

  const parentData = useGetLazyParent(entityId, entityName);

  return {
    data,
    loading,
    getSteps,
  };
};
