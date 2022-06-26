import {useMutation} from '@apollo/client';
import {Message} from 'src/graphql.schema';
import {MESSAGES_DELETE} from 'src/graph/mutations/chat';
import {IMessageList} from './useMessages';

const useMessageDelete = () => {
  const [
    messageDelete,
    {
      data: deletedMessage,
      loading: loadingDeleteMessage,
      error: errorDeleteMessage,
    },
  ] = useMutation<{messageDelete: Message}, {id: string}>(MESSAGES_DELETE);

  const onMessageDelete = async (
    id: string,
    setMessageList: (
      arg: ((arg: IMessageList | null) => IMessageList) | null,
    ) => void,
  ): Promise<void> => {
    try {
      await messageDelete({
        variables: {
          id,
        },
        onCompleted: (data) => {
          setMessageList((prevList) =>
            prevList?.filter((item) => item?.id !== data.messageDelete.id),
          );
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onMessageDelete,
    deletedMessage,
    loadingDeleteMessage,
    errorDeleteMessage,
  };
};

export default useMessageDelete;
