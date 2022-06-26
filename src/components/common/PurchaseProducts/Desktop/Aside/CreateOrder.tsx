import {useEffect} from 'react';
import {Text, Box, Button, ContainerWithCustomScroll} from 'styles/common';
import {
  InnerLabelUser,
  InnerBlockCreateOrder,
  InnerAside,
  InnerPhoneInput,
  UpdateUserForm,
  InnerForm,
  InnerRequiredFields,
} from 'styles/payments';
import {PrimaryAvatar} from '@/components/common/Avatar/Primary';
import {IUser} from '@/types/user';
import {getImgSrc} from '@/helpers/image';
import {PhoneCountrySelect} from '@/components/common/Input/Phone';
import {Input, PolicyCheckbox} from '@/components/common/PurchaseProducts';
import {IUseUserCheck} from '@/graph-hooks/payments';
import {TUseFormProfileUpdate} from '@/graph-hooks/user/useFormProfileUpdate';

interface IProps {
  user?: IUser | null;
  dataUserCheck: IUseUserCheck;
  dataUpdateProfile: TUseFormProfileUpdate;
  handleChangeStep: () => void;
}

export const CreateOrder: React.FC<IProps> = ({
  user,
  dataUserCheck,
  dataUpdateProfile,
  handleChangeStep,
}) => {
  const {checkUser, requiredPaymentFields, loading} = dataUserCheck;
  const {control, formErrors, onSubmit} = dataUpdateProfile;
  const avatar = getImgSrc(user?.avatar?.[0]?.path);

  useEffect(() => {
    checkUser();
  }, []);

  const isPaymentFields = !!requiredPaymentFields?.length;

  return (
    <InnerAside>
      <InnerBlockCreateOrder>
        <InnerForm>
          <Text $title>Данные для оформления заказа</Text>
          <InnerLabelUser>
            <Box mr={'5px'}>
              <PrimaryAvatar
                title={user?.fullName || ''}
                size={40}
                src={avatar}
              />
            </Box>
            <div>
              <Text
                $description
                fontSize={'12px'}
                fontWeight={'500'}
                color={'black'}>
                {user?.fullName}
              </Text>
              {user?.phone && (
                <Text
                  margin={'5px 0 0 0'}
                  $description
                  fontSize={'12px'}
                  fontWeight={'500'}
                  color={'blueberry'}>
                  {user.phone}
                </Text>
              )}
            </div>
          </InnerLabelUser>
          {isPaymentFields && (
            <UpdateUserForm onSubmit={onSubmit}>
              <ContainerWithCustomScroll height={'200px'}>
                <InnerRequiredFields>
                  {requiredPaymentFields?.map((field) => {
                    if (field === 'phone') {
                      return (
                        <div key={field}>
                          <Text
                            $description
                            margin={'0 0 5px 0'}
                            fontSize={'14px'}
                            fontWeight={'500'}
                            color={'greyDark'}>
                            Номер телефона
                          </Text>
                          <InnerPhoneInput $isError={formErrors.phone}>
                            <PhoneCountrySelect
                              name={'phone'}
                              control={control}
                              placeholder={''}
                              rules={{required: true}}
                            />
                          </InnerPhoneInput>
                        </div>
                      );
                    }
                    return (
                      <Input
                        formError={formErrors?.[field]}
                        key={field}
                        control={control}
                        name={field}
                        placeholder={field}
                      />
                    );
                  })}
                  <Box mt={'10px'}>
                    <PolicyCheckbox
                      control={control}
                      errors={formErrors.policy}
                    />
                  </Box>
                </InnerRequiredFields>
              </ContainerWithCustomScroll>
              <Box mr={'auto'} ml={'auto'} mt={'20px'}>
                <Button type={'submit'} width={160}>
                  Обновить профиль
                </Button>
              </Box>
            </UpdateUserForm>
          )}
        </InnerForm>
        {!isPaymentFields && !loading && (
          <Box mr={'auto'} ml={'auto'} mt={'20px'} onClick={handleChangeStep}>
            <Button width={160}>Оформить заказ</Button>
          </Box>
        )}
      </InnerBlockCreateOrder>
    </InnerAside>
  );
};
