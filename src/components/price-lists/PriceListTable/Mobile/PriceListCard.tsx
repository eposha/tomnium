import {useRouter} from 'next/router';
import {useUser} from '@/graph-hooks/user';
import {useDirectories} from '@/graph-hooks/directories';
import {useCookieSettings} from 'src/hooks';

import {IPriceList, IPriceListOption} from '@/types/index';

import Select from '@/components/common/Select';
import {Button, Text} from 'styles/common';
import {Price} from '../Price';
import BooleanIcon from '../BooleanIcon';

import {FC} from 'react';

import * as UI from 'styles/courses/course-price-list/carousel';

interface IPriceListCard {
  list: IPriceList;
  priceListOptions: IPriceListOption[];
}

export const PriceListCard: FC<IPriceListCard> = ({list, priceListOptions}) => {
  const router = useRouter();
  const {courseId, threadId} = router.query;
  const {user} = useUser();
  const {settings, changeSettings} = useCookieSettings();
  const {directories, loading: loadingDirectories} = useDirectories();
  const {id: productId, Plan} = list.Tariff.Product;

  return (
    <UI.PriceListWrapper>
      <UI.PriceListInner>
        <UI.PriceListHeader>
          <UI.PriceListTitle>{list.title}</UI.PriceListTitle>
        </UI.PriceListHeader>

        <UI.PriceListBody>
          {priceListOptions?.map((option) => {
            const currentPorperty = list.PriceListProperties.find(
              (prop) => prop.PriceListOption.id === option.id,
            );

            const isActive =
              (typeof currentPorperty?.boolValue === 'boolean' &&
                currentPorperty?.boolValue) ||
              !!currentPorperty?.stringValue;

            return (
              <UI.PriceListItem key={option.id}>
                <BooleanIcon $isActive={isActive} />
                <UI.PriceListOption $isActive={isActive}>
                  {option.title}
                  <UI.PriceListProperty>
                    {currentPorperty?.stringValue
                      ? `. ${currentPorperty?.stringValue}`
                      : ''}
                  </UI.PriceListProperty>
                </UI.PriceListOption>
              </UI.PriceListItem>
            );
          })}
        </UI.PriceListBody>

        <UI.PriceListFooter>
          <UI.PriceListPrice>
            <Text fontSize='16px' fontWeight='600'>
              Цена
            </Text>
            <Price
              productId={productId}
              tariffId={list.Tariff.id}
              saleId={list.Sale?.id}
              plan={Plan}
              settings={settings}
              user={user}
            />
          </UI.PriceListPrice>
          <UI.PriceListButtons>
            <Select
              options={directories?.Currencies}
              value={directories?.Currencies?.find(
                (option) => option.id === settings.currencyId,
              )}
              onChange={(value) => changeSettings('currencyId', value.id)}
              valueField='id'
              labelField='code'
              instanceId='currency-select'
              id='currency-select'
              isLoading={loadingDirectories}
              menuPlacement='top'
            />
            <Button
              $fullWidth
              onClick={() =>
                router.push(
                  `/courses/${courseId}/threads/${threadId}/prices/${productId}/payment?saleId=${list.Sale?.id}&tariffId=${list.Tariff.id}`,
                )
              }>
              {Plan ? 'Подписаться' : 'Купить'}
            </Button>
          </UI.PriceListButtons>
        </UI.PriceListFooter>
      </UI.PriceListInner>
    </UI.PriceListWrapper>
  );
};
