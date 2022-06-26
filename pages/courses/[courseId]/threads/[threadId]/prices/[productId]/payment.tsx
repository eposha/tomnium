import {NextPage, GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import absoluteUrl from 'next-absolute-url';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import {Media} from 'src/media-styles';

import {useRedirect} from 'src/hooks';
import {useUser} from '@/graph-hooks/user';
import {useDirectories} from '@/graph-hooks/directories';
import {GET_THREAD_BY_ID} from '@/query/threads/threadById';

import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import {useProduct} from '@/graph-hooks/product/useProduct';
import {GET_PRODUCT} from '@/query/product/product';
import {getImgSrc} from '@/helpers/image';
import {getSlugifiedUrl} from '@/helpers/common';
import {GET_COURSE} from '@/query/courses/course';

interface IPriceListPaymentPageProps {
  url: string;
}

const PriceListPaymentPage: NextPage<IPriceListPaymentPageProps> = ({url}) => {
  const {
    asPath,
    query: {courseId, threadId, productId, saleId, tariffId},
  } = useRouter();
  useRedirect('/404', 992);
  const {user, refetch: refetchUser, loading: loadingUser} = useUser();
  const {directories, loading: loadingDirectories} = useDirectories();

  const {product} = useProduct(`${productId}`);
  const {title, description} = product || {};

  const courseRecord = getSlugifiedUrl(courseId);

  return (
    <Media lessThan={'md'}>
      <PurchaseProducts
        type='mobile'
        user={user}
        refetchUser={refetchUser}
        cancelLink={`/courses/${courseId}/threads/${threadId}/prices/${productId}`}
        loading={loadingUser || loadingDirectories}
        item={{
          title,
          description,
          avatar: getImgSrc(product?.imageMob?.[0]?.path),
          productId: `${productId}`,
          saleId: saleId ? `${saleId}` : undefined,
          tariffId: tariffId ? Number(tariffId) : undefined,
          currencies: directories?.Currencies,
          responseUrl: `${url}${asPath}`,
        }}
        dataEntitiesPage={{
          entitiesLink: '/courses',
          nameEntitiesPage: 'Курсы',
          entityRefetchQueries: [
            {
              query: GET_THREAD_BY_ID,
              variables: {id: threadId},
            },
            {
              query: GET_COURSE,
              variables: courseRecord,
            },
          ],
        }}
      />
    </Media>
  );
};

export default PriceListPaymentPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query, req} = ctx;
  const {productId} = query;
  const apolloClient = initApollo(null, ctx);

  const url = absoluteUrl(req).origin;

  await apolloClient.query({
    query: GET_PRODUCT,
    variables: {
      id: productId,
    },
  });

  return addApolloState(apolloClient, {
    props: {
      url,
    },
  });
};
