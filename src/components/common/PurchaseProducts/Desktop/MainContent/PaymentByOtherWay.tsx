import {useEffect} from 'react';
import {InnerMainContentSecondary} from 'styles/payments';
import {Text, ContainerWithCustomScroll} from 'styles/common';
import {DesktopFAQ} from '@/components/common/PurchaseProducts/Desktop/MainContent';

interface IProps {
  title: string;
  onPay: () => void;
}

export const PaymentByOtherWay: React.FC<IProps> = ({title, onPay}) => {
  useEffect(() => {
    onPay();
  }, []);
  return (
    <InnerMainContentSecondary>
      <ContainerWithCustomScroll height={'421px'}>
        <Text $title>{title}</Text>
        <DesktopFAQ />
      </ContainerWithCustomScroll>
    </InnerMainContentSecondary>
  );
};
