import {useMutation} from '@apollo/client';

import {
  CREATE_VIDEO_MARK,
  ICreateMarkRequest,
} from '@/mutations/videoMarks/createVideoMarks';

export const useCreateVideoMark = () => {
  const [createMark, {loading}] =
    useMutation<ICreateMarkRequest>(CREATE_VIDEO_MARK);

  return {
    createMark,
    loading,
  };
};
