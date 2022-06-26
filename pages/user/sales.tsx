import SaleCard from '@/components/sales/SaleCard';
import {UserLayout} from '@/components/user';
import UserSideMenuMobile from '@/components/user/UserSideMenuMobile';
import {initApollo} from '@/lib/apolloClient';
import {GET_SALES} from '@/query/sales/getSales';
import {IMedia} from '@/types/media';
import {GetServerSideProps, NextPage} from 'next';
import {Fragment} from 'react';
import {Media} from 'src/media-styles';
import NotificationSVG from 'public/icons/profile/NotificationSVG.svg';

import * as UI from 'styles/sales/sale-card';
import {useUser} from '@/graph-hooks/user';

export interface SalesPageProps {
  ssrBanners: {
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

const SalesPage: NextPage<SalesPageProps> = ({ssrBanners}) => {
  const {user} = useUser();
  const role = user?.Role?.name;

  return (
    <UserLayout>
      <UI.SalePageWrapper>
        <Media at='xs'>
          <UserSideMenuMobile Icon={NotificationSVG} role={role} />
        </Media>
        <UI.SalePageTitle>Акции</UI.SalePageTitle>
        {ssrBanners?.map((banner) => (
          <Fragment key={banner.id}>
            <SaleCard banner={banner} />
          </Fragment>
        ))}
      </UI.SalePageWrapper>
    </UserLayout>
  );
};

export default SalesPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const client = initApollo(null, ctx);

  let sales;

  try {
    sales = await client.query({
      query: GET_SALES,
    });
  } catch (e) {
    if (e instanceof Error && e.message === 'Not authenticated') {
      return {
        redirect: {
          destination: `/auth/login`,
          permanent: false,
        },
      };
    }

    return {
      redirect: {
        destination: `/500`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ssrBanners: sales?.data?.banners || [],
    },
  };
};
