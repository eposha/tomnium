import {AccordionItem} from '@/components/common/AccordionItem';
import {useFaqs} from '@/graph-hooks/faqs/useFaq';
import {useFaqsFromDirectories} from '@/graph-hooks/faqs/useFaqsFromDirectories';
import NextLink from 'next/link';
import {Box, Text} from 'styles/common';
import {InnerFAQ} from 'styles/payments';

interface IProps {
  type: string;
}

export const MobileFAQ: React.FC<IProps> = ({type}) => {
  const {faqId} = useFaqsFromDirectories(type);
  const {faqs} = useFaqs(faqId);
  return (
    <div>
      <Text
        fontSize={'16px'}
        $description
        color={'black'}
        fontWeight={'600'}
        textAlign={'center'}
        margin={'0 0 10px 0'}>
        FAQ оплата через кассу или терминал
      </Text>
      <Text
        fontSize={'12px'}
        $description
        color={'greyDark'}
        fontWeight={'500'}
        textAlign={'center'}
        margin={'0 0 15px 0'}>
        Если остались вопросы? Обратитесь в наш
        <NextLink href={'#'} passHref>
          <a>
            <Text
              fontSize={'12px'}
              $description
              color={'blueberry'}
              textAlign={'center'}
              fontWeight={'500'}>
              центр поддержки
            </Text>
          </a>
        </NextLink>
      </Text>
      {faqs && (
        <Box mt={'45px'}>
          <InnerFAQ>
            <Box mb={'10px'}>
              {faqs?.FaqOptions?.map((item, index) => (
                <AccordionItem
                  background={'white'}
                  size={'middle'}
                  item={item}
                  key={`${item.title}_${index}`}
                />
              ))}
            </Box>
          </InnerFAQ>
        </Box>
      )}
    </div>
  );
};
