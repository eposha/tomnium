import {EntityName} from 'src/graphql.schema';
import {gql} from '@apollo/client';

export interface IParentResponse {
  entityGetParent: {
    id?: string[] | string;
    entityName: EntityName;
    Parent: {
      id?: string[] | string;
      entityName: EntityName;
      Parent: {
        id?: string[] | string;
        entityName: EntityName;
      };
    };
  };
}

export interface IParentRequest {
  id?: string[] | string;
  entityName: EntityName;
}

export const GET_PARENT = gql`
  query entityGetParent($id: String!, $entityName: EntityName!) {
    entityGetParent(id: $id, entityName: $entityName) {
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
`;
