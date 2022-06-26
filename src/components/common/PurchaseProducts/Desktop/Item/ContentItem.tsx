import {Box, Text} from 'styles/common';
import Image from 'next/image';
import {
  ChangingQualityButton,
  InnerQualityButtons,
  InnerItemContent,
  InnerImage,
  InnerItem,
  InnerQuality,
  WrapperButtons,
} from 'styles/payments';
import {TypeUseChangeQualityItem} from 'src/hooks';
import {IItem} from '@/components/common/PurchaseProducts';
import {DEFAULT_IMAGE} from '@/constants/common';

interface IProps {
  item?: IItem;
  isQuality: boolean;
  dataQuality: TypeUseChangeQualityItem;
  size: 'large' | 'small';
  isShowQuality: boolean;
}

export const ContentItem: React.FC<IProps> = ({
  item,
  isQuality,
  dataQuality,
  size,
  isShowQuality,
}) => {
  const {quality, decreaseQuality, increaseQuality} = dataQuality;

  return (
    <div>
      <Text $title>Перечень продуктов</Text>
      <InnerItem size={size}>
        <InnerImage size={size}>
          <Image
            src={item?.avatar || DEFAULT_IMAGE}
            layout={'fill'}
            alt={'Product image'}
            objectFit={'cover'}
            priority
          />
        </InnerImage>
        <InnerItemContent>
          <Box mb={'10px'}>
            <Text
              $description
              fontSize={'14px'}
              fontWeight={'600'}
              color={'black'}
              lineClamp={2}>
              {item?.title}
            </Text>
          </Box>
          <Text
            fontSize={'12px'}
            color={'greyDark'}
            fontWeight={'500'}
            $description
            lineClamp={3}>
            {item?.description}
          </Text>
        </InnerItemContent>
        {isQuality && isShowQuality && (
          <WrapperButtons>
            <InnerQualityButtons>
              <ChangingQualityButton onClick={decreaseQuality}>
                -
              </ChangingQualityButton>
              <InnerQuality>{quality}</InnerQuality>
              <ChangingQualityButton onClick={increaseQuality}>
                +
              </ChangingQualityButton>
            </InnerQualityButtons>
          </WrapperButtons>
        )}
      </InnerItem>
    </div>
  );
};
