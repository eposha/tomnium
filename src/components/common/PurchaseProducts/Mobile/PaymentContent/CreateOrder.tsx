import {InnerCreateOrderContent, InnerPaymentContent} from 'styles/payments';
import {Button, Text} from 'styles/common';
import {PAYMENT_STEPS} from '@/components/common/PurchaseProducts';

interface IProps {
  changeStep: (titleStep: string) => void;
}

export const CreateOrderContent: React.FC<IProps> = ({changeStep}) => {
  const handleChangeStep = () => {
    changeStep(PAYMENT_STEPS.choosePaymentSystem);
  };
  return (
    <InnerPaymentContent>
      <InnerCreateOrderContent>
        <Text
          $description
          fontSize={'16px'}
          fontWeight={'600'}
          color={'black'}
          textAlign={'center'}
          margin={'0 0 15px 0'}>
          Для продолжения оформления заказа
        </Text>
        <Text
          $description
          fontSize={'12px'}
          fontWeight={'500'}
          color={'greyDark'}
          textAlign={'center'}
          margin={'0 0 15px 0'}>
          Вам необходимо выбрать способ оплаты из{' '}
          <Text
            as={'span'}
            color={'jordyBlue'}
            $description
            fontSize={'12px'}
            fontWeight={'500'}>
            предоставленного перечня
          </Text>
        </Text>

        <Button $solid onClick={handleChangeStep}>
          Выбрать способ
        </Button>
      </InnerCreateOrderContent>
    </InnerPaymentContent>
  );
};
