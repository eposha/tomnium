import Link from 'next/link';
import {FC} from 'react';
import * as UI from 'styles/favourites/favourite-plug';

interface ICardPlug {
  mh: number;
  card: {
    title: string;
    text: string;
    button: string;
    link: string;
  };
}

const CardPlug: FC<ICardPlug> = ({mh, card}) => {
  const {title, text, button, link} = card;
  return (
    <UI.PlugWrapper mh={mh}>
      <UI.Title>{title}</UI.Title>
      <UI.Text>{text}</UI.Text>
      <Link href={link} passHref>
        <UI.Button>{button}</UI.Button>
      </Link>
    </UI.PlugWrapper>
  );
};

export default CardPlug;
