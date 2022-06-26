import {FC, useState} from 'react';
import {useRouter} from 'next/router';
import {ClickOutside} from '../common/ClickOutside';
import {DATE_FORMAT} from '@/constants/common';
import {formatDate} from '@/helpers/common';
import * as UI from 'styles/user/purchase';

interface IPurchaseMenuProps {
  activeEndDate?: Date;
}

const PurchaseMenu: FC<IPurchaseMenuProps> = ({activeEndDate}) => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const onClose = () => setActive(false);

  return (
    <>
      <UI.PurchaseMenu onClick={() => setActive(!active)}>
        <UI.PurchaseMenuItem />
        <UI.PurchaseMenuItem />
        <UI.PurchaseMenuItem />
      </UI.PurchaseMenu>
      {active && (
        <ClickOutside Component={UI.PurchaseMenuContainer} handler={onClose}>
          <UI.PurchaseMenuText>
            Подписка до {formatDate(activeEndDate, DATE_FORMAT.primary)}
          </UI.PurchaseMenuText>
          <UI.PurchaseMenuDivider />
          <UI.PurchaseMenuButton onClick={() => router.push('/unsubscribe')}>
            Отменить подписку
          </UI.PurchaseMenuButton>
        </ClickOutside>
      )}
    </>
  );
};

export default PurchaseMenu;
