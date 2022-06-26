import {
  FAVORITE_DELETE,
  IFavoriteDeleteRequest,
} from '@/mutations/favorite/favoriteDelete';
import {DocumentNode, useMutation} from '@apollo/client';
import {Dispatch, SetStateAction} from 'react';
import useRoutes from 'src/hooks/auth/useRoutes';

export const useDeleteFavorite = (params: {
  setFavoriteState: Dispatch<SetStateAction<boolean | undefined>>;
  targetId?: string;
  targetType?: string;
  refetchQueries?: DocumentNode[];
}) => {
  const {handlePushLogin} = useRoutes();
  const [deleteFavorite, {loading}] = useMutation<IFavoriteDeleteRequest>(
    FAVORITE_DELETE,
    {
      variables: {
        ...params,
      },
      refetchQueries: params.refetchQueries ?? [],
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

  const handleDeleteFavorite = () => {
    try {
      deleteFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleDeleteFavorite,
    loading,
  };
};
