import {InnerPaymentContent} from 'styles/payments';
import {Text} from 'styles/common';
import {NavLink} from '@/components/common/Navlink';
import {ISuccessPayment} from '@/components/common/PurchaseProducts';

export const SuccessPayment: React.FC<ISuccessPayment> = ({
  entitiesLink,
  nameEntitiesPage,
}) => {
  return (
    <InnerPaymentContent>
      <Text
        $description
        fontSize={'16px'}
        fontWeight={'600'}
        color={'black'}
        margin={'0 0 20px 0'}
        textAlign={'center'}>
        Оплата прошла успешно
      </Text>
      <NavLink path={entitiesLink} $fullWidth fontWeight={500}>
        {nameEntitiesPage}
      </NavLink>
      <NavLink
        path={'/'}
        $fullWidth
        fontWeight={500}
        $solid
        margin={'10px 0 0 0'}>
        Вернуться на главную страницу
      </NavLink>
    </InnerPaymentContent>
  );
};
