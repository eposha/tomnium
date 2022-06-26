import {GET_FILES} from '@/query/files/getFiles';
import {
  FILE_CREATE,
  IFileCreateRequest,
  IFileCreateResponse,
} from '@/mutations/files/fileCreate';
import {useMutation} from '@apollo/client';
import {SubmitHandler} from 'react-hook-form';
import {FileParentEntity} from 'src/graphql.schema';

interface IFileCreateHookSubmit {
  file: File;
}

export const useFileCreate = (params: {
  entityId: string;
  entity: FileParentEntity;
}) => {
  const {entityId, entity} = params;

  const [onFileCreate, {loading}] = useMutation<
    IFileCreateResponse,
    IFileCreateRequest
  >(FILE_CREATE, {refetchQueries: [GET_FILES]});

  const onSubmit: SubmitHandler<IFileCreateHookSubmit> = async (record) => {
    try {
      await onFileCreate({
        variables: {
          record: {
            ...record,
            entityId,
            entity,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //@ts-ignore
    handleSubmit: onSubmit,
    loading,
  };
};
