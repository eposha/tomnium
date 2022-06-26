import {TypesItem} from '@/components/common/PurchaseProducts';
import {InnerItemBlock} from 'styles/payments';
import {ContentItem} from '@/components/common/PurchaseProducts/Desktop/Item/ContentItem';
import {PriceBlock} from '@/components/common/PurchaseProducts/Desktop/Item/PriceBlock';

export const ItemBlock: React.FC<TypesItem> = ({
  item,
  isQuality,
  dataQuality,
  step,
  size,
  currency,
  dataOrderCheck,
  isShowQuality,
}) => {
  return (
    <InnerItemBlock size={size}>
      <ContentItem
        item={item}
        isQuality={isQuality}
        dataQuality={dataQuality}
        size={size}
        isShowQuality={isShowQuality}
      />
      <PriceBlock
        quality={dataQuality.quality}
        size={size}
        step={step}
        dataOrderCheck={dataOrderCheck}
        currency={currency}
        isShowQuality={isShowQuality}
      />
    </InnerItemBlock>
  );
};
