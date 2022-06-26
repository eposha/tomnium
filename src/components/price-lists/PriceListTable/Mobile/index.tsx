import {FC} from 'react';
import {IPriceListTable} from '../index';

import {Carousel} from '@/components/common/Carousel';
import {PriceListCard} from './PriceListCard';

import * as UI from 'styles/courses/course-price-list/carousel';

export const Mobile: FC<IPriceListTable> = ({priceLists, priceListOptions}) => (
  <UI.Wrapper>
    <Carousel
      options={{slidesToScroll: 1, align: 'start'}}
      NextArrow={UI.NextArrow}
      PrevArrow={UI.PrevArrow}>
      <UI.Container>
        {priceLists.map((list) => (
          <UI.Slide key={list.id}>
            <PriceListCard list={list} priceListOptions={priceListOptions} />
          </UI.Slide>
        ))}
      </UI.Container>
    </Carousel>
  </UI.Wrapper>
);
