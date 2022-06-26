import Image from 'next/image';

import styled from 'styled-components';

import {IMedia} from '@/types/media';
import {getNonOriginalImage} from '@/helpers/common';

const IconsGroupWrapper = styled.div<{
  width: number | undefined;
  height: number;
  indentValue?: number;
}>`
  position: relative;
  display: flex;
  width: ${({width}) => (width ? `${width}px` : 'unset')};
  height: ${({height}) => `${height}px`};
  display: flex;
  margin-right: ${({indentValue}) => `-${indentValue}px`};
`;

const IconsGroupItem = styled.div<{
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width: number;
  height: number;
  zIndex: number;
  ml?: number;
  $isBanner?: boolean;
}>`
  position: relative;
  top: ${({top}) => top && `${top}px`};
  right: ${({right}) => right && `${right}px`};
  bottom: ${({bottom}) => bottom && `${bottom}px`};
  left: ${({left}) => left && `-${left}px`};

  width: ${({width}) => `${width}px`};
  height: ${({height}) => `${height}px`};

  z-index: ${({zIndex}) => zIndex};
  ${({$isBanner}) =>
    $isBanner &&
    `
    border: 2px solid #FFFFFF;
  `}

  border-radius: 50%;
  overflow: hidden;
  flex: none;
`;

export interface IIconsGroup {
  $isBanner?: boolean;
  groupListSize: {
    width?: number;
    height: number;
  };
  iconsSizes: {
    width: number;
    height: number;
  };
  iconsList?: IMedia[][];
  reverseZindex?: boolean;
}

const IconsGroup: React.FC<IIconsGroup> = ({
  groupListSize,
  iconsList,
  iconsSizes,
  reverseZindex,
  $isBanner,
}) => {
  const {width, height} = iconsSizes;
  return (
    <IconsGroupWrapper
      width={groupListSize?.width}
      height={groupListSize.height}
      indentValue={
        iconsList && iconsList?.length > 1
          ? (iconsSizes.width / 2) * (iconsList.length - 1)
          : 0
      }>
      {iconsList?.map((item, index) => (
        <IconsGroupItem
          key={item[0].path + index}
          width={width}
          height={height}
          left={(width / 2) * index}
          $isBanner={$isBanner}
          zIndex={reverseZindex ? index : iconsList.length - index}>
          <Image
            src={getNonOriginalImage(item)}
            objectFit='cover'
            layout='fill'
            alt='User avatar'
          />
        </IconsGroupItem>
      ))}
    </IconsGroupWrapper>
  );
};

export default IconsGroup;
