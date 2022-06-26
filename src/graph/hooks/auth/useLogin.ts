import {useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {setCookie} from 'nookies';
import {Control, UseFormRegister} from 'react-hook-form/dist/types/form';
import {FieldErrors} from 'react-hook-form/dist/types/errors';

import axios from 'axios';

interface ILoginRequest {
  login?: string;
  password?: string;
}

type TUseLogin = (options?: {
  onSuccess?: () => void;
  onError?: () => void;
  requestOptions?: Record<string, any>;
}) => {
  onSubmit: () => void;
  loading: boolean;
  control: Control<any>;
  formErrors: FieldErrors<any>;
  responseError?: Error;
  register: UseFormRegister<any>;
};

export const useLogin: TUseLogin = (options) => {
  const [loading, setLoading] = useState(false);
  const [responseError, setResponseError] = useState<Error>();

  const {
    control,
    handleSubmit,
    formState: {errors: formErrors},
    register,
  } = useForm({
    defaultValues: {
      password: '',
      email: '',
    },
    mode: 'all',
  });

  const onSubmit: SubmitHandler<ILoginRequest> = async (credentials) => {
    try {
      setLoading(true);
      const {data} = await axios.post(
        process.env.NEXT_PUBLIC_REST_API_URL + '/auth/login',
        credentials,
      );
      setLoading(false);
      if (data?.token) {
        setCookie(null, 'DNA_TOKEN', data?.token, {path: '/'});
        if (options?.onSuccess) options?.onSuccess();
      }
    } catch (error) {
      setLoading(false);
      setResponseError(error as Error);
    }
  };
  return {
    onSubmit: handleSubmit(onSubmit),
    loading,
    control,
    formErrors,
    responseError,
    register,
  };
};
