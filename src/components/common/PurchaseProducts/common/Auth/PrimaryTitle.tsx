import {Media} from 'src/media-styles';
import {Box, Text} from 'styles/common';

export const PrimaryTitle = () => {
  return (
    <>
      <Media greaterThanOrEqual={'lg'}>
        <Box mb={'15px'}>
          <Text
            fontWeight={'600'}
            textAlign={'center'}
            $description
            color={'black'}
            fontSize={'18px'}>
            Данные для оформления заказа
          </Text>
        </Box>
        <Box mb={'20px'}>
          <Text
            fontWeight={'500'}
            textAlign={'center'}
            $description
            color={'greyDark'}
            fontSize={'14px'}>
            Вам необходимо авторизоваться или загерегистрировать новый аккаунт
          </Text>
        </Box>
      </Media>
      <Media lessThan={'lg'}>
        <Box mb={'15px'}>
          <Text
            fontWeight={'600'}
            textAlign={'center'}
            $description
            color={'black'}
            fontSize={'16px'}>
            Данные для оформления заказа
          </Text>
        </Box>
        <Box mb={'15px'}>
          <Text
            fontWeight={'500'}
            textAlign={'center'}
            $description
            color={'greyDark'}
            fontSize={'12px'}>
            Вам необходимо авторизоваться или загерегистрировать новый аккаунт
          </Text>
        </Box>
      </Media>
    </>
  );
};
