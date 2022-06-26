import {GET_FAVORITES} from '@/query/favorites/getFavorites';
import {IConsultation} from '@/types/consultation';
import {ICourse} from '@/types/courses';
import {IDocument} from '@/types/document';
import {useQuery} from '@apollo/client';

export interface IGetFavoritesResponse {
  myFavorites: {
    Documents: IDocument[];
    Courses: ICourse[];
    Consultations: IConsultation[];
  };
}

export const useFavorites = () => {
  const {data, loading, error} = useQuery<IGetFavoritesResponse>(GET_FAVORITES);
  return {
    favoriteCourses: data?.myFavorites?.Courses || [],
    favoriteConsultations: data?.myFavorites?.Consultations || [],
    favoriteDocuments: data?.myFavorites?.Documents || [],
    loading,
    error,
  };
};

export default useFavorites;
