import {FC} from 'react';
import Image from 'next/image';
import {ButtonLink} from 'styles/unsubscribe/common/index';
import * as UI from 'styles/unsubscribe/card';

interface CardPropsType {
  img: string;
  description: string;
  text: string;
}

const Card: FC<CardPropsType> = ({img, description, text}) => {
  return (
    <UI.Card>
      <div>
        <UI.CardImg>
          <Image
            src={img}
            alt='img'
            width={280}
            height={160}
            layout='responsive'
          />
        </UI.CardImg>
        <UI.CardDescription>{description}</UI.CardDescription>
      </div>
      <ButtonLink>{text}</ButtonLink>
    </UI.Card>
  );
};

export default Card;
