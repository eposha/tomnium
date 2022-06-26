import {TypeUseChangeQualityItem} from 'src/hooks';
import {InnerAside, SpaceBetweenColumnInner} from 'styles/payments';
import {Footer} from '@/components/common/PurchaseProducts/Desktop/Aside/Product/Footer';
import {OrderPrice} from 'src/graphql.schema';
import {IUseOrderCheck} from '@/graph-hooks/payments';
import {IDataCurrency, IItem} from '@/components/common/PurchaseProducts';
import {ItemBlock} from '@/components/common/PurchaseProducts/Desktop/Item';

interface IProps {
  step: string;
  item?: IItem;
  price?: OrderPrice | null;
  dataQuality: TypeUseChangeQualityItem;
  dataCurrency: IDataCurrency;
  dataOrderCheck: IUseOrderCheck;
  onClose: () => void;
  changeStep: (titleStep: string) => void;
  paymentLink?: string;
  isShowQuality: boolean;
}

export const Product: React.FC<IProps> = ({
  step,
  item,
  dataOrderCheck,
  dataQuality,
  onClose,
  changeStep,
  dataCurrency,
  paymentLink,
  isShowQuality,
}) => {
  return (
    <InnerAside>
      <SpaceBetweenColumnInner>
        <ItemBlock
          isShowQuality={isShowQuality}
          step={step}
          size={'small'}
          item={item}
          dataOrderCheck={dataOrderCheck}
          dataQuality={dataQuality}
          isQuality={false}
          currency={dataCurrency.currency}
        />
        <Footer
          step={step}
          currencies={item?.currencies}
          onClose={onClose}
          changeStep={changeStep}
          dataCurrency={dataCurrency}
          paymentLink={paymentLink}
        />
      </SpaceBetweenColumnInner>
    </InnerAside>
  );
};
