import {FC} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {media} from 'styles/media';

import styled from 'styled-components';

const SimpleCarouselUI = styled.div`
  width: calc(100% + 20px);
  margin-left: -10px;
  max-width: calc(100vw - 10px);

  ${media.greaterThan('xs')`
    position: relative;
    left: 0;
    margin-left: 0;
    min-width: 100vw;
    overflow: hidden;
`}
`;

export const SimpleCarousel: FC = ({children}) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: 'start',
  });

  return <SimpleCarouselUI ref={emblaRef}>{children}</SimpleCarouselUI>;
};

export default SimpleCarousel;
