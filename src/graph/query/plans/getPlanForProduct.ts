import {gql} from '@apollo/client';

export interface IGetPlanForProductResponse {
  planById: {
    productId: string;
  };
}

export interface IGetPlanForProductRequest {
  id?: string;
}

export const GET_PLAN_FOR_PRODUCT = gql`
  query planById($id: String!) {
    planById(id: $id) {
      productId
    }
  }
`;
