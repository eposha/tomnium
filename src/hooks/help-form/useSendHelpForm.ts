import {useMutation} from '@apollo/client';
import {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {
  IHelpFormResponse,
  IHelpFormRequest,
  SEND_HELP_FORM,
} from '@/mutations/help-form/useHelpForm';
import {IUser} from '@/types/user';

interface HelpFormSubmit {
  fullName: string;
  phone: string;
  email: string;
  tariffId: number;
  message: string;
}

export const useSendHelpForm = (params: {
  user: IUser | null;
  tariffId: number;
  title: string;
  onOpen?: () => void;
}) => {
  const {
    control,
    register,
    handleSubmit,
    reset,

    formState: {errors: validateErrors},
  } = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
    },
  });

  const {user, tariffId, title, onOpen} = params || {};

  const [sendHelpForm, {loading}] = useMutation<
    IHelpFormResponse,
    IHelpFormRequest
  >(SEND_HELP_FORM, {
    onCompleted() {
      onOpen && onOpen();
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        fullName: user?.fullName ?? '',
        phone: user?.phone ?? '',
        email: user?.email ?? '',
      });
    }
  }, [reset, user]);

  const onSubmit: SubmitHandler<HelpFormSubmit> = async (record) => {
    try {
      await sendHelpForm({
        variables: {
          record: {
            ...record,
            tariffId,
            message: `Запрос от пользователя по '${title}'`,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
    control,
    //@ts-ignore
    handleSubmit: handleSubmit(onSubmit),
    validateErrors,
    loading,
  };
};
