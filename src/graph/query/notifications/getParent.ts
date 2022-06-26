import {gql} from '@apollo/client';
import {EntityName, Parent} from 'src/graphql.schema';

export interface IGetParentResponse {
  entityGetParent: Parent;
}

export interface IGetParentRequest {
  entityName: EntityName;
  id: string;
}

export const GET_PARENT = gql`
  query getParent($entityName: EntityName!, $id: String!) {
    entityGetParent(entityName: $entityName, id: $id) {
      entityName
      id
      Parent {
        entityName
        id
        Parent {
          entityName
          id
          Parent {
            entityName
            id
            Parent {
              entityName
              id
              Parent {
                entityName
                id
                Parent {
                  entityName
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;
