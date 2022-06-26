import HeartRedSVG from 'public/icons/HeartRedSVG.svg';

import {IconWrapper} from 'styles/documents/heartIcon';

interface IHeartIcon {
  isFavorite?: boolean;
  position?: number;
  onClick: () => void;
}

const HeartIcon: React.FC<IHeartIcon> = ({isFavorite, position, onClick}) => {
  return (
    <IconWrapper isFavorite={isFavorite} position={position} onClick={onClick}>
      <HeartRedSVG width={20} height={20} />
    </IconWrapper>
  );
};

export default HeartIcon;
