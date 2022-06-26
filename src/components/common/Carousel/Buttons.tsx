import {FC} from 'react';
import {
  DotButton,
  StyledImage,
  ArrowWrapper,
  DotsWrapper,
} from 'styles/common/CarouselButtons';

export interface IArrowProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export interface IDotsProps {
  scrollSnaps: number[];
  scrollTo: (index: number) => void | undefined;
  selectedIndex: number;
  className?: string;
}

export const PrevArrow: FC<IArrowProps> = ({onClick, disabled, className}) => (
  <ArrowWrapper onClick={onClick} className={className} disabled={disabled}>
    <StyledImage
      src='/icons/ArrowPrevCarouselSVG.svg'
      width={7}
      height={12}
      alt='arrow'
      disabled={disabled}
    />
  </ArrowWrapper>
);

export const NextArrow: FC<IArrowProps> = ({onClick, disabled, className}) => (
  <ArrowWrapper onClick={onClick} className={className} disabled={disabled}>
    <StyledImage
      src='/icons/ArrowNextCarouselSVG.svg'
      width={7}
      height={12}
      alt='arrow'
      disabled={disabled}
    />
  </ArrowWrapper>
);

export const Dots: FC<IDotsProps> = ({
  scrollSnaps,
  selectedIndex,
  scrollTo,
  className,
}) => (
  <DotsWrapper className={className}>
    {scrollSnaps.map((_, index) => (
      <DotButton
        key={index}
        $isSelected={index === selectedIndex}
        onClick={() => scrollTo(index)}
      />
    ))}
  </DotsWrapper>
);
