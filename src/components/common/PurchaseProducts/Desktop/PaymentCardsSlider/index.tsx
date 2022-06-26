import {Media} from 'src/media-styles';
import {Carousel} from '@/components/common/Carousel';
import {
  InnerNewCard,
  Container,
  Slide,
  NextArrowSlider,
  PrevArrowSlider,
} from 'styles/payments';
import {Text} from 'styles/common';
import {PaymentCard} from '@/components/common/PurchaseProducts/Desktop/PaymentCardsSlider/Card';
import {Card} from 'src/graphql.schema';
import {IUsePayByNewCard, IUsePayBySavedCard} from '@/graph-hooks/payments';

interface IProps {
  paymentCards?: Card[] | null;
  dataPaymentBySavedCard: IUsePayBySavedCard;
  dataPaymentByNewCard: IUsePayByNewCard;
}

export const PaymentCardsSlider: React.FC<IProps> = ({
  paymentCards,
  dataPaymentBySavedCard,
  dataPaymentByNewCard,
}) => {
  const {onPayByNewCard} = dataPaymentByNewCard;
  const {onPayBySavedCard} = dataPaymentBySavedCard;

  const payBySavedCard = (item: Card) => () => {
    onPayBySavedCard(item);
  };

  return (
    <Media greaterThan={'xs'}>
      <div style={{overflow: 'hidden', paddingBottom: 40}}>
        <Carousel
          options={{slidesToScroll: 1, align: 'start'}}
          // @ts-ignore
          NextArrow={NextArrowSlider}
          // @ts-ignore
          PrevArrow={PrevArrowSlider}>
          <Container>
            <InnerNewCard onClick={onPayByNewCard}>
              <Text
                fontSize={'14px'}
                fontWeight={'500'}
                color={'jordyBlue'}
                textAlign={'center'}
                $description>
                Оплатить новой картой
              </Text>
            </InnerNewCard>
            {paymentCards?.map((item) => (
              <Slide key={item.id} onClick={payBySavedCard(item)}>
                <PaymentCard
                  id={item.id}
                  masked={item.masked}
                  type={item.type}
                />
              </Slide>
            ))}
          </Container>
        </Carousel>
      </div>
    </Media>
  );
};
