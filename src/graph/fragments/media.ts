import {gql} from '@apollo/client';

export const MediaFragment = gql`
  fragment MediaFragment on Media {
    path
    width
    height
    isOriginal
  }
`;
