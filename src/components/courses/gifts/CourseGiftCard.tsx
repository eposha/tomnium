import {FC, Fragment, memo} from 'react';
import Link from 'next/link';
import {IGift, IProduct} from '@/types/index';

import {Text} from 'styles/common';

import * as UI from 'styles/courses/course-gifts';

import DocumentIcon from 'public/icons/gifts/Document.svg';
import ConsultationIcon from 'public/icons/gifts/Consultation.svg';
import CourseIcon from 'public/icons/gifts/Course.svg';
import PlanIcon from 'public/icons/gifts/Plan.svg';
import {Media} from 'src/media-styles';
import {GiftCardPaymentLink} from './GiftCardPaymentLink';

const getTariffGiftIcon = (product?: IProduct) => {
  if (product?.Consultation) {
    return <ConsultationIcon width={25} height={25} />;
  } else if (product?.Thread) {
    return <CourseIcon width={25} height={25} />;
  } else if (product?.Plan) {
    return <PlanIcon width={25} height={25} />;
  }
};

const getGiftButtonLink = (product?: IProduct) => {
  if (product?.Consultation) {
    return `/consultations/${product.Consultation.id}`;
  } else if (product?.Thread) {
    return `/courses/${product.Thread.courseId}`;
  } else return '';
};

interface ICourseGiftCardProps {
  gift: IGift;
  myTariffId?: number;
  product: IProduct;
  url?: string;
  courseId?: string;
}

const CourseGiftCard: FC<ICourseGiftCardProps> = memo(function MemoCard({
  courseId,
  gift,
  myTariffId,
  product,
  url,
}) {
  const {title, description, Document, Tariff, tariffIds} = gift;

  const isAvailable = !!myTariffId && tariffIds.includes(myTariffId);

  return (
    <UI.Wrapper isAvailable={isAvailable}>
      <UI.Header>
        <UI.Title>
          <UI.ImageWrapper>
            {Document ? (
              <DocumentIcon width={25} height={25} />
            ) : (
              getTariffGiftIcon(Tariff?.Product)
            )}
          </UI.ImageWrapper>
          Подарок
        </UI.Title>
      </UI.Header>

      <UI.Content>
        <Text
          fontSize='16px'
          fontWeight='600'
          color='blueberry'
          margin='0 0 10px'>
          {title}
        </Text>
        <UI.Description lineClamp={4}>{description}</UI.Description>
      </UI.Content>
      <UI.Footer>
        <UI.Meta>
          {!isAvailable ? (
            <>
              <Text fontSize='16px' fontWeight='600' margin='0 0 5px'>
                Повысить до:
              </Text>
              <UI.LinksWrapper>
                {product.Tariffs?.filter((tariff) =>
                  tariffIds.includes(tariff.id),
                ).map((tariff) => {
                  return (
                    <Fragment key={tariff.id}>
                      <Media at='xs'>
                        <Link
                          href={`/courses/${courseId}/payment/${product.id}?tariffId=${tariff.id}`}
                          passHref
                          key={tariff.id}>
                          <UI.StyledLink>{tariff.name}</UI.StyledLink>
                        </Link>
                      </Media>
                      <Media greaterThan='xs'>
                        <GiftCardPaymentLink
                          tariffId={tariff.id}
                          tariffName={tariff.name}
                          product={product}
                          url={url}
                        />
                      </Media>
                    </Fragment>
                  );
                })}
              </UI.LinksWrapper>
            </>
          ) : Tariff?.Product?.Plan ? (
            <UI.Button $solid $isDisabled>
              Получено
            </UI.Button>
          ) : (
            <Link
              href={
                Document
                  ? `/documents/${Document.id}`
                  : getGiftButtonLink(Tariff?.Product)
              }>
              <a>
                <UI.Button>Получить</UI.Button>
              </a>
            </Link>
          )}
        </UI.Meta>
      </UI.Footer>
    </UI.Wrapper>
  );
});

export default CourseGiftCard;

export const UpgradeCard = () => (
  <UI.Wrapper isAvailable={false} isCentered>
    <UI.Content>
      <Text fontSize='18px' fontWeight='500' margin='0 0 10px' color='greyDark'>
        Откройте больше подарков
      </Text>
      <Text fontSize='12px' fontWeight='500' margin='0 0 20px' color='greyDark'>
        Откройте больше подарков
      </Text>
      <UI.Button>Повысить</UI.Button>
    </UI.Content>
  </UI.Wrapper>
);
