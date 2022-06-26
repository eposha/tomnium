import {SubmitHandler, useForm} from 'react-hook-form';
import {ApolloError, useMutation} from '@apollo/client';
import {Control} from 'react-hook-form/dist/types/form';
import {FieldErrors} from 'react-hook-form/dist/types/errors';
import {PROFILE_UPDATE} from '@/mutations/user';
import {ProfileUpdateInput} from 'src/graphql.schema';
import {IUser} from '@/types/user';
import {useEffect} from 'react';
import {toPointerForUpdateUser} from '@/helpers/user';

export type TUseFormProfileUpdate = {
  onSubmit: () => void;
  loading: boolean;
  control: Control<any>;
  formErrors: FieldErrors<any>;
  responseError?: ApolloError;
};

export const useFormProfileUpdate = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
  requestOptions?: Record<string, any>;
  initialState?: IUser | null;
}): TUseFormProfileUpdate => {
  const {
    control,
    reset,
    handleSubmit,
    formState: {errors: formErrors},
  } = useForm({
    defaultValues: {
      phone: '',
      fullName: '',
      primaryLanguageId: 0,
      timezone: '',
      currencyId: 0,
    },
  });

  const [update, {loading, error: responseError}] = useMutation(
    PROFILE_UPDATE,
    {
      ...(options?.requestOptions || {}),
      onCompleted() {
        if (!options?.onSuccess) return;
        options.onSuccess();
      },
    },
  );

  useEffect(() => {
    if (!options?.initialState) {
      return;
    }
    const user = options.initialState;
    reset({
      fullName: user?.fullName || '',
      phone: user?.phone || '',
      primaryLanguageId: user?.Language?.id,
      timezone: user.Timezone?.tzCode || '',
      currencyId: user?.Currency?.id,
    });
  }, [options?.initialState]);

  const onSubmit: SubmitHandler<
    ProfileUpdateInput & {policy?: boolean}
  > = async (credentials) => {
    try {
      await update({
        variables: {record: toPointerForUpdateUser(credentials)},
      });
    } catch (e) {
      console.log(e);
    }
  };
  return {
    onSubmit: handleSubmit(onSubmit),
    loading,
    control,
    formErrors,
    responseError,
  };
};
