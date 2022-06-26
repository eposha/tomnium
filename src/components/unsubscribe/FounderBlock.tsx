import {FC} from 'react';
import Image from 'next/image';
import * as UI from 'styles/unsubscribe/index';

interface FounderBlockPropsType {
  img: any;
  name: string;
  position: string;
}

const FounderBlock: FC<FounderBlockPropsType> = ({img, name, position}) => {
  return (
    <UI.FounderInfo>
      <UI.ImgWrapper>
        <Image src={img} width={'100%'} height={'100%'} />
      </UI.ImgWrapper>
      <div>
        <UI.FounderName>{name}</UI.FounderName>
        <UI.FounderPosition>{position}</UI.FounderPosition>
      </div>
    </UI.FounderInfo>
  );
};

export default FounderBlock;
