import {FC} from 'react';
import {Media} from 'src/media-styles';
import {IPriceList, IPriceListOption} from '@/types/price-list';
import {Desktop} from './Desktop';
import {Mobile} from './Mobile';
import {isNonEmptyArray} from '@apollo/client/utilities';

export interface IPriceListTable {
  priceLists: IPriceList[];
  priceListOptions: IPriceListOption[];
  url: string;
}

export const PriceListTable: FC<IPriceListTable> = ({
  priceLists,
  priceListOptions,
  url,
}) => {
  return (
    <>
      <Media at='xs'>
        {isNonEmptyArray(priceLists) && (
          <Mobile
            priceLists={priceLists}
            priceListOptions={priceListOptions}
            url={url}
          />
        )}
      </Media>
      <Media greaterThan='xs'>
        <Desktop
          priceLists={priceLists}
          priceListOptions={priceListOptions}
          url={url}
        />
      </Media>
    </>
  );
};
