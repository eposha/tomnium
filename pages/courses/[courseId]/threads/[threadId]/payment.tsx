import HeadSeo from '@/components/common/HeadSeo';
import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import {useDirectories} from '@/graph-hooks/directories';
import {useUser} from '@/graph-hooks/user';
import {getImgSrc} from '@/helpers/image';
import {initApollo} from '@/lib/apolloClient';
import {GET_THREAD_BY_ID} from '@/query/threads/threadById';
import {IThread} from '@/types/thread';
import {IUser} from '@/types/user';
import {GetServerSideProps, NextPage} from 'next';
import absoluteUrl from 'next-absolute-url';
import {useRouter} from 'next/router';
import {useRedirect} from 'src/hooks/useRedirect';
import {Media} from 'src/media-styles';

interface IProps {
  ssrThread?: IThread | null;
  ssrUser?: IUser | null;
  url: string;
}

const PurchaseCourse: NextPage<IProps> = ({ssrThread, url}) => {
  const {
    asPath,
    query: {threadId},
  } = useRouter();
  useRedirect('/404', 992);
  const {user, loading, refetch: refetchUser} = useUser();
  const {directories} = useDirectories();

  const cutIndex = asPath.slice(0, -1).lastIndexOf('/');

  const imageMob = getImgSrc(ssrThread?.Product?.imageMob?.[0].path);

  const item = {
    title: ssrThread?.title,
    description: ssrThread?.description,
    productId: ssrThread?.Product?.id,
    avatar: imageMob,
    currencies: directories?.Currencies,
    responseUrl: `${url}/${asPath.slice(0, cutIndex)}`,
  };

  return (
    <Media lessThan={'md'}>
      <HeadSeo
        seoTitle={ssrThread?.Course?.seoTitle}
        seoDescription={ssrThread?.Course?.seoDescription}
      />
      <PurchaseProducts
        type={'mobile'}
        item={item}
        user={user}
        cancelLink={'/courses'}
        loading={loading}
        refetchUser={refetchUser}
        dataEntitiesPage={{
          entitiesLink: '/courses',
          nameEntitiesPage: 'Курсы',
          entityRefetchQueries: [
            {
              query: GET_THREAD_BY_ID,
              variables: {
                id: threadId,
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
  const {threadId} = query;
  const apolloClient = initApollo(null, ctx);

  const url = absoluteUrl(req).origin;

  let thread;
  try {
    thread = await apolloClient.query({
      query: GET_THREAD_BY_ID,
      variables: {
        id: threadId,
      },
    });
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      ssrThread: thread?.data?.threadById || {},
      url,
    },
  };
};

export default PurchaseCourse;
