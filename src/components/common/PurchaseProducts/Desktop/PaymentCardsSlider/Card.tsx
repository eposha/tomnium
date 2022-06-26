import {
  FooterCard,
  InnerPaymentCard,
  MasterCardSVG,
  PaymentText,
  VisaSVG,
} from 'styles/payments';

interface IProps {
  id?: string;
  masked?: string;
  type?: string;
}

const getTitlePaymentCard = (masked?: string) => {
  return masked && `**** **** **** ${masked.slice(masked.length - 4)}`;
};

const Icon = ({type}: {type?: string}) => {
  if (type?.toLocaleLowerCase().includes('mastercard')) {
    return <MasterCardSVG />;
  }
  if (type?.toLocaleLowerCase().includes('visa')) {
    return <VisaSVG />;
  }

  return null;
};

export const PaymentCard: React.FC<IProps> = ({masked, type}) => {
  return (
    <InnerPaymentCard>
      <PaymentText
        $description
        fontSize={'14px'}
        fontWeight={'600'}
        textAlign={'center'}>
        {getTitlePaymentCard(masked)}
      </PaymentText>
      <FooterCard>
        <PaymentText
          fontSize={'10px'}
          fontWeight={'500'}
          $description
          lineClamp={1}>
          Test
        </PaymentText>
        <Icon type={type} />
      </FooterCard>
    </InnerPaymentCard>
  );
};
