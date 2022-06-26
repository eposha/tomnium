import {SubmitHandler, useForm} from 'react-hook-form';
import {useMutation} from '@apollo/client';
import {
  IRegistrationRequest,
  IRegistrationResponse,
  REGISTRATION,
} from '@/mutations/auth';
import {setCookie} from 'nookies';
import {generate} from 'generate-password';

const getRandomPassword = () => {
  return generate({
    length: 10,
    numbers: true,
    lowercase: true,
    uppercase: false,
    exclude: '1, l, I, 0, O, o, u, v, 5, S, s, 2, Z, 3, 4, x, X, V',
  });
};

export const useRegister = ({
  onSuccess,
  requestOptions,
  generatePassword = true,
}: {
  onSuccess?: () => void;
  requestOptions?: Record<string, any>;
  generatePassword?: boolean;
}) => {
  const {
    handleSubmit,
    control,
    formState: {errors: formErrors},
    watch,
    register,
  } = useForm({
    defaultValues: {
      password: generatePassword ? getRandomPassword() : '',
      email: '',
      fullName: '',
      policy: false,
      phone: '',
    },
    mode: 'all',
  });

  const password = watch('password');

  const [registration, {loading, error: responseError}] = useMutation<
    IRegistrationResponse,
    IRegistrationRequest
  >(REGISTRATION, {
    ...(requestOptions || {}),
    onCompleted(data) {
      const token = data?.registration?.token;
      setCookie(null, 'DNA_TOKEN', token, {path: '/'});
      if (onSuccess) onSuccess();
    },
  });

  const onSubmit: SubmitHandler<IRegistrationRequest> = async ({
    password,
    email,
    fullName,
    phone,
  }) => {
    try {
      await registration({
        variables: {password, email, fullName, phone},
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    password,
    loading,
    formErrors,
    responseError,
    register,
    watch,
  };
};
