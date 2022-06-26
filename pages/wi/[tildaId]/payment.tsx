import {NextPage, GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import absoluteUrl from 'next-absolute-url';
import {Media} from 'src/media-styles';

import {useRedirect} from 'src/hooks';
import {useUser} from '@/graph-hooks/user';
import {useDirectories} from '@/graph-hooks/directories';
import {GET_THREAD_BY_ID} from '@/query/threads/threadById';

import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import {useProduct} from '@/graph-hooks/product/useProduct';

import {CONSULTATION_QUERY} from '@/query/consultations';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import {getNonOriginalImage} from '@/helpers/common';
import {GET_PRODUCT} from '@/query/product/product';

interface IPriceListPaymentPageProps {
  url: string;
}

const PriceListPaymentPage: NextPage<IPriceListPaymentPageProps> = ({url}) => {
  const {
    query: {productId, saleId, tariffId},
  } = useRouter();
  useRedirect('/404', 992);

  const {user, refetch: refetchUser, loading: loadingUser} = useUser();
  const {directories, loading: loadingDirectories} = useDirectories();

  const {product, loading: loadingProduct} = useProduct(productId as string);

  const {Thread, Consultation, Plan, title, description, imageMob} =
    product || {};

  return (
    <Media lessThan={'md'}>
      <PurchaseProducts
        type='mobile'
        user={user}
        refetchUser={refetchUser}
        cancelLink='/'
        loading={loadingUser || loadingDirectories || loadingProduct}
        isConsultation={!!Consultation}
        item={{
          title,
          description,
          avatar: getNonOriginalImage(imageMob),
          productId: `${productId}`,
          saleId: saleId ? `${saleId}` : undefined,
          tariffId: tariffId ? Number(tariffId) : undefined,
          currencies: directories?.Currencies,
          responseUrl: `${url}`,
        }}
        dataEntitiesPage={{
          entitiesLink:
            (!!Thread && '/courses') ||
            (!!Consultation && '/consultations') ||
            (!!Plan && '/') ||
            '/',
          nameEntitiesPage:
            (!!Thread && 'Курсы') ||
            (!!Consultation && 'Мои консультации') ||
            (!!Plan && 'План') ||
            'План',

          entityRefetchQueries: [
            {
              query:
                (!!Thread && GET_THREAD_BY_ID) ||
                (!!Consultation && CONSULTATION_QUERY) ||
                (!!Plan && CONSULTATION_QUERY) ||
                CONSULTATION_QUERY,
              variables: {
                id: Thread?.id || Consultation?.id || Plan?.id,
              },
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
  const apolloClient = initApollo();

  const url = absoluteUrl(req).origin;

  try {
    await apolloClient.query({
      query: GET_PRODUCT,
      variables: {
        id: productId,
      },
    });
  } catch (e) {
    console.log(e);
  }

  return addApolloState(apolloClient, {
    props: {
      url,
    },
  });
};
