import {AccordionItem} from '@/components/common/AccordionItem';
import FilterList, {
  FilterType,
  IFilterItem,
} from '@/components/common/filter-list/FilterList';
import Pagination from '@/components/common/pagination';
import {ConsultationCard} from '@/components/consultations/Card';
import {FAQ_TYPES} from '@/constants/faqs';
import {useConsultationsMy} from '@/graph-hooks/consultations';
import {useFaqs} from '@/graph-hooks/faqs/useFaq';
import {useFaqsFromDirectories} from '@/graph-hooks/faqs/useFaqsFromDirectories';
import {useUser} from '@/graph-hooks/user';
import {initApollo} from '@/lib/apolloClient';
import {CONSULTATIONS_QUERY, DATA_FILTER_QUERY} from '@/query/consultations';
import {IAuthor} from '@/types/author';
import {IPagination} from '@/types/common';
import {IConsultation} from '@/types/consultation';
import {GetServerSideProps, NextPage} from 'next';
import ReactLink from 'next/link';
import {useRouter} from 'next/router';
import {Fragment} from 'react';
import {AuthorEntityType, CategoryEntityType} from 'src/graphql.schema';
import {useFilterList} from 'src/hooks';
import {Media} from 'src/media-styles';
import {Text} from 'styles/common';
import {
  ContainerCards,
  Divider,
  FaqContainer,
  InnerCards,
  InnerHeader,
  LinkCompleted,
  MainWrapper,
} from 'styles/consultations/page';
import {FAQ} from 'styles/courses';

interface IProps {
  ssrConsultations: {
    Consultations?: IConsultation[];
    Pagination: IPagination;
  } | null;
  ssrCategories: IFilterItem<string>[];
  ssrAuthors: IFilterItem<string>[];
}

const ConsultationsPage: NextPage<IProps> = ({
  ssrConsultations,
  ssrCategories = [],
  // ssrAuthors = [],
}) => {
  const router = useRouter();
  const {
    // query: {categoryIds, authorIds},
    query: {categoryIds},
  } = router;

  const {user} = useUser();

  const {consultationsMy} = useConsultationsMy();

  const {handleFilterRoute: handleFilterCategory} = useFilterList({
    filterList: categoryIds,
    queryName: 'categoryIds',
  });

  const filtersCategories = {
    type: 'primary' as FilterType,
    title: 'Категории',
    filterItems: ssrCategories,
    handleFilterRoute: handleFilterCategory,
  };

  // const {handleFilterRoute: handleFilterAuthors} = useFilterList({
  //   filterList: authorIds,
  //   queryName: 'authorIds',
  // });

  // const filtersAuthors = {
  //   type: 'primary' as FilterType,
  //   title: 'Авторы',
  //   filterItems: ssrAuthors,
  //   handleFilterRoute: handleFilterAuthors,
  // };

  const isConsultationsMy = Boolean(consultationsMy?.length);

  const {faqId} = useFaqsFromDirectories(FAQ_TYPES.FAQ_TYPE_CONSULTATION);
  const {faqs} = useFaqs(faqId);

  return (
    <MainWrapper>
      <Media greaterThan={'md'}>
        <FilterList filtersData={filtersCategories} filterList={categoryIds} />
        {/* <FilterList
          filtersData={filtersAuthors}
          filterList={authorIds}
          isSearchInput
          isShowMoreButton
        /> */}
      </Media>

      <ContainerCards>
        <InnerHeader>
          <Text $title fontSize={'20px'}>
            Консультации
          </Text>

          {isConsultationsMy && (
            <ReactLink href={'#'}>
              <LinkCompleted>Завершенные</LinkCompleted>
            </ReactLink>
          )}
        </InnerHeader>

        {isConsultationsMy && (
          <InnerCards>
            {consultationsMy?.map((it) => (
              <Fragment key={it.id}>
                {!!it.ticketsCount && (
                  <ConsultationCard
                    {...it}
                    price={'Куплено'}
                    appointment={null}
                    isOwner={true}
                    entityLink={`/consultations/${it.slug ?? it.id}`}
                    currentCurrencyId={user?.Currency?.id}
                    meetingMethod={it.MeetingMethod}
                  />
                )}
                {it.Appointments?.map((appointment) => (
                  <ConsultationCard
                    {...it}
                    key={appointment.id}
                    ticketsCount={0}
                    price={'Забронировано'}
                    appointment={appointment}
                    isOwner={true}
                    entityLink={`/consultations/${
                      it.slug ?? it.id
                    }?appointmentId=${appointment.id}`}
                  />
                ))}
              </Fragment>
            ))}
          </InnerCards>
        )}

        {isConsultationsMy && (
          <Media greaterThan={'xs'}>
            <Divider margin={'0 0 20px 0'} />
          </Media>
        )}

        <Media at={'xs'}>
          <Text
            $title
            fontSize={'20px'}
            margin={isConsultationsMy ? '20px 0 12px 0' : '0 0 12px 0'}>
            Все консультанты
          </Text>
        </Media>

        <InnerCards>
          {ssrConsultations?.Consultations?.map((it) => {
            const link = `/consultations/${it.slug ?? it.id}`;
            return (
              <ConsultationCard
                key={it.id}
                {...it}
                appointment={it.Appointments?.[0]}
                entityLink={link}
                buyLink={link}
                currentCurrencyId={user?.Currency?.id}
                meetingMethod={it.MeetingMethod}
              />
            );
          })}
        </InnerCards>
        <Pagination
          //  @ts-ignore
          pagination={ssrConsultations?.Pagination}
          maxItems={25}
        />
        {faqs && (
          <FaqContainer>
            <Text fontSize='20px'>Часто задаваемые вопросы</Text>
            <FAQ>
              {faqs?.FaqOptions?.map((item, index) => (
                <AccordionItem item={item} key={`${item.title}_${index}`} />
              ))}
            </FAQ>
          </FaqContainer>
        )}
      </ContainerCards>
    </MainWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query, res} = ctx;
  const {categoryIds, authorIds, offset} = query;
  const apolloClient = initApollo();

  let dataConsultations;
  let dataFilter;

  try {
    dataFilter = await apolloClient.query({
      query: DATA_FILTER_QUERY,
      variables: {
        authorFilter: {type: AuthorEntityType.AuthorEntityTypeConsultation},
        categoryFilter: {
          type: CategoryEntityType.CategoryEntityTypeConsultation,
        },
      },
    });
    dataConsultations = await apolloClient.query({
      query: CONSULTATIONS_QUERY,
      variables: {
        filter: {
          categoryIds,
          authorIds,
        },
        offset: offset ? (+offset - 1) * 25 : undefined,
        limit: 25,
      },
    });
  } catch (e) {
    console.log(e);
  }

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );

  return {
    props: {
      ssrConsultations: dataConsultations?.data?.consultations || null,
      ssrCategories: dataFilter?.data?.categories || [],
      ssrAuthors:
        dataFilter?.data?.authors?.map((it: IAuthor) => ({
          ...it,
          displayName: it.fullName,
        })) || [],
    },
  };
};

export default ConsultationsPage;
