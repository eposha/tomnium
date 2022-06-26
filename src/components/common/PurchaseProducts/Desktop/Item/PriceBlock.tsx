import {InnerPriceRow} from 'styles/payments';
import {Text} from 'styles/common';
import {getPrice} from '@/helpers/price';
import {PAYMENT_STEPS} from '@/components/common/PurchaseProducts';
import {OrderPrice} from 'src/graphql.schema';
import {ICurrency} from '@/types/currency';
import {IUseOrderCheck} from '@/graph-hooks/payments';
import {PromoCodeInput} from '@/components/common/PurchaseProducts/Desktop/MainContent';

interface IProps {
  price?: OrderPrice | null;
  step: string;
  size: 'large' | 'small';
  quality: number;
  currency?: ICurrency | null;
  dataOrderCheck: IUseOrderCheck;
  isShowQuality: boolean;
}

export const PriceBlock: React.FC<IProps> = ({
  dataOrderCheck,
  step,
  size,
  quality,
  currency,
  isShowQuality,
}) => {
  const {price} = dataOrderCheck;
  const fontSizePrimary = size === 'large' ? '14px' : '12px';
  const fontSizeSecondary = size === 'large' ? '16px' : '14px';
  const currencyCode = currency?.code;
  return (
    <div>
      {step === PAYMENT_STEPS.createOrder && (
        <PromoCodeInput dataOrderCheck={dataOrderCheck} />
      )}
      {size === 'small' && isShowQuality && (
        <InnerPriceRow>
          <Text
            $description
            fontSize={fontSizePrimary}
            fontWeight={'600'}
            color={'greyDark'}>
            Количество:
          </Text>
          <Text
            $description
            fontSize={fontSizePrimary}
            fontWeight={'600'}
            color={'greyDark'}>
            {quality}шт.
          </Text>
        </InnerPriceRow>
      )}
      {!!price?.difference && (
        <>
          <InnerPriceRow>
            <Text
              $description
              fontSize={fontSizePrimary}
              fontWeight={'600'}
              color={'greyDark'}>
              Общая цена без скидки:
            </Text>
            <Text
              $description
              fontSize={fontSizePrimary}
              fontWeight={'600'}
              color={'greyDark'}>
              {getPrice(price?.default)} {currencyCode}
            </Text>
          </InnerPriceRow>

          <InnerPriceRow>
            <Text
              $description
              fontSize={fontSizePrimary}
              fontWeight={'600'}
              color={'greyDark'}>
              Скидка:
            </Text>
            <Text
              $description
              fontSize={fontSizePrimary}
              fontWeight={'600'}
              color={'red'}>
              {getPrice(price?.difference)} {currencyCode}
            </Text>
          </InnerPriceRow>
        </>
      )}
      <InnerPriceRow>
        <Text
          $description
          fontSize={fontSizeSecondary}
          fontWeight={'600'}
          color={'black'}>
          Итого за продукт:
        </Text>
        <Text
          $description
          fontSize={fontSizeSecondary}
          fontWeight={'600'}
          color={'black'}>
          {getPrice(price?.total)} {currencyCode}
        </Text>
      </InnerPriceRow>
    </div>
  );
};
