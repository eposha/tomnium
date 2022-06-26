import {ShowMoreBlock} from '@/components/common/PurchaseProducts/Mobile/ShowMoreBlock';
import styled from 'styled-components';
import NextImage from 'next/image';
import {IDataCurrency, IItem} from '@/components/common/PurchaseProducts';
import {Text, Box, Button} from 'styles/common';
import {
  ChangingQualityButton,
  InnerFooterProduct,
  MobileInnerPriceRow,
  InnerQuality,
  InnerQualityButtons,
  WrapperButtons,
  Divider,
} from 'styles/payments';
import {getPrice} from '@/helpers/price';
import Select from '@/components/common/Select';
import NextLink from 'next/link';
import {TypeUseChangeQualityItem} from 'src/hooks';
import {OrderPrice} from 'src/graphql.schema';
import {ButtonWithArrow} from '@/components/common/PurchaseProducts/Mobile/ButtonWithArrow';
import {DEFAULT_IMAGE} from '@/constants/common';

const InnerImage = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

interface IProps {
  item?: IItem;
  dataQuality: TypeUseChangeQualityItem;
  cancelLink: string;
  dataCurrency: IDataCurrency;
  openPromoPopup: () => void;
  price?: OrderPrice | null;
  isLogin: boolean;
  isShowQuality: boolean;
}

export const ProductCard: React.FC<IProps> = ({
  item,
  dataQuality,
  cancelLink,
  dataCurrency,
  openPromoPopup,
  price,
  isLogin,
  isShowQuality,
}) => {
  const {currency, changeCurrency} = dataCurrency;
  const {quality, decreaseQuality, increaseQuality} = dataQuality;
  const currencyCode = currency?.code;

  return (
    <ShowMoreBlock
      title={'Перечень продуктов'}
      render={(isShowMore) => {
        return (
          <div>
            {item?.avatar && (
              <InnerImage>
                <NextImage
                  width={'175%'}
                  height={'100%'}
                  layout={'responsive'}
                  src={item?.avatar || DEFAULT_IMAGE}
                  priority
                />
              </InnerImage>
            )}
            <Text
              $description
              fontSize={'14px'}
              fontWeight={'600'}
              color={'black'}
              margin={'10px 0 10px 0'}
              lineClamp={2}>
              {item?.title}
            </Text>
            <Text
              $description
              fontSize={'12px'}
              fontWeight={'500'}
              color={'greyDark'}
              margin={'0 0 20px 0'}
              lineClamp={3}>
              {item?.description}
            </Text>
            {isLogin && (
              <ButtonWithArrow
                text={'Ввести промокод'}
                handler={openPromoPopup}
                margin={'20px 0'}
              />
            )}
            {isShowMore && isShowQuality && (
              <MobileInnerPriceRow>
                <Text
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'greyDark'}>
                  Количество:
                </Text>
                <WrapperButtons>
                  <InnerQualityButtons>
                    <ChangingQualityButton onClick={increaseQuality}>
                      +
                    </ChangingQualityButton>
                    <InnerQuality>{quality}</InnerQuality>
                    <ChangingQualityButton onClick={decreaseQuality}>
                      -
                    </ChangingQualityButton>
                  </InnerQualityButtons>
                </WrapperButtons>
              </MobileInnerPriceRow>
            )}

            {isShowMore && !!price?.difference && (
              <MobileInnerPriceRow>
                <Text
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'greyDark'}>
                  Общая цена без скидки:
                </Text>
                <Text
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'greyDark'}>
                  {getPrice(price?.default)} {currencyCode}
                </Text>
              </MobileInnerPriceRow>
            )}
            {!!price?.difference && (
              <MobileInnerPriceRow>
                <Text
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'greyDark'}>
                  Скидка:
                </Text>
                <Text
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'red'}>
                  {getPrice(price?.difference)} {currencyCode}
                </Text>
              </MobileInnerPriceRow>
            )}
            {!isShowMore && (
              <Box mb={'5px'}>
                <Divider />
              </Box>
            )}
            <MobileInnerPriceRow>
              <Text
                $description
                fontSize={'14px'}
                fontWeight={'600'}
                color={'black'}>
                Итого за продукт:
              </Text>
              <Text
                $description
                fontSize={'14px'}
                fontWeight={'600'}
                color={'blueberry'}>
                {getPrice(price?.total)} {currencyCode}
              </Text>
            </MobileInnerPriceRow>
            {isShowMore && isLogin && (
              <Box mt={'20px'}>
                <InnerFooterProduct>
                  {currency && (
                    <Select
                      labelField='code'
                      fontSize='12px'
                      width='80px'
                      value={currency}
                      onChange={changeCurrency}
                      options={item?.currencies || []}
                    />
                  )}
                  <NextLink href={cancelLink} passHref>
                    <a>
                      <Button $solid color={'red'} $fullWidth>
                        Отменить
                      </Button>
                    </a>
                  </NextLink>
                </InnerFooterProduct>
              </Box>
            )}
          </div>
        );
      }}
    />
  );
};
