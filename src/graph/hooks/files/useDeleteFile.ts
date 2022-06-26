import {FILE_DELETE, IFileDeleteRequest} from '@/mutations/files/fileDelete';
import {GET_FILES} from '@/query/files/getFiles';
import {useMutation} from '@apollo/client';

export const useDeleteFile = () => {
  const [deleteFile, {loading}] = useMutation<IFileDeleteRequest>(FILE_DELETE, {
    refetchQueries: [GET_FILES],
  });

  const handleDeleteFile = (id: number) => {
    try {
      deleteFile({
        variables: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleDeleteFile,
    loading,
  };
};
