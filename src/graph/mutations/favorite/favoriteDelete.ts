import {gql} from '@apollo/client';
import {FavoriteTarget} from 'src/graphql.schema';

export interface IFavoriteDeleteRequest {
  targetId: string;
  targetType: FavoriteTarget;
}

export const FAVORITE_DELETE = gql`
  mutation favoriteDelete($targetId: String!, $targetType: FavoriteTarget!) {
    favoriteDelete(targetId: $targetId, targetType: $targetType)
  }
`;
