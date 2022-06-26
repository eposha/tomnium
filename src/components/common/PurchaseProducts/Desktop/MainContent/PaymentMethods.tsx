import {PAYMENT_STEPS} from '@/components/common/PurchaseProducts';
import {
  ButtonLink,
  HeaderPaymentsMethods,
  InnerMainContent,
  InnerPaymentsMethods,
} from 'styles/payments';
import {Text} from 'styles/common';
import {IPaymentMethod} from '@/types/payments';
import {PaymentMethod} from '@/components/common/PurchaseProducts/Desktop/MainContent/PaymentMethod';

interface IProps {
  paymentMethods?: IPaymentMethod[] | null;
  choosePaymentMethod: (method: IPaymentMethod) => () => void;
  changeStep: (step: string) => void;
}

export const PaymentMethods: React.FC<IProps> = ({
  paymentMethods,
  changeStep,
  choosePaymentMethod,
}) => {
  const back = () => {
    changeStep(PAYMENT_STEPS.createOrder);
  };

  return (
    <InnerMainContent>
      <div>
        <HeaderPaymentsMethods>
          <Text $title>Выберите способ оплаты</Text>
          <ButtonLink onClick={back} color={'jordyBlue'}>
            Назад
          </ButtonLink>
        </HeaderPaymentsMethods>
        <InnerPaymentsMethods>
          {paymentMethods?.map((item) => {
            return (
              <PaymentMethod
                key={item.id}
                title={item?.displayName}
                choosePaymentMethod={choosePaymentMethod(item)}
              />
            );
          })}
        </InnerPaymentsMethods>
      </div>
    </InnerMainContent>
  );
};
