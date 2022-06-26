import {FC} from 'react';
import * as UI from 'styles/favourites/favourites-info-card';

interface ICardInfo {
  quantity: number;
  title: string;
}

const InfoCard: FC<ICardInfo> = ({quantity, title}) => {
  return (
    <UI.InfoCardContainer>
      <UI.InfoCardContent>
        <UI.NumberContainer>{quantity}</UI.NumberContainer>
        {title}
      </UI.InfoCardContent>
    </UI.InfoCardContainer>
  );
};

export default InfoCard;
