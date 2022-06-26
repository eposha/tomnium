import {
  ILeaveThreadRequest,
  LEAVE_THREAD,
} from '@/mutations/threads/leaveThread';
import {GET_COURSE} from '@/query/courses/course';
import {useMutation} from '@apollo/client';
import useRoutes from 'src/hooks/auth/useRoutes';

export const useLeaveThread = (
  id: string[] | string | undefined,
  onSuccess: () => void,
) => {
  const {handlePushLogin} = useRoutes();
  const [leaveThread, {loading}] = useMutation<ILeaveThreadRequest>(
    LEAVE_THREAD,
    {
      variables: {id},
      refetchQueries: [GET_COURSE],
      onError(error) {
        if (error.message === 'Not authenticated') {
          handlePushLogin();
        }
      },
      onCompleted() {
        onSuccess();
      },
    },
  );

  const handleLeaveThread = () => {
    try {
      leaveThread();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleLeaveThread,
    loading,
  };
};
