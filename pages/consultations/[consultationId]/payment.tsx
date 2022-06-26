import {GetServerSideProps, NextPage} from 'next';
import {initApollo} from '@/lib/apolloClient';
import {CONSULTATION_QUERY} from '@/query/consultations';
import {IConsultation} from '@/types/consultation';
import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import {IUser} from '@/types/user';
import {Media} from 'src/media-styles';
import {useRedirect} from 'src/hooks/useRedirect';
import {useUser} from '@/graph-hooks/user';
import {getImgSrc} from '@/helpers/image';
import HeadSeo from '@/components/common/HeadSeo';
import {getSlugifiedUrl} from '@/helpers/common';
import absoluteUrl from 'next-absolute-url';
import {useRouter} from 'next/router';
import {useDirectories} from '@/graph-hooks/directories';

interface IProps {
  ssrConsultation?: IConsultation | null;
  ssrUser?: IUser | null;
  url: string;
}

const PurchaseConsultation: NextPage<IProps> = ({ssrConsultation, url}) => {
  const {
    asPath,
    query: {consultationId},
  } = useRouter();
  useRedirect('/404', 992);
  const {user, loading, refetch: refetchUser} = useUser();
  const {directories} = useDirectories();

  const item = {
    title: ssrConsultation?.title,
    description: ssrConsultation?.description,
    productId: ssrConsultation?.productId,
    avatar: getImgSrc(ssrConsultation?.Product?.imageMob?.[0].path),
    currencies: directories?.Currencies,
    responseUrl: `${url}/${asPath}`,
  };

  const record = getSlugifiedUrl(consultationId);

  return (
    <Media lessThan={'md'}>
      <HeadSeo
        seoTitle={ssrConsultation?.seoTitle}
        seoDescription={ssrConsultation?.seoDescription}
      />
      <PurchaseProducts
        type={'mobile'}
        item={item}
        user={user}
        cancelLink={'/consultations'}
        loading={loading}
        refetchUser={refetchUser}
        dataEntitiesPage={{
          entitiesLink: '/consultations',
          nameEntitiesPage: 'Мои консультации',
          entityRefetchQueries: [
            {
              query: CONSULTATION_QUERY,
              variables: {
                record,
              },
            },
          ],
        }}
      />
    </Media>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query, req} = ctx;
  const {consultationId} = query;
  const apolloClient = initApollo(null, ctx);

  const url = absoluteUrl(req).origin;
  const record = getSlugifiedUrl(consultationId);

  let consultation;
  try {
    consultation = await apolloClient.query({
      query: CONSULTATION_QUERY,
      variables: record,
    });
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      ssrConsultation: consultation?.data?.consultation || null,
      url,
    },
  };
};

export default PurchaseConsultation;
