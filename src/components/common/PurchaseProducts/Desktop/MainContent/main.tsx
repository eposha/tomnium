import {InnerMainContent} from 'styles/payments';
import {
  PaymentByCard,
  PaymentByCash,
  PaymentByOtherWay,
  PaymentMethods,
} from '@/components/common/PurchaseProducts/Desktop/MainContent';
import {IPaymentMethod} from '@/types/payments';
import {
  IPaymentProps,
  PAYMENT_METHODS,
  PAYMENT_STEPS,
} from '@/components/common/PurchaseProducts';
import {ItemBlock} from '@/components/common/PurchaseProducts/Desktop/Item';

export type TProps = Omit<
  IPaymentProps,
  | 'dataUserCheck'
  | 'dataUpdateProfile'
  | 'dataEntitiesPage'
  | 'errors'
  | 'refetchUser'
>;

export const MainContent: React.FC<TProps> = ({
  step,
  changeStep,
  item,
  dataQuality,
  paymentMethods,
  dataPaymentMethod,
  dataCurrency,
  paymentData,
  dataPaymentByCash,
  dataOrderCheck,
  dataPaymentByNewCard,
  dataPaymentBySavedCard,
  dataPaymentCards,
  isShowQuality,
}) => {
  const {onPay} = paymentData;
  const {paymentMethod, setPaymentMethod} = dataPaymentMethod;
  const {paymentDetails, onPayByCash} = dataPaymentByCash;

  const choosePaymentMethod = (paymentMethod: IPaymentMethod) => () => {
    const {name} = paymentMethod;
    setPaymentMethod(paymentMethod);
    if ([PAYMENT_METHODS.cash, PAYMENT_METHODS.card].includes(name)) {
      return changeStep(PAYMENT_STEPS.payBy[name]);
    }
    changeStep(PAYMENT_STEPS.payBy.otherWay);
  };

  switch (step) {
    case PAYMENT_STEPS.auth:
    case PAYMENT_STEPS.createOrder:
      return (
        <InnerMainContent>
          <ItemBlock
            step={step}
            item={item}
            isQuality
            isShowQuality={isShowQuality}
            dataQuality={dataQuality}
            size={'large'}
            currency={dataCurrency.currency}
            dataOrderCheck={dataOrderCheck}
          />
        </InnerMainContent>
      );

    case PAYMENT_STEPS.choosePaymentSystem:
      return (
        <PaymentMethods
          paymentMethods={paymentMethods}
          changeStep={changeStep}
          choosePaymentMethod={choosePaymentMethod}
        />
      );

    case PAYMENT_STEPS.payBy.card:
      return (
        <PaymentByCard
          paymentCards={dataPaymentCards.paymentCards}
          dataPaymentByNewCard={dataPaymentByNewCard}
          dataPaymentBySavedCard={dataPaymentBySavedCard}
        />
      );

    case PAYMENT_STEPS.payBy.cash:
      return (
        <PaymentByCash
          onPayByCash={onPayByCash}
          bankDetails={{
            accountNumber: paymentDetails?.accountNumber,
            companyCode: paymentDetails?.edrpoyCode,
            mfo: paymentDetails?.mfo,
          }}
        />
      );

    case PAYMENT_STEPS.payBy.otherWay:
      return (
        <PaymentByOtherWay
          title={paymentMethod?.displayName || ''}
          onPay={onPay}
        />
      );

    default:
      return null;
  }
};
