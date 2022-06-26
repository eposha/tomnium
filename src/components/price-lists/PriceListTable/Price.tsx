import {FC, memo, useEffect, useMemo} from 'react';

import CoinIcon from 'public/icons/CoinSVG.svg';
import {useOrderCheck} from '@/graph-hooks/payments';
import {formatDuration, getUserCurrency} from '@/helpers/common';
import {ICookiesProps, IDuration} from '@/types/common';

import * as UI from 'styles/courses/course-price-list/price';
import {IUser} from '@/types/user';

interface IPriceListPriceProps {
  productId: string;
  tariffId?: number;
  saleId?: string;
  plan?: {
    id: string;
    duration: IDuration;
  };
  user: IUser | null;
  settings: ICookiesProps;
}

export const Price: FC<IPriceListPriceProps> = memo(function MemoPrice({
  productId,
  tariffId,
  saleId,
  plan,
  user,
  settings,
}) {
  const {
    price,
    getPrice,
    loading: loadingPrice,
  } = useOrderCheck({
    productCount: 1,
    productId,
    tariffId,
    saleId,
  });

  const currencyId = useMemo(
    () => user?.Currency?.id ?? settings?.currencyId,
    [user, settings],
  );

  const {total, difference, default: defaultPrice} = price || {};

  useEffect(() => {
    if (user) {
      getPrice();
    }
  }, [user]);

  return (
    <UI.Wrapper>
      <CoinIcon width={20} height={20} />
      {!loadingPrice && (
        <UI.Price>
          {!!total && total / 100}{' '}
          {getUserCurrency({currencyId: Number(currencyId)})}{' '}
          {!!difference && !!defaultPrice && !plan && (
            <UI.Discount>{defaultPrice / 100}</UI.Discount>
          )}
          {plan && (
            <>
              {' / '}
              <UI.Duration>на {formatDuration(plan.duration)}</UI.Duration>
            </>
          )}
        </UI.Price>
      )}
    </UI.Wrapper>
  );
});
