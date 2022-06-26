import {IEntityParent} from '@/types/common';
import {gql} from '@apollo/client';

export interface IGetEntityParentResponse {
  entityGetParent: IEntityParent;
}

export const GET_PARENT = gql`
  query getEntitParent($entityName: EntityName!, $id: String!) {
    entityGetParent(entityName: $entityName, id: $id) {
      entityName
      id
      title
      type
      Parent {
        entityName
        id
        title
        Parent {
          entityName
          id
          title
          Parent {
            entityName
            id
            title
            Parent {
              entityName
              id
              title
              Parent {
                entityName
                id
                title
                Parent {
                  entityName
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;
