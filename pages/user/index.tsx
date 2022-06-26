import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {UserLayout} from 'src/components/user';
import {Media} from 'src/media-styles';
import {useState, useEffect, memo} from 'react';
import {SbmtButton, SbmtBlock} from 'styles/user/common';
import UserSideMenuMobile from '@/components/user/UserSideMenuMobile';
import Icon from 'public/icons/profile/MyProfileSVG.svg';
import * as UI from 'styles/user/userProfile';
import {useDirectories} from '@/graph-hooks/directories';
import {useUser} from '@/graph-hooks/user';
import {useProfileUpdate} from '@/graph-hooks/user';
// import useCountries from '@/graph-hooks/countries/useCountries';
// import useCities from '@/graph-hooks/cities/useCities';
import AvatarCard from '@/components/user/AvatarCard';
import LogOutBtn from '@/components/user/form/LogOutBtn';
import useLocale from 'src/hooks/useLocale';

export const User = () => {
  const {directories} = useDirectories();

  const {user} = useUser();

  // const {countries} = useCountries();

  const {changeProfile} = useProfileUpdate();

  const [isEdit, setEdit] = useState(true);

  const t = useLocale();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: {errors},
  } = useForm();

  // const country = watch('countryId');

  // const {cities} = useCities({limit: 10, filter: {countryId: country?.id}});
  //@ts-ignore
  const avatar = user?.avatar?.find((image) => !image.isOriginal) || {};
  const role = user?.Role?.name;

  useEffect(() => {
    if (user) {
      reset({
        fullName: user.fullName,
        phone: user.phone,
        birthDate: (user?.birthDate as string)?.split('T')[0],
        primaryLanguageId: user?.Language,
        timezone: user?.Timezone,
        currencyId: user?.Currency,
        // countryId: user?.Country,
        // cityId: user?.City,
        isResident: true,
      });
    }
  }, [user]);

  const onSubmit: SubmitHandler<any> = (data) => {
    const record = {
      ...data,
      primaryLanguageId: data.primaryLanguageId?.id,
      timezone: data.timezone?.tzCode,
      currencyId: data.currencyId?.id,
      countryId: data.countryId?.id,
      cityId: data.cityId?.id,
    };

    const filteredRecord = Object.entries(record);

    const dataRecord = Object.fromEntries(
      //ts-ignore
      filteredRecord.filter(([key, value]) => !!key && !!value),
    );

    changeProfile(dataRecord, () => {
      setEdit(true);
    });
  };

  return (
    <UserLayout>
      <UI.ProfileBox>
        <Media at='xs'>
          <UserSideMenuMobile Icon={Icon} role={role} />
        </Media>
        <Media greaterThan='xs'>
          <UI.Title>{t.profile.myProfile}</UI.Title>
        </Media>
        <AvatarCard
          loadTxt={t.profile.load}
          photoTxt={t.profile.photo}
          avatar={avatar}
        />
        <UI.Form onSubmit={handleSubmit(onSubmit)}>
          <UI.FormSideWrapper>
            <UI.ColWrap>
              <UI.FormBlock isWrap={isEdit} disabled={isEdit}>
                <UI.FormSide>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='fullName' $active={isEdit}>
                      {t.profile.names}
                    </UI.Label>
                    <UI.Input
                      disabled={isEdit}
                      id='fullName'
                      {...register('fullName', {
                        required: true,
                      })}
                    />
                  </UI.InputWrapper>
                  <UI.Error>
                    {errors.fullName && 'This field is required'}
                  </UI.Error>
                </UI.FormSide>
                <UI.FormSide>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='email' $active={isEdit}>
                      Email
                    </UI.Label>
                    <UI.InputEmail
                      $isDisabled={isEdit}
                      disabled
                      id='email'
                      value={user?.email}
                      //Email нет резолвере
                      // {...register('email', {
                      //   required: true,
                      //   pattern: {
                      //     value: /\S+@\S+\.\S+/,
                      //     message: 'Entered value does not match email format',
                      //   },
                      // })}
                    />
                  </UI.InputWrapper>
                  <UI.Error>
                    {errors.fullName && 'This field is required'}
                  </UI.Error>
                </UI.FormSide>
                <UI.FormSide>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='mobile' $active={isEdit}>
                      {t.profile.mobile}
                    </UI.Label>
                    <UI.InputNumber
                      disabled={isEdit}
                      placeholder='Mobile number'
                      id='mobile'
                      {...register('phone', {required: true})}
                    />
                  </UI.InputWrapper>
                  <UI.Error>
                    {errors.phone && 'This field is required'}
                  </UI.Error>
                </UI.FormSide>
                {/* <UI.FormSide>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='country' $active={isEdit}>
                      {t.profile.country}
                    </UI.Label>
                    <Controller
                      control={control}
                      name='countryId'
                      render={({field: {onChange, ...restField}}) => (
                        <UI.SelectInput
                          {...restField}
                          onChange={(value) => {
                            onChange(value);
                            setValue('cityId', null);
                          }}
                          options={countries}
                          isDisabled={isEdit}
                          labelField='name'
                          instanceId='select-country'
                          placeholder={!isEdit && 'Select country'}
                        />
                      )}
                    />
                    <UI.Error>
                      {errors.countryId && 'Поле является обязательным'}
                    </UI.Error>
                  </UI.InputWrapper>
                </UI.FormSide> */}
              </UI.FormBlock>

              <UI.FormBlock disabled={isEdit}>
                <UI.FormSide>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='birth' $active={isEdit}>
                      {t.profile.birthday}
                    </UI.Label>
                    <UI.DateInput
                      id='birth'
                      disabled={isEdit}
                      placeholder='Mock Data'
                      {...register('birthDate')}
                    />
                    <UI.Error>
                      {errors.birthDate && 'Поле является обязательным'}
                    </UI.Error>
                  </UI.InputWrapper>
                </UI.FormSide>
                {/* <UI.FormSide>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='city' $active={isEdit}>
                      {t.profile.city}
                    </UI.Label>
                    <Controller
                      control={control}
                      name='cityId'
                      render={({field}) => (
                        <UI.SelectInput
                          {...field}
                          options={cities}
                          labelField='name'
                          isDisabled={isEdit}
                          instanceId='select-city'
                          placeholder={!isEdit && 'Select city'}
                        />
                      )}
                    />
                    <UI.Error>
                      {errors.cityId && 'Поле является обязательным'}
                    </UI.Error>
                  </UI.InputWrapper>
                </UI.FormSide> */}
                <UI.FormSide disabled={isEdit}>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='language' $active={isEdit}>
                      {t.profile.language}
                    </UI.Label>
                    <Controller
                      control={control}
                      name='primaryLanguageId'
                      render={({field}) => (
                        <UI.SelectInput
                          {...field}
                          options={directories?.Languages}
                          isDisabled={isEdit}
                          labelField='name'
                          instanceId='select-language'
                          placeholder={!isEdit && 'Select language'}
                        />
                      )}
                    />
                    <UI.Error>
                      {errors.primaryLanguageId && 'Поле является обязательным'}
                    </UI.Error>
                  </UI.InputWrapper>
                </UI.FormSide>
                <UI.FormSide width={50} disabled={isEdit}>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='currency' $active={isEdit}>
                      {t.profile.currency}
                    </UI.Label>
                    <Controller
                      control={control}
                      name='currencyId'
                      render={({field}) => (
                        <UI.SelectInput
                          {...field}
                          options={directories?.Currencies}
                          isDisabled={isEdit}
                          labelField='name'
                          instanceId='select-currency'
                          placeholder={!isEdit && 'Select currency'}
                        />
                      )}
                    />
                    <UI.Error>
                      {errors.currencyId && 'Поле является обязательным'}
                    </UI.Error>
                  </UI.InputWrapper>
                </UI.FormSide>
                <UI.FormSide width={100} disabled={isEdit}>
                  <UI.InputWrapper disabled={isEdit}>
                    <UI.Label htmlFor='timezone' $active={isEdit}>
                      {t.profile.timezone}
                    </UI.Label>
                    <Controller
                      control={control}
                      name='timezone'
                      render={({field}) => (
                        <UI.SelectInput
                          {...field}
                          options={directories?.Timezones}
                          isDisabled={isEdit}
                          labelField='name'
                          valueField='tzCode'
                          instanceId='select-timezone'
                          placeholder={!isEdit && 'Select timezone'}
                        />
                      )}
                    />
                    <UI.Error>
                      {errors.timezone && 'Поле является обязательным'}
                    </UI.Error>
                  </UI.InputWrapper>
                </UI.FormSide>
              </UI.FormBlock>
            </UI.ColWrap>
            <UI.BtnsController>
              {isEdit ? (
                <SbmtBlock onClick={() => setEdit(!isEdit)}>
                  {t.profile.edit}
                </SbmtBlock>
              ) : (
                <UI.ButtonWrapper disabled={!isEdit}>
                  <SbmtButton>Сохранить</SbmtButton>
                </UI.ButtonWrapper>
              )}
              <LogOutBtn txt={t.profile.logout} />
            </UI.BtnsController>
          </UI.FormSideWrapper>
        </UI.Form>
      </UI.ProfileBox>
    </UserLayout>
  );
};

export default memo(User);
