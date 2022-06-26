import {InnerPaymentMethod, StyledText} from 'styles/payments';
import {Dispatch, SetStateAction} from 'react';
import {IPaymentMethod} from '@/types/payments';

interface IProps {
  isActive: boolean;
  item: IPaymentMethod;
  setPaymentMethod: Dispatch<SetStateAction<IPaymentMethod | null>>;
}

export const PaymentMethod: React.FC<IProps> = ({
  item,
  setPaymentMethod,
  isActive,
}) => {
  const handleClick = () => {
    setPaymentMethod(item);
  };

  return (
    <InnerPaymentMethod onClick={handleClick} $isActive={isActive}>
      <StyledText $description fontSize={'12px'} fontWeight={'500'}>
        {item.displayName}
      </StyledText>
    </InnerPaymentMethod>
  );
};
