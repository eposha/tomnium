import {
  InnerPaymentMethod,
  InnerPaymentArrow,
  PaymentMethodArrowRight,
  StyledText,
} from 'styles/payments';

interface IProps {
  title: string;
  choosePaymentMethod: () => void;
}

export const PaymentMethod: React.FC<IProps> = ({
  title,
  choosePaymentMethod,
}) => {
  return (
    <InnerPaymentMethod onClick={choosePaymentMethod}>
      <StyledText $description fontSize={'12px'} fontWeight={'500'}>
        {title}
      </StyledText>
      <InnerPaymentArrow>
        <PaymentMethodArrowRight />
      </InnerPaymentArrow>
    </InnerPaymentMethod>
  );
};
