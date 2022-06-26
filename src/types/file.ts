import {FileParentEntity} from 'src/graphql.schema';
import {IMedia} from '@/types//media';

export interface IFile {
  id: number;
  parentEntity: FileParentEntity;
  entityId: string;
  file: IMedia;
}
