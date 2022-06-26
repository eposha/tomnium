import {NextPage, GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import absoluteUrl from 'next-absolute-url';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import {Media} from 'src/media-styles';
import {getSlugifiedUrl} from '@/helpers/common';
import {useRedirect} from 'src/hooks';
import {GET_COURSE} from '@/query/courses/course';
import {GET_PRODUCT} from '@/query/product/product';
import {ISuccessPayment} from '@/components/common/PurchaseProducts';
import MobilePayment from '@/components/payments/MobilePayment';

interface IPaymentPageProps {
  url: string;
  dataEntitiesPage: ISuccessPayment;
  cancelLink: string;
}

const PaymentPage: NextPage<IPaymentPageProps> = ({url}) => {
  const {
    query: {courseId},
  } = useRouter();
  useRedirect('/404', 992);

  const record = getSlugifiedUrl(courseId);

  return (
    <Media lessThan={'md'}>
      <MobilePayment
        url={url}
        cancelLink={`/courses/${courseId}`}
        dataEntitiesPage={{
          entitiesLink: `/courses/${courseId}`,
          nameEntitiesPage: 'Вернуться',
          entityRefetchQueries: [
            {
              query: GET_COURSE,
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

export default PaymentPage;

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
