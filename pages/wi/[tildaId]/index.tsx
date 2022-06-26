import Head from 'next/head';
import type {GetServerSideProps, NextPage} from 'next';
import dynamic from 'next/dynamic';
import {initApollo} from '@/lib/apolloClient';
import {GET_TILDA_PAGE} from '@/query/tilda/tildaPage';
import {ReactElement, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {TildaLayout} from 'src/components/layout';
import {TildaFooterBottom} from 'styles/tilda/tilda';
import {useProduct} from '@/graph-hooks/product/useProduct';
import {useDirectories} from '@/graph-hooks/directories';

import {Media} from 'src/media-styles';

import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import {useUser} from '@/graph-hooks/user';
import {getImgSrc} from '@/helpers/image';
import {useCookieSettings, usePaymentPopup} from 'src/hooks';
import absoluteUrl from 'next-absolute-url';
import {GET_THREAD_BY_ID} from '@/query/threads/threadById';
import {CONSULTATION_QUERY} from '@/query/consultations';
import useNotificationsSubscription from '@/graph-hooks/notifications/useNotificationsSubscription';
import useSound from 'use-sound';
import {EventName} from 'src/graphql.schema';
import {toast} from 'react-toastify';
import {Toast} from 'styles/toaster/index';
import ToastNotificationText from '@/components/toaster/Toast';

const notificationSound = '/sounds/notification-sound.wav';

const HeaderNavigationMobile = dynamic(
  import('src/components/common/header-navigation/HeaderNavigationMobile'),
);

const HeaderNavigationDesktop = dynamic(
  import('src/components/common/header-navigation/HeaderNavigationDesktop'),
);

const FooterNavigation = dynamic(
  import('src/components/common/footer-navigation/FooterNavigation'),
);

const TildaComponent = dynamic(import('src/components/tilda'));

interface ITilda {
  html: string;
  css: string[];
  js: string[];
  url: string;
}

const Tilda: NextPage<ITilda> = ({html, css, js, url}) => {
  const router = useRouter();
  const {
    query: {tildaId},
  } = router;

  useCookieSettings();

  const minWidth = 992;

  const [productData, setProductData] = useState<null | any>(null);

  const {user, loading, refetch: refetchUser} = useUser();
  const {directories, loading: loadingDirectories} = useDirectories();

  const {data: subscriptionData} = useNotificationsSubscription();
  const [play] = useSound(notificationSound, {
    interrupt: true,
  });

  const {product, loading: loadingProduct} = useProduct(productData?.productId);

  const {Thread, Consultation, Plan, title, description} = product || {};

  const {isPaymentPopup, handleOpenPaymentPopup, handleClosePaymentPopup} =
    usePaymentPopup(!Boolean(product?.title));

  const responseUrl = `${url}/wi/${tildaId}`;

  const routerCurrentPage = () => {
    router.replace(responseUrl, undefined, {
      scroll: false,
      shallow: true,
    });
  };

  const item = {
    title,
    description,
    productId: productData?.productId,
    avatar: getImgSrc(
      Thread?.image?.[0]?.path ||
        Consultation?.image?.[0]?.path ||
        Plan?.imageWeb?.[0]?.path,
    ),
    currencies: directories?.Currencies,
    responseUrl,
  };

  useEffect(() => {
    //@ts-ignore
    if (typeof $ !== 'function') {
      router.reload();
    }
  }, [router]);

  useEffect(() => {
    if (productData) {
      handleOpenPaymentPopup();
    } else {
      handleClosePaymentPopup();
    }
  }, [productData]);

  useEffect(() => {
    const onHashChanged = () => {
      const isProductId = window.location.hash?.includes('#?productId');
      const isDesktop = document.documentElement.clientWidth >= minWidth;

      if (isProductId) {
        const urlParams = new URLSearchParams(
          window.location.hash.replace('#?', ''),
        );

        const productQuery = Object.fromEntries(urlParams.entries());

        if (!isDesktop) {
          router.push({
            pathname: `/tilda/${tildaId}/payment`,
            query: productQuery,
          });
          return;
        }

        setProductData(productQuery);
      }
    };

    onHashChanged();
    window.addEventListener('hashchange', onHashChanged);

    return () => {
      window.removeEventListener('hashchange', onHashChanged);
    };
  }, []);

  useEffect(() => {
    if (
      subscriptionData?.pushNotificationSubscription &&
      subscriptionData.pushNotificationSubscription?.Notification?.event !==
        EventName.EventNameUserUpdateMe
    ) {
      play();
      toast(
        <ToastNotificationText
          message={
            subscriptionData.pushNotificationSubscription?.Notification?.message
          }
        />,
      );
    }
  }, [play, subscriptionData]);

  return (
    <>
      <Head>
        {css.map((url) => (
          <link key={url} href={url} rel='stylesheet' />
        ))}

        {js.map((url) => (
          <script
            key={url}
            src={url}
            defer
            onLoad={() => {
              //
            }}
          />
        ))}
      </Head>
      <TildaLayout>
        <>
          <Toast />
          <Media at={'xs'}>
            <HeaderNavigationMobile isTildaPage user={user} />
          </Media>
          <Media greaterThan={'xs'}>
            <HeaderNavigationDesktop isTildaPage user={user} />
          </Media>
          {/* @ts-ignore */}
          {typeof $ === 'function' && <TildaComponent tildaHtml={html} />}

          {isPaymentPopup && (
            <PurchaseProducts
              type={'desktop'}
              item={item}
              user={user}
              onCloseModal={() =>
                handleClosePaymentPopup({callback: routerCurrentPage})
              }
              onOpenModal={handleOpenPaymentPopup}
              loading={loading || loadingProduct || loadingDirectories}
              refetchUser={refetchUser}
              isConsultation={!!Consultation}
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
          )}

          <TildaFooterBottom>
            <Media greaterThan={'xs'}>
              <FooterNavigation isTildaPage />
            </Media>
          </TildaFooterBottom>
        </>
      </TildaLayout>
    </>
  );
};

//@ts-ignore
Tilda.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default Tilda;

export const getServerSideProps: GetServerSideProps = async ({
  res,
  req,
  query,
}) => {
  const {tildaId} = query;

  const apolloClient = initApollo();
  const url = absoluteUrl(req).origin;

  const {
    data: {tildaPage},
  } = await apolloClient.query({
    query: GET_TILDA_PAGE,
    variables: {alias: tildaId},
  });

  if (!tildaPage) {
    return {
      notFound: true,
    };
  }

  const {
    html,
    TildaProject: {css, js},
  } = tildaPage;

  if (!html || !css || !js) {
    return {
      notFound: true,
    };
  }

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );

  return {
    props: {html, css, js, url},
  };
};
