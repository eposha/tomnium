import {FC} from 'react';
import {useRouter} from 'next/router';

import {usePaymentPopup} from 'src/hooks';
import {useUser} from '@/graph-hooks/user';
import {
  IPriceList,
  IPriceListOption,
  ICookiesProps,
  ICurrency,
} from '@/types/index';

import {PurchaseProducts} from '@/components/common/PurchaseProducts';
import {Price} from '../Price';
import * as UI from 'styles/courses/course-price-list/table';

import BooleanIcon from '../BooleanIcon';
import {getImgSrc} from '@/helpers/image';

interface IPriceListColumn {
  list: IPriceList;
  priceListOptions: IPriceListOption[];
  priceListsLength: number;
  settings: ICookiesProps;
  url: string;
  currencies?: ICurrency[];
}

export const PriceListColumn: FC<IPriceListColumn> = ({
  list,
  priceListOptions,
  priceListsLength,
  settings,
  url,
  currencies,
}) => {
  const {
    query: {threadId},
    asPath,
  } = useRouter();

  const {user, refetch: refetchUser} = useUser();

  const {
    id: productId,
    Plan,
    title,
    description,
    imageWeb,
  } = list.Tariff.Product;

  const {isPaymentPopup, handleOpenPaymentPopup, handleClosePaymentPopup} =
    usePaymentPopup(!Boolean(title));

  return (
    <>
      <UI.TableColumn
        key={list.id}
        $isLarge={priceListsLength === 1}
        $isMedium={priceListsLength === 2}
        $isSmall={priceListsLength >= 4}
        $isHighlight={list.isHighlight}>
        <UI.TableCell $isTitle>{list.title}</UI.TableCell>
        {priceListOptions.map((option) => {
          const currentPorperty = list.PriceListProperties.find(
            (prop) => prop.PriceListOption.id === option.id,
          );

          return currentPorperty ? (
            <UI.TableCell key={currentPorperty.id}>
              {currentPorperty.stringValue ?? (
                <BooleanIcon $isActive={currentPorperty.boolValue} />
              )}
            </UI.TableCell>
          ) : (
            <UI.TableCell key={`${list.id}${option.id}`} />
          );
        })}
        <UI.TableCell $isLast>
          <UI.PriceButtonWrapper>
            <UI.PriceTitle>
              <Price
                productId={list.Tariff.Product.id}
                tariffId={list.Tariff.id}
                saleId={list.Sale?.id}
                plan={Plan}
                user={user}
                settings={settings}
              />
            </UI.PriceTitle>

            <UI.Button
              width={priceListsLength < 4 ? '160px' : '100%'}
              $solid={!!Plan}
              onClick={handleOpenPaymentPopup}>
              {Plan ? 'Подписаться' : 'Купить'}
            </UI.Button>
          </UI.PriceButtonWrapper>
        </UI.TableCell>
      </UI.TableColumn>

      {isPaymentPopup && (
        <PurchaseProducts
          type='desktop'
          user={user}
          refetchUser={refetchUser}
          onCloseModal={handleClosePaymentPopup}
          onOpenModal={handleOpenPaymentPopup}
          item={{
            title,
            description,
            avatar: getImgSrc(imageWeb?.[0]?.path),

            productId,
            currencies,
            responseUrl: `${url}${asPath}`,
            saleId: list.Sale?.id,
            tariffId: list.Tariff?.id,
          }}
          dataEntitiesPage={
            threadId
              ? {
                  entitiesLink: '/courses',
                  nameEntitiesPage: 'Курсы',
                }
              : {
                  entitiesLink: '/user',
                  nameEntitiesPage: 'Мой профиль',
                }
          }
        />
      )}
    </>
  );
};
