import {InnerPaymentContent, Divider} from 'styles/payments';
import {Text, Box, Button} from 'styles/common';
import NextLink from 'next/link';

interface IProps {
  title: string;
  path: string;
  choseStepPaymentMethod: () => void;
}

export const PaymentByOtherWay: React.FC<IProps> = ({
  title,
  path,
  choseStepPaymentMethod,
}) => {
  return (
    <InnerPaymentContent>
      <Text
        $description
        fontSize={'16px'}
        fontWeight={'600'}
        color={'black'}
        margin={'0 0 10px 0'}>
        {title}
      </Text>
      <Divider />
      {Boolean(path) && (
        <Box mt={'10px'}>
          <NextLink href={path}>
            <a>
              <Button fontWeight={500} $fullWidth>
                Перейти к оплате
              </Button>
            </a>
          </NextLink>
        </Box>
      )}
      <Button
        $solid
        fontWeight={500}
        $fullWidth
        margin={'10px 0 0 0'}
        onClick={choseStepPaymentMethod}>
        Изменить способ оплаты
      </Button>
    </InnerPaymentContent>
  );
};
