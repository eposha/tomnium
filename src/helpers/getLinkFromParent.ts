import {ENTITY_NAME_LINKS} from '@/constants/learning-process';
import {IEntityParent} from '../types';

export const getLinkFromParent = (parent?: IEntityParent | null): string => {
  if (parent) {
    const {id, entityName, Parent} = parent;

    const link = `${(ENTITY_NAME_LINKS as any)[entityName]}${id}`;

    if (Parent) {
      return getLinkFromParent(Parent).concat(link);
    }
    return link;
  }
  return '';
};
