import {ShowMoreBlock} from '@/components/common/PurchaseProducts/Mobile/ShowMoreBlock';
import {Text} from 'styles/common';
import {
  CardCheckBox,
  InnerCards,
  LabelPaymentCard,
  LightDivider,
  InnerPaymentCards,
} from 'styles/payments';
import {IPaymentMethod} from '@/types/payments';
import {IDataActivePaymentCard} from '@/components/common/PurchaseProducts';
import {ButtonWithArrow} from '@/components/common/PurchaseProducts/Mobile/ButtonWithArrow';
import CheckMark from 'public/icons/CheckMark.svg';
import {Dispatch, SetStateAction} from 'react';
import {Card} from 'src/graphql.schema';

interface IProps {
  paymentCards: Card[];
  isActive: boolean;
  dataActivePaymentCard: IDataActivePaymentCard;
  item: IPaymentMethod;
  setPaymentMethod: Dispatch<SetStateAction<IPaymentMethod | null>>;
  onPayByNewCard: () => Promise<void>;
}

const getTitlePaymentCard = (card?: Card | null) => {
  if (!card) return null;
  const typeArr = card.type?.split('_');
  const type = typeArr?.[typeArr?.length - 1] || '';
  return `${
    type?.[0]?.toUpperCase() + type?.slice(1)
  } **** **** **** ${card?.masked?.slice(card?.masked?.length - 4)}`;
};

const Header: React.FC<{card?: Card | null}> = ({card}) => (
  <div>
    <Text
      fontWeight={'500'}
      fontSize={'12px'}
      color={'black'}
      $description
      margin={'0 0 5px 0'}>
      Оплатить ранее сохраненной картой
    </Text>
    <Text fontWeight={'500'} fontSize={'12px'} color={'jordyBlue'} $description>
      {getTitlePaymentCard(card)}
    </Text>
  </div>
);

export const PaymentByCard: React.FC<IProps> = ({
  paymentCards,
  dataActivePaymentCard,
  item,
  setPaymentMethod,
  isActive,
  onPayByNewCard,
}) => {
  const {activePaymentCard, setActivePaymentCard} = dataActivePaymentCard;
  const handleClick = () => {
    setPaymentMethod(item);
  };
  const HeaderList = () => <Header card={activePaymentCard} />;

  const handleChange = (card: Card) => () => {
    setActivePaymentCard(card);
  };

  return (
    <InnerPaymentCards onClick={handleClick} $isActive={isActive}>
      <ShowMoreBlock
        WrapperComponent={InnerCards}
        Header={HeaderList}
        DividerComponent={LightDivider}
        isHeaderDivider={false}
        render={(isShowMore) => {
          if (!isShowMore) return null;
          return (
            <div>
              {paymentCards?.map((card) => {
                const isActive =
                  String(card.id) === String(activePaymentCard?.id);
                return (
                  <LabelPaymentCard key={card.id} htmlFor={String(card.id)}>
                    <input
                      type='checkbox'
                      id={String(card.id)}
                      onChange={handleChange(card)}
                    />
                    <CardCheckBox $isActive={isActive}>
                      {isActive && <CheckMark width={'10px'} height={'7px'} />}
                    </CardCheckBox>
                    <Text
                      fontWeight={'500'}
                      fontSize={'12px'}
                      color={isActive ? 'blueberry' : 'black'}
                      $description>
                      {getTitlePaymentCard(card)}
                    </Text>
                  </LabelPaymentCard>
                );
              })}
              <ButtonWithArrow
                margin={'5px 0 0 0'}
                text={'Оплатить новой картой'}
                border={'none'}
                handler={onPayByNewCard}
              />
            </div>
          );
        }}
      />
    </InnerPaymentCards>
  );
};
