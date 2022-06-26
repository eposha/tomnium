import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useMutation} from '@apollo/client';
import {IResetPasswordRequest, RESET_PASSWORD} from '@/mutations/auth';

export const useResetPassword = (path?: string) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({defaultValues: {email: ''}, mode: 'all'});
  const value = watch('email');

  const [resetPassword, {loading, error: responseError}] =
    useMutation<IResetPasswordRequest>(RESET_PASSWORD, {
      onCompleted() {
        setIsSuccess(true);
        if (!path) return;
        localStorage.setItem('page', path);
      },
    });

  const onSubmit: SubmitHandler<IResetPasswordRequest> = async (email) => {
    try {
      await resetPassword({
        variables: email,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    control,
    value,
    onSubmit: handleSubmit(onSubmit),
    loading,
    responseError,
    formErrors: errors,
    isSuccess,
  };
};
