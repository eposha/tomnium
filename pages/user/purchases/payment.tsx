import {NextPage, GetServerSideProps} from 'next';
import absoluteUrl from 'next-absolute-url';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import {Media} from 'src/media-styles';
import {useRedirect} from 'src/hooks';
import {GET_MY_SUBSCRIPTIONS} from '@/query/subscriptions/getMySubscriptions';
import {GET_PRODUCT} from '@/query/product/product';
import MobilePayment from '@/components/payments/MobilePayment';

interface IPriceListPaymentPageProps {
  url: string;
}

const PriceListPaymentPage: NextPage<IPriceListPaymentPageProps> = ({url}) => {
  useRedirect('/404', 992);

  return (
    <Media lessThan={'md'}>
      <MobilePayment
        url={url}
        cancelLink='/user/payments'
        dataEntitiesPage={{
          entitiesLink: '/user/purchases',
          nameEntitiesPage: 'Мои покупки',
          entityRefetchQueries: [
            {
              query: GET_MY_SUBSCRIPTIONS,
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
