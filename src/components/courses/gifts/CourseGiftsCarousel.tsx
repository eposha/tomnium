import {FC} from 'react';
import {Carousel} from '@/components/common/Carousel';
import {CourseGiftCard} from '@/components/courses';
import {
  CarouselContainer,
  CarouselSlide,
  CarouselDots,
} from 'styles/courses/course-gifts';
import {IGift} from '@/types/gift';
import {IProduct} from '@/types/product';

interface ICourseGiftsCarousel {
  gifts?: IGift[];
  myTariffId?: number;
  courseId: string;
  product: IProduct;
}

const CourseDetailsCarousel: FC<ICourseGiftsCarousel> = ({
  gifts,
  myTariffId,
  product,
  courseId,
}) => (
  <Carousel
    options={{
      slidesToScroll: 1,
      align: 'start',
    }}
    Dots={CarouselDots}>
    <CarouselContainer>
      {gifts?.map((gift: any) => (
        <CarouselSlide key={gift.id}>
          <CourseGiftCard
            gift={gift}
            myTariffId={myTariffId}
            courseId={courseId}
            product={product}
          />
        </CarouselSlide>
      ))}
    </CarouselContainer>
  </Carousel>
);

export default CourseDetailsCarousel;
