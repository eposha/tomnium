import {Carousel} from 'src/components/common/Carousel';
import * as UI from 'styles/testimonials/carousel';
import {Media} from 'src/media-styles';
import {TFeedbacks} from '@/types/common';
import {Card} from '@/components/common/testimonial/Card';

interface IProps {
  testimonials?: TFeedbacks;
}

export const TestimonialsCarousel: React.FC<IProps> = ({testimonials}) => (
  <>
    <Media at={'xs'}>
      <Carousel options={{slidesToScroll: 1, align: 'start'}} Dots={UI.Dots}>
        <UI.Container>
          {testimonials?.map((item, index) => (
            <UI.Slide key={item.fullName + index}>
              <Card item={item} />
            </UI.Slide>
          ))}
        </UI.Container>
      </Carousel>
    </Media>
    <Media greaterThan={'xs'}>
      <Carousel
        options={{slidesToScroll: 1, align: 'start'}}
        NextArrow={UI.NextArrow}
        PrevArrow={UI.PrevArrow}>
        <UI.Container>
          {testimonials?.map((item, index) => (
            <UI.Slide key={item.fullName + index}>
              <Card item={item} />
            </UI.Slide>
          ))}
        </UI.Container>
      </Carousel>
    </Media>
  </>
);
