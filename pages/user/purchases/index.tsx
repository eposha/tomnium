import {GetServerSideProps, NextPage} from 'next';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import absoluteUrl from 'next-absolute-url';

import {UserLayout} from 'src/components/user';
import {PurchaseEntity} from 'src/graphql.schema';
import {isNonEmptyArray} from '@/helpers/common';

import {GET_MY_SUBSCRIPTIONS} from '@/query/subscriptions/getMySubscriptions';
import {GET_PURCHASES} from '@/query/purchases/getPurchases';
import {useGetPurchases} from '@/graph-hooks/purchases/useGetPurchases';
import {useGetMySubscriptions} from '@/graph-hooks/subscriptions/useGetMySubscriptions';

import {ConsultationCard} from '@/components/consultations/Card';
import {PurchaseCard} from '@/components/purchases';
import Pagination from '@/components/common/pagination';
import CourseCard from '@/components/courses/Card';

import * as UI from 'styles/user/purchase';
import {useUser} from '@/graph-hooks/user';
import {useDirectories} from '@/graph-hooks/directories';
import {useGetPlanForProduct} from '@/graph-hooks/plan/useGetPlanForProduct';
import Link from 'next/link';

interface IPurchasesProps {
  url: string;
}

const Purchases: NextPage<IPurchasesProps> = ({url}) => {
  const {user, loading: loadingUser} = useUser();
  const {directories} = useDirectories();
  const {Subscription} = user || {};

  const {id: planId, productId} = Subscription?.Plan || {};

  const {productId: defaultProductId} = useGetPlanForProduct({
    id: directories?.Settings.ourBrands,
    skip: !!productId || loadingUser || !directories?.Settings.ourBrands,
  });

  const {subscriptions} = useGetMySubscriptions();
  const {
    purchases: purchasedConsultations,
    pagination: consultationsPagination,
  } = useGetPurchases({
    filter: {
      entity: PurchaseEntity.PurchaseEntityConsultation,
    },
  });

  const {purchases: purchasedThreads, pagination: coursesPagination} =
    useGetPurchases({
      filter: {
        entity: PurchaseEntity.PurchaseEntityThread,
      },
    });

  return (
    <UserLayout>
      <>
        <UI.PageWrapper>
          <UI.PageTitleWrapper>
            <UI.PageTitle>Мои покупки</UI.PageTitle>
            <Link
              href={`/plans/${
                planId ?? directories?.Settings?.ourBrands
              }/product/${productId ?? defaultProductId}/prices`}
              passHref>
              <UI.PageLink>Сравнить подписки</UI.PageLink>
            </Link>
          </UI.PageTitleWrapper>
          <UI.PurchasesContainer>
            {subscriptions?.map((subscription) => (
              <PurchaseCard
                key={subscription.id}
                subscription={subscription}
                url={url}
              />
            ))}
          </UI.PurchasesContainer>
        </UI.PageWrapper>
        {isNonEmptyArray(purchasedConsultations) && (
          <>
            <UI.PageSubtitle>Консультации</UI.PageSubtitle>

            {purchasedConsultations.map((purchase) => {
              const {
                id: consultationId,
                title,
                description,
                duration,
                image,
              } = purchase.Product.Consultation || {};

              return (
                <ConsultationCard
                  key={purchase.id}
                  price={`${purchase.Product.price / 100} $`}
                  entityLink={`/consultations/${consultationId}`}
                  title={title}
                  description={description}
                  duration={duration}
                  image={image}
                  isOwner
                  isPurchases
                />
              );
            })}
            <UI.PaginationContainer>
              <Pagination
                pagination={consultationsPagination}
                customOffsetName='consultationsOffset'
              />
            </UI.PaginationContainer>
          </>
        )}

        {isNonEmptyArray(purchasedConsultations) && (
          <>
            <UI.PageSubtitle>Потоки</UI.PageSubtitle>

            {purchasedThreads.map((purchase) => {
              const {
                id: threadId,
                title,
                description,
                Course,
              } = purchase.Product.Thread || {};

              return (
                Course && (
                  <CourseCard
                    key={threadId}
                    course={{
                      ...Course,
                      title,
                      description,
                      DefaultThread: {
                        ...purchase.Product.Thread,
                      },
                    }}
                  />
                )
              );
            })}
            <UI.PaginationContainer>
              <Pagination
                pagination={coursesPagination}
                customOffsetName='coursesOffset'
              />
            </UI.PaginationContainer>
          </>
        )}
      </>
    </UserLayout>
  );
};

export default Purchases;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {req} = ctx;

  const client = initApollo(null, ctx);
  const url = absoluteUrl(req).origin;

  await client.query({
    query: GET_MY_SUBSCRIPTIONS,
  });

  await client.query({
    query: GET_PURCHASES,
    variables: {
      filter: {
        entity: PurchaseEntity.PurchaseEntityConsultation,
      },
    },
  });

  await client.query({
    query: GET_PURCHASES,
    variables: {
      filter: {
        entity: PurchaseEntity.PurchaseEntityThread,
      },
    },
  });

  return addApolloState(client, {
    props: {
      url,
    },
  });
};
