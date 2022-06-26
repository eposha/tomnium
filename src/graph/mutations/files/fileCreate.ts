import {MediaFragment} from '@/fragments/media';
import {gql} from '@apollo/client';
import {FileParentEntity} from 'src/graphql.schema';

export interface IFileCreateRequest {
  record: {
    entity: FileParentEntity;
    entityId: string;
    file: File;
  };
}

export interface IFileCreateResponse {
  fileCreate: {
    id: number;
    parentEntity: FileParentEntity;
    entityId: string;
    file: File;
  };
}

export const FILE_CREATE = gql`
  mutation fileCreate($record: FileCreateInput!) {
    fileCreate(record: $record) {
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
