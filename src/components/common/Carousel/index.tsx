import {FC, useCallback, useEffect, useState} from 'react';
import useEmblaCarousel, {EmblaOptionsType} from 'embla-carousel-react';

import {Embla, SliderWrapper, Viewport} from 'styles/carousel';
import {IArrowProps, IDotsProps} from 'src/components/common/Carousel/Buttons';

interface ICarouselProps {
  options?: EmblaOptionsType;
  NextArrow?: FC<IArrowProps> | null;
  PrevArrow?: FC<IArrowProps> | null;
  Dots?: FC<IDotsProps> | null;
}
export const Carousel: FC<ICarouselProps> = ({options, children, ...props}) => {
  const NextArrow = props.NextArrow;
  const PrevArrow = props.PrevArrow;
  const Dots = props.Dots;

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollTo = useCallback(
    (index) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <SliderWrapper>
      <Embla>
        <Viewport ref={emblaRef}>{children}</Viewport>
      </Embla>
      {PrevArrow && (
        <PrevArrow onClick={scrollPrev} disabled={!prevBtnEnabled} />
      )}
      {NextArrow && (
        <NextArrow onClick={scrollNext} disabled={!nextBtnEnabled} />
      )}
      {Dots && (
        <Dots
          scrollTo={scrollTo}
          scrollSnaps={scrollSnaps}
          selectedIndex={selectedIndex}
        />
      )}
    </SliderWrapper>
  );
};
