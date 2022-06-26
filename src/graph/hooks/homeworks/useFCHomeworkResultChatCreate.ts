import {
  FC_HOMEWORK_RESULT_CHAT_CREATE,
  IFCHomeworkResulChatCreateResponse,
  IFCHomeworkResultChatCreateRequest,
} from '@/mutations/homeworks/homeworkResultChatCreate';
import {GET_FC_HOMEWORK_RESULT_BY_ID} from '@/query/homeworkResults/getFCHomeworkResultById';
import {useMutation} from '@apollo/client';
import {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';

const useFCHomeworkResulChatCreate = (params: {
  id?: number;
  chatCreated?: boolean;
}) => {
  const {handleSubmit, reset} = useForm({
    defaultValues: {
      id: '',
      chatCreated: false,
    },
  });

  const [onFCHomeworkResultUpdate, {loading}] = useMutation<
    IFCHomeworkResulChatCreateResponse,
    IFCHomeworkResultChatCreateRequest
  >(FC_HOMEWORK_RESULT_CHAT_CREATE, {
    refetchQueries: [GET_FC_HOMEWORK_RESULT_BY_ID],
  });

  const {id, chatCreated} = params;

  useEffect(() => {
    if (params) {
      reset({
        chatCreated,
      });
    }
  }, [reset]);

  const onSubmit: SubmitHandler<{
    id: number;
    chatCreated: boolean;
  }> = async () => {
    try {
      await onFCHomeworkResultUpdate({
        variables: {
          record: {
            chatCreated: !Boolean(chatCreated),
            id,
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    //@ts-ignore
    handleSubmit: handleSubmit(onSubmit),
    loading,
  };
};

export default useFCHomeworkResulChatCreate;
