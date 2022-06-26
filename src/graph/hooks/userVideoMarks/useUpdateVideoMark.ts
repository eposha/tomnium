import {useMutation} from '@apollo/client';

import {
  UPDATE_VIDEO_MARK,
  IUpdateMarkRequest,
} from '@/mutations/videoMarks/updateVideoMark';

export const useUpdateVideoMark = () => {
  const [updateMark, {loading}] =
    useMutation<IUpdateMarkRequest>(UPDATE_VIDEO_MARK);

  return {
    updateMark,
    loading,
  };
};
