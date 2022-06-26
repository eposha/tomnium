import {gql} from '@apollo/client';
import {FavoriteTarget} from 'src/graphql.schema';

export interface IFavoriteCreateRequest {
  targetId: string;
  targetType: FavoriteTarget;
}

export const FAVORITE_CREATE = gql`
  mutation favoriteCreate($targetId: String!, $targetType: FavoriteTarget!) {
    favoriteCreate(targetId: $targetId, targetType: $targetType)
  }
`;
