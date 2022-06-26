import {FC} from 'react';

import CrossIcon from 'public/icons/Cross.svg';
import CheckMarkIcon from 'public/icons/CheckMarkIcon.svg';

interface IBooleanIconProps {
  $isActive?: boolean;
}

const BooleanIcon: FC<IBooleanIconProps> = ({$isActive}) =>
  $isActive ? (
    <CheckMarkIcon width={20} height={20} alt='checkmark' />
  ) : (
    <CrossIcon width={20} height={20} alt='cross' />
  );

export default BooleanIcon;
