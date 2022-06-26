import {InnerFlexCenter, InnerSuccesPayment} from 'styles/payments';
import {Text, Box, Button} from 'styles/common';
import {NavLink} from '@/components/common/Navlink';
import {ISuccessPayment} from '@/components/common/PurchaseProducts';
import {useRouter} from 'next/router';

export const SuccessPayment: React.FC<ISuccessPayment> = ({
  entitiesLink,
  nameEntitiesPage,
  isProductThread,
}) => {
  const router = useRouter();
  return (
    <InnerSuccesPayment>
      <Text $title margin={'0 0 20px 0'}>
        Оплата прошла успешно
      </Text>
      <InnerFlexCenter>
        <Box mr={'10px'}>
          <NavLink path={entitiesLink} width={160}>
            {nameEntitiesPage}
          </NavLink>
        </Box>
        {isProductThread ? (
          <Button
            $solid
            width={160}
            onClick={() => {
              router.reload();
            }}>
            Смотреть курс
          </Button>
        ) : (
          <NavLink path={'/'} $solid width={160}>
            На главную
          </NavLink>
        )}
      </InnerFlexCenter>
    </InnerSuccesPayment>
  );
};
