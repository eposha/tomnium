import {IMedia} from '@/types/media';
import {MediaFragment} from '@/fragments/media';
import {gql} from '@apollo/client';

export interface IGetSalesResponse {
  banners: {
    id: number;
    title: string;
    description: string;
    url: string;
    titleUrl: string;
    price?: string;
    oldPrice?: string;
    imageWeb?: IMedia[];
    imageMob?: IMedia[];
    Sale: {
      title: string;
      activeTo?: Date;
    };
  }[];
}
export const GET_SALES = gql`
  query banners {
    banners {
      id
      title
      subtitle
      description
      url
      titleUrl
      price
      oldPrice
      imageWeb {
        ...MediaFragment
      }
      imageMob {
        ...MediaFragment
      }
      Sale {
        title
        activeTo
      }
    }
  }
  ${MediaFragment}
`;
