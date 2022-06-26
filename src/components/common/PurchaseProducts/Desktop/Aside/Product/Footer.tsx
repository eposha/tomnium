import {InnerFooterProduct} from 'styles/payments';
import {ICurrency} from '@/types/currency';
import {Button} from 'styles/common';
import {
  IDataCurrency,
  PAYMENT_STEPS,
} from '@/components/common/PurchaseProducts';
import {Buttons} from '@/components/common/PurchaseProducts/Desktop/Aside/Product/Buttons';
import Select from '@/components/common/Select';

interface IProps {
  step: string;
  currencies?: ICurrency[];
  onClose: () => void;
  changeStep: (titleStep: string) => void;
  dataCurrency: IDataCurrency;
  paymentLink?: string;
}

export const Footer: React.FC<IProps> = ({
  currencies,
  step,
  onClose,
  changeStep,
  dataCurrency,
  paymentLink,
}) => {
  const {currency, changeCurrency} = dataCurrency;
  const backPrevStep = () => {
    changeStep(PAYMENT_STEPS.choosePaymentSystem);
  };
  return (
    <InnerFooterProduct>
      {[PAYMENT_STEPS.payBy.cash, PAYMENT_STEPS.payBy.otherWay].includes(
        step,
      ) ? (
        <Button $solid onClick={backPrevStep} $fullWidth>
          Назад
        </Button>
      ) : (
        <Select
          value={currency}
          onChange={changeCurrency}
          options={currencies || []}
          labelField='code'
          fontSize='12px'
          width='80px'
        />
      )}

      <Buttons
        paymentLink={paymentLink}
        step={step}
        onClose={onClose}
        changeStep={backPrevStep}
      />
    </InnerFooterProduct>
  );
};
