import {AccordionItem} from '@/components/common/AccordionItem';
import {PaymentCardsSlider} from '@/components/common/PurchaseProducts/Desktop/PaymentCardsSlider';
import {FAQ_TYPES} from '@/constants/faqs';
import {useFaqs} from '@/graph-hooks/faqs/useFaq';
import {useFaqsFromDirectories} from '@/graph-hooks/faqs/useFaqsFromDirectories';
import {IUsePayByNewCard, IUsePayBySavedCard} from '@/graph-hooks/payments';
import {Card} from 'src/graphql.schema';
import {Box, Text} from 'styles/common';
import {InnerFAQ, InnerMainContentSecondary} from 'styles/payments';

interface IProps {
  paymentCards?: Card[] | null;
  dataPaymentBySavedCard: IUsePayBySavedCard;
  dataPaymentByNewCard: IUsePayByNewCard;
}

export const PaymentByCard: React.FC<IProps> = ({
  paymentCards,
  dataPaymentByNewCard,
  dataPaymentBySavedCard,
}) => {
  const {faqId} = useFaqsFromDirectories(FAQ_TYPES.FAQ_TYPE_CARD);
  const {faqs} = useFaqs(faqId);
  return (
    <InnerMainContentSecondary>
      <div>
        <Text $title margin={'0 0 20px 0'}>
          Оплата картой
        </Text>
        <PaymentCardsSlider
          paymentCards={paymentCards}
          dataPaymentByNewCard={dataPaymentByNewCard}
          dataPaymentBySavedCard={dataPaymentBySavedCard}
        />
      </div>
      {faqs && (
        <Box mt={'45px'}>
          <Text $title>FAQ</Text>
          <InnerFAQ>
            <Box mb={'10px'}>
              {faqs?.FaqOptions?.map((item, index) => (
                <AccordionItem
                  background={'whiteGrey'}
                  size={'middle'}
                  item={item}
                  key={`${item.title}_${index}`}
                />
              ))}
            </Box>
          </InnerFAQ>
        </Box>
      )}
    </InnerMainContentSecondary>
  );
};
