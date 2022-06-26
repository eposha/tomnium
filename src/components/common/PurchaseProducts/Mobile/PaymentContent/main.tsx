import {
  IDataActivePaymentCard,
  IDataPaymentMethod,
  PAYMENT_STEPS,
} from '@/components/common/PurchaseProducts';
import {
  CreateOrderContent,
  PaymentMethods,
  MobilePaymentByCash,
  PaymentByOtherWay,
} from '@/components/common/PurchaseProducts/Mobile/PaymentContent';
import {IPaymentMethod} from '@/types/payments';
import {IUsePayByCash, IUsePay} from '@/graph-hooks/payments';
import {Card} from 'src/graphql.schema';

interface IProps {
  step: string;
  changeStep: (titleStep: string) => void;
  dataPaymentMethod: IDataPaymentMethod;
  dataActivePaymentCard: IDataActivePaymentCard;
  paymentMethods?: IPaymentMethod[] | null;
  openBankDetailsPopup: () => void;
  choosePaymentSystem: () => void;
  paymentCards?: Card[] | null;
  dataPaymentByCash: IUsePayByCash;
  onPayByNewCard: () => Promise<void>;
  paymentData: IUsePay;
  isShow: boolean;
}

export const PaymentContent: React.FC<IProps> = ({
  step,
  changeStep,
  dataPaymentMethod,
  dataActivePaymentCard,
  dataPaymentByCash,
  paymentMethods,
  openBankDetailsPopup,
  paymentCards,
  choosePaymentSystem,
  paymentData,
  onPayByNewCard,
  isShow,
}) => {
  if (!step || isShow) return null;

  switch (step) {
    case PAYMENT_STEPS.choosePaymentSystem:
      return (
        <PaymentMethods
          paymentCards={paymentCards}
          paymentMethods={paymentMethods}
          dataPaymentMethod={dataPaymentMethod}
          dataActivePaymentCard={dataActivePaymentCard}
          choosePaymentSystem={choosePaymentSystem}
          onPayByNewCard={onPayByNewCard}
        />
      );

    case PAYMENT_STEPS.payBy.cash:
      const {paymentDetails} = dataPaymentByCash;
      return (
        <MobilePaymentByCash
          changeStep={changeStep}
          openBankDetailsPopup={openBankDetailsPopup}
          bankDetails={{
            mfo: paymentDetails?.mfo,
            companyCode: paymentDetails?.edrpoyCode,
            accountNumber: paymentDetails?.accountNumber,
          }}
        />
      );

    case PAYMENT_STEPS.payBy.otherWay:
      const choseStepPaymentMethod = () => {
        changeStep(PAYMENT_STEPS.choosePaymentSystem);
      };
      return (
        <PaymentByOtherWay
          path={paymentData.paymentLink || ''}
          title={dataPaymentMethod.paymentMethod?.displayName || ''}
          choseStepPaymentMethod={choseStepPaymentMethod}
        />
      );

    case PAYMENT_STEPS.createOrder:
      return <CreateOrderContent changeStep={changeStep} />;

    default:
      return null;
  }
};
