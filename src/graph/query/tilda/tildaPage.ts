import {gql} from '@apollo/client';

import {ITildaPage} from '@/types/tilda';

export interface IGetTildaPageResponse {
  tildaPage: ITildaPage;
}

export const GET_TILDA_PAGE = gql`
  query tildaPage($alias: String!) {
    tildaPage(alias: $alias) {
      id
      externalId
      html
      TildaProject {
        css
        js
      }
    }
  }
`;
