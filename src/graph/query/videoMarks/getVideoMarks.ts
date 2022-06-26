import {gql} from '@apollo/client';

import {PaginationFragment} from '@/fragments/pagination';

import {IPagination} from '@/types/common';
import {UserVideoMark} from 'src/graphql.schema';

export interface IGetVideoMarksResponse {
  userVideoMarks: {
    UserVideoMarks: UserVideoMark[];
    Pagination: IPagination;
  };
}

export const GET_VIDEO_MARKS = gql`
  query userVideoMarks(
    $limit: Int
    $offset: Int
    $filter: UserVideoMarksFilterInput
  ) {
    userVideoMarks(limit: $limit, offset: $offset, filter: $filter) {
      UserVideoMarks {
        id
        videoId
        timing
        text
      }
      Pagination {
        ...PaginationFragment
      }
    }
  }
  ${PaginationFragment}
`;
