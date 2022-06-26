import {MediaFragment} from '@/fragments/media';
import {IMedia} from '@/types/media';
import {gql} from '@apollo/client';
import {FileParentEntity} from 'src/graphql.schema';

export interface IGetFilesResponse {
  files: {
    id: number;
    parentEntity: FileParentEntity;
    entityId: string;
    file: IMedia;
  }[];
}

export const GET_FILES = gql`
  query getFiles($filter: FilesFilterInput!) {
    files(filter: $filter) {
      id
      parentEntity
      entityId
      file {
        ...MediaFragment
      }
    }
  }
  ${MediaFragment}
`;
