import {useMutation} from '@apollo/client';

import {
  DELETE_VIDEO_MARK,
  IDeleteMarkRequest,
} from '@/mutations/videoMarks/deleteVideoMark';

export const useDeleteVideoMark = () => {
  const [deleteMark, {loading}] =
    useMutation<IDeleteMarkRequest>(DELETE_VIDEO_MARK);

  return {
    deleteMark,
    loading,
  };
};
