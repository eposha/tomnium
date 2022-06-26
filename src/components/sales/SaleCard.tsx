import {DATE_FORMAT} from '@/constants/common';
import {formatDate, getOriginalImage} from '@/helpers/common';
import {IMedia} from '@/types/media';
import {FC} from 'react';
import {Media} from 'src/media-styles';
import * as UI from 'styles/sales/sale-card';

interface SaleCardProps {
  banner: {
    id: number;
    title: string;
    description: string;
    url: string;
    titleUrl: string;
    price?: string;
    oldPrice?: string;
    imageWeb?: IMedia[];
    imageMob?: IMedia[];
    Sale: {
      title: string;
      activeTo?: Date;
    };
  };
}

const SaleCard: FC<SaleCardProps> = ({
  banner: {
    title,
    description,
    titleUrl,
    url,
    price,
    oldPrice,
    imageWeb,
    imageMob,
    Sale: {activeTo, title: saleTitle},
  },
}) => {
  return (
    <UI.SaleCardContainer imageWeb={getOriginalImage(imageWeb)}>
      <Media lessThan='sm'>
        <UI.SaleImageWrapper imageMob={getOriginalImage(imageMob)}>
          <UI.SaleLabel>{saleTitle}</UI.SaleLabel>
        </UI.SaleImageWrapper>
        <UI.SaleTitle>{title}</UI.SaleTitle>
        <UI.SaleText>{description}</UI.SaleText>
        {price && (
          <UI.SalePriceContainer>
            <UI.SalePriceCurrency />
            <UI.SalePrice>
              {oldPrice}
              <UI.SaleOldPrice>{price}</UI.SaleOldPrice>
            </UI.SalePrice>
          </UI.SalePriceContainer>
        )}
        <UI.SaleFooterWrapper>
          {activeTo && (
            <UI.SaleDateContainer>
              <UI.SaleDateText>Действует до:</UI.SaleDateText>
              <UI.SaleDateLabel>
                {formatDate(activeTo, DATE_FORMAT.primary)}
              </UI.SaleDateLabel>
            </UI.SaleDateContainer>
          )}
          <UI.SaleButton href={url} target='_blank'>
            {titleUrl}
          </UI.SaleButton>
        </UI.SaleFooterWrapper>
      </Media>
      <Media greaterThanOrEqual='sm'>
        <UI.FlexContainer>
          <UI.Wrapper>
            <UI.Container>
              <UI.Container mb={25}>
                <UI.SaleLabelBig>{saleTitle}</UI.SaleLabelBig>
                {activeTo && (
                  <UI.SaleDateContainer>
                    <UI.SaleDateText>Действует до:</UI.SaleDateText>
                    <UI.SaleDateLabel>
                      {formatDate(activeTo, DATE_FORMAT.primary)}
                    </UI.SaleDateLabel>
                  </UI.SaleDateContainer>
                )}
              </UI.Container>
              <UI.SaleTitle>{title}</UI.SaleTitle>
              <UI.SaleText>{description}</UI.SaleText>
            </UI.Container>
            <UI.FlexEnd>
              {price && (
                <UI.SalePriceContainer>
                  <UI.SalePriceCurrency />
                  <UI.SalePrice>
                    {oldPrice}
                    <UI.SaleOldPrice>{price}</UI.SaleOldPrice>
                  </UI.SalePrice>
                </UI.SalePriceContainer>
              )}
              <UI.SaleButton href={url} target='_blank'>
                {titleUrl}
              </UI.SaleButton>
            </UI.FlexEnd>
          </UI.Wrapper>
        </UI.FlexContainer>
      </Media>
    </UI.SaleCardContainer>
  );
};

export default SaleCard;
