import {FC} from 'react';
import Image from 'next/image';
import {useNode} from '@craftjs/core';
import {SimpleCarousel} from '@/components/common/Carousel/SimpleCarousel';
import {FILE_URL} from 'src/constants/common';

import * as UI from 'styles/content-block/image-content-block';

const ContentImage: FC = () => {
  const {
    props: {imageData, variant},
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return variant === 'single' ? (
    <UI.SingleImage>
      {/* @ts-ignore */}
      {imageData?.map(({id, file}) => (
        <Image
          key={id}
          width={file?.[0].width}
          height={file?.[0].height}
          src={file?.[0].path ? FILE_URL + file?.[0].path : ''}
          alt={'image'}
          layout='responsive'
        />
      ))}
    </UI.SingleImage>
  ) : (
    <SimpleCarousel>
      <UI.SliderImagesList>
        {/* @ts-ignore */}
        {imageData?.map(({id, file}) => (
          <UI.SliderImageWrapper key={id}>
            <Image
              width={file?.[0].width}
              height={file?.[0].height}
              src={file?.[0].path ? FILE_URL + file?.[0].path : ''}
              alt={'image'}
              layout='responsive'
            />
          </UI.SliderImageWrapper>
        ))}
      </UI.SliderImagesList>
    </SimpleCarousel>
  );
};

export default ContentImage;
