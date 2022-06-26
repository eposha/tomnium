import { gql } from '@apollo/client';
export const PRODUCT_ACTIVATE = gql`
  mutation productActivateBySubscription($id: String!){
   productActivateBySubscription(id: $id)
  }
`