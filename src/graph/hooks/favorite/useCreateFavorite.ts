import {
  FAVORITE_CREATE,
  IFavoriteCreateRequest,
} from '@/mutations/favorite/favoriteCreate';
import {useMutation} from '@apollo/client';
import {Dispatch, SetStateAction} from 'react';
import useRoutes from 'src/hooks/auth/useRoutes';

export const useCreateFavorite = (params: {
  setFavoriteState: Dispatch<SetStateAction<boolean | undefined>>;
  targetId?: string;
  targetType?: string;
}) => {
  const {handlePushLogin} = useRoutes();
  const [createFavorite, {loading}] = useMutation<IFavoriteCreateRequest>(
    FAVORITE_CREATE,
    {
      variables: {
        ...params,
      },
      onCompleted() {
        params.setFavoriteState((current) => !current);
      },
      onError(error) {
        if (error.message === 'Not authenticated') {
          handlePushLogin();
        }
      },
    },
  );

  const handleCreateFavorite = () => {
    try {
      createFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleCreateFavorite,
    loading,
  };
};
