import {
  ACTIVATE_FREE_THREAD,
  IFreeThreadRequest,
} from '@/mutations/threads/activateFreeThread';
import {GET_COURSE} from '@/query/courses/course';
import {useMutation} from '@apollo/client';
import router from 'next/router';
import useRoutes from 'src/hooks/auth/useRoutes';

export const useActivateFreeThread = (id: string[] | string | undefined) => {
  const {handlePushLogin} = useRoutes();
  const [activateFreeThread, {loading}] = useMutation<IFreeThreadRequest>(
    ACTIVATE_FREE_THREAD,
    {
      variables: {id},
      refetchQueries: [GET_COURSE],
      onError(error) {
        if (error.message === 'Not authenticated') {
          return handlePushLogin(true);
        }
        router.push('/404');
      },
    },
  );

  const handleActivateFreeThread = () => {
    try {
      activateFreeThread();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleActivateFreeThread,
    loading,
  };
};
