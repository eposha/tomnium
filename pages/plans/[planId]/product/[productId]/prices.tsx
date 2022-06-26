import {FC} from 'react';
import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import {Media} from 'src/media-styles';
import {GET_PRICE_LISTS} from '@/query/priceList/getPriceLists';
import {GET_PRICE_LIST_OPTIONS} from '@/query/priceList/getPirceListOptions';

import Sidebar from '@/components/common/Sidebar';
import {PriceListTable} from '@/components/price-lists/PriceListTable';
import {Text} from 'styles/common';

import * as UI from 'styles/courses/course-price-list';

import {
  useGetPriceLists,
  useGetPriceListOptions,
} from '@/graph-hooks/priceList';
import absoluteUrl from 'next-absolute-url';
import {FaqContainer} from 'styles/consultations/page';
import {FAQ} from 'styles/courses';
import {AccordionItem} from '@/components/common/AccordionItem';
import {useFaqsFromDirectories} from '@/graph-hooks/faqs/useFaqsFromDirectories';
import {FAQ_TYPES} from '@/constants/faqs';
import {useFaqs} from '@/graph-hooks/faqs/useFaq';

interface ICoursePriceListPage {
  productId: string;
  url: string;
}

const PriceListPage: FC<ICoursePriceListPage> = ({url}) => {
  const router = useRouter();
  const {productId} = router.query;

  const {priceLists} = useGetPriceLists({productId});
  const {priceListOptions} = useGetPriceListOptions({productId});

  const {faqId} = useFaqsFromDirectories(FAQ_TYPES.FAQ_TYPE_PRICE_LIST);
  const {faqs} = useFaqs(faqId);

  return (
    <UI.Wrapper>
      <Media greaterThan={'xs'}>
        <Sidebar />
      </Media>

      <UI.Main>
        <Text fontSize='20px' margin='0 0 10px'>
          Сравнение тарифов
        </Text>

        <PriceListTable
          priceLists={priceLists}
          priceListOptions={priceListOptions}
          url={url}
        />
        <UI.Box>
          {faqs && (
            <FaqContainer mb={0}>
              <Text fontSize='20px'>Часто задаваемые вопросы</Text>
              <FAQ>
                {faqs?.FaqOptions?.map((item, index) => (
                  <AccordionItem item={item} key={`${item.title}_${index}`} />
                ))}
              </FAQ>
            </FaqContainer>
          )}
        </UI.Box>
      </UI.Main>
    </UI.Wrapper>
  );
};
export default PriceListPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    req,
    query: {productId},
  } = ctx;
  const client = initApollo(null, ctx);
  const url = absoluteUrl(req).origin;

  if (productId) {
    await client.query({
      query: GET_PRICE_LISTS,
      variables: {
        productId,
      },
    });

    await client.query({
      query: GET_PRICE_LIST_OPTIONS,
      variables: {
        productId,
      },
    });
  }

  return addApolloState(client, {
    props: {
      url,
    },
  });
};
