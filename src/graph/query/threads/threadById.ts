import {gql} from '@apollo/client';

import {IThread} from '@/types/thread';
import {ThreadFragment} from '@/fragments/thread';

export interface IGetThreadByIdResponse {
  threadById: IThread;
}

export const GET_THREAD_BY_ID = gql`
  query threadById($id: String!) {
    threadById(id: $id) {
      ...ThreadFragment
    }
  }
  ${ThreadFragment}
`;
