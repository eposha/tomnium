import {IUser} from '@/types/user';
import {ShowMoreBlock} from '@/components/common/PurchaseProducts/Mobile/ShowMoreBlock';
import {InnerUser, InnerPhoneInput, InnerRequiredFields} from 'styles/payments';
import {Button, Text, Box} from 'styles/common';
import {PrimaryAvatar} from '@/components/common/Avatar/Primary';
import {PhoneCountrySelect} from '@/components/common/Input/Phone';
import {TUseFormProfileUpdate} from '@/graph-hooks/user/useFormProfileUpdate';
import {FILE_URL} from '@/constants/common';
import {Message} from '@/components/common/message';
import {useEffect, useState} from 'react';
import {Input} from '@/components/common/PurchaseProducts';

interface IProps {
  user: IUser | null;
  dataUpdateProfile: TUseFormProfileUpdate;
  requiredPaymentFields?: string[] | null;
}
export const LabelUser: React.FC<IProps> = ({
  user,
  dataUpdateProfile,
  requiredPaymentFields,
}) => {
  const {control, formErrors, onSubmit, responseError} = dataUpdateProfile;
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!responseError) return;
    setIsError(true);
  }, [responseError]);

  const closeErrorMsg = () => {
    setIsError(false);
  };

  const title = user?.fullName || '';
  const avatar = user?.avatar?.[0]?.path
    ? FILE_URL + user?.avatar?.[0]?.path
    : '';
  const isPhoneInput = requiredPaymentFields?.includes('phone');
  const otherRequiredFields = requiredPaymentFields?.filter(
    (field) => field.toLocaleLowerCase() !== 'phone',
  );
  const isOtherFields = Boolean(otherRequiredFields?.length);

  return (
    <ShowMoreBlock
      title={'Мои данные'}
      defaultState={isPhoneInput}
      render={(isShowMore) => {
        return (
          <>
            <InnerUser>
              <PrimaryAvatar title={title} size={40} src={avatar} />
              <div>
                <Text
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'black'}>
                  {user?.fullName}
                </Text>
                <Text
                  margin={'5px 0 0 0'}
                  $description
                  fontSize={'10px'}
                  fontWeight={'500'}
                  color={'jordyBlue'}>
                  {user?.phone ?? ''}
                </Text>
              </div>
            </InnerUser>
            {isShowMore && (
              <div>
                <Text
                  margin={'15px 0 10px 0'}
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'greyDark'}>
                  Введите мобильный телефон
                </Text>
                <InnerPhoneInput $isError={!!formErrors?.phone}>
                  <PhoneCountrySelect
                    name={'phone'}
                    control={control}
                    placeholder={''}
                    rules={{
                      required: 'Поле не может быть пустым',
                      minLength: {
                        message: 'Не корректный формат',
                        value: 6,
                      },
                    }}
                  />
                </InnerPhoneInput>
                {isOtherFields && (
                  <InnerRequiredFields margin={'10px 0 0 0'}>
                    {otherRequiredFields?.map((field) => (
                      <Input
                        type={'secondary'}
                        formError={formErrors?.[field]}
                        key={field}
                        control={control}
                        name={field}
                        fontSize={'12px'}
                        placeholder={field}
                      />
                    ))}
                  </InnerRequiredFields>
                )}
                <Box mt={'10px'}>
                  <Button $solid $fullWidth onClick={onSubmit}>
                    Отправить
                  </Button>
                </Box>
                {responseError && (
                  <Message
                    text={responseError?.message}
                    handleClose={closeErrorMsg}
                    isOpen={isError}
                    margin={'15px 0 0 0'}
                    type={'error'}>
                    {responseError.message}
                  </Message>
                )}
              </div>
            )}
          </>
        );
      }}
    />
  );
};
