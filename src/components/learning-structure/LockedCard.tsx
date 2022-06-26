import Link from 'next/link';
import {Media} from 'src/media-styles';

import * as UI from 'styles/learningStructure/locked-card';

const LockedCard = () => (
  <UI.LockedCard>
    <UI.LockIcon />

    <UI.LockedContent>
      <UI.LockedDescription>
        Для открытия следующего модуля, вам необходимо выполнить домашние
        задания текущего модуля
      </UI.LockedDescription>
      <Link href='#' passHref>
        <UI.StyledLink>Смотреть домашние задания</UI.StyledLink>
      </Link>
      <Media greaterThan='xs'>
        <Link href='#'>
          <a>
            <UI.ArrowContainer>
              <UI.Arrow $isActive={true} />
            </UI.ArrowContainer>
          </a>
        </Link>
      </Media>
    </UI.LockedContent>
  </UI.LockedCard>
);

export default LockedCard;
