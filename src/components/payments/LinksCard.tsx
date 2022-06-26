import {FC} from 'react';
import * as UI from 'styles/payments/paymentsLinkCard';
import Image from 'next/image';
import Link from 'next/link';

interface LinksCardPropsType {
  obj: object;
}

const LinksCard: FC<LinksCardPropsType> = ({obj}: object | any) => {
  return (
    <Link href={obj.url} passHref>
      <UI.Card>
        <UI.ImgWrapper>
          <Image src={obj.img} width={60} height={60} />
        </UI.ImgWrapper>
        <div>
          <UI.CardTitle>{obj.name}</UI.CardTitle>
          <UI.CardInfo>{obj.description}</UI.CardInfo>
        </div>
      </UI.Card>
    </Link>
  );
};

export default LinksCard;
