import {
  IDataActivePaymentCard,
  IDataPaymentMethod,
  PAYMENT_METHODS,
} from '@/components/common/PurchaseProducts';
import {Text, Box, Button} from 'styles/common';
import {Divider, InnerFlexCenter, InnerPaymentContent} from 'styles/payments';
import {IPaymentMethod} from '@/types/payments';
import {PaymentMethod} from '@/components/common/PurchaseProducts/Mobile/PaymentContent/PaymentMethod';
import {PaymentByCard} from '@/components/common/PurchaseProducts/Mobile/PaymentContent/PaymentByCard';
import {Card} from 'src/graphql.schema';

interface IProps {
  paymentMethods?: IPaymentMethod[] | null;
  choosePaymentSystem: () => void;
  dataPaymentMethod: IDataPaymentMethod;
  dataActivePaymentCard: IDataActivePaymentCard;
  paymentCards?: Card[] | null;
  onPayByNewCard: () => Promise<void>;
}

export const PaymentMethods: React.FC<IProps> = ({
  paymentMethods,
  paymentCards,
  dataPaymentMethod,
  dataActivePaymentCard,
  choosePaymentSystem,
  onPayByNewCard,
}) => {
  const {paymentMethod, setPaymentMethod} = dataPaymentMethod;

  return (
    <InnerPaymentContent>
      <Text
        $description
        fontSize={'16px'}
        fontWeight={'600'}
        color={'black'}
        margin={'0 0 15px 0'}>
        Выбор способа оплаты
      </Text>
      <Box mb={'15px'}>
        <Divider />
      </Box>
      <div>
        {paymentMethods?.map((it) => {
          const isActive = it.id === paymentMethod?.id;
          if (it.name === PAYMENT_METHODS.card && paymentCards?.length) {
            return (
              <PaymentByCard
                key={it.id}
                onPayByNewCard={onPayByNewCard}
                paymentCards={paymentCards}
                dataActivePaymentCard={dataActivePaymentCard}
                isActive={isActive}
                item={it}
                setPaymentMethod={setPaymentMethod}
              />
            );
          }
          return (
            <PaymentMethod
              key={it.id}
              item={it}
              setPaymentMethod={setPaymentMethod}
              isActive={isActive}
            />
          );
        })}
      </div>
      <InnerFlexCenter margin={'10px 0 0 0'}>
        <Button
          $solid={!Boolean(paymentMethod)}
          onClick={choosePaymentSystem}
          fontWeight={500}
          $fullWidth>
          Выбрать способ оплаты
        </Button>
      </InnerFlexCenter>
    </InnerPaymentContent>
  );
};
