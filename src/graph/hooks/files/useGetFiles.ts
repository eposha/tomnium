import {GET_FILES, IGetFilesResponse} from '@/query/files/getFiles';
import {useQuery} from '@apollo/client';
import {FileParentEntity} from 'src/graphql.schema';

export const useGetFiles = (filter: {
  parentEntity: FileParentEntity;
  entityId: string;
}) => {
  const {data, loading} = useQuery<IGetFilesResponse>(GET_FILES, {
    variables: {filter},
  });

  return {
    files: data?.files || [],
    loading,
  };
};
