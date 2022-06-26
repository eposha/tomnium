import {useMutation} from '@apollo/client';
import {Message, MessageUpdateInput} from 'src/graphql.schema';
import {MESSAGES_UPDATE} from 'src/graph/mutations/chat';

const useMessageUpdate = () => {
  const [
    messageUpdate,
    {
      data: updatedMessageMessage,
      loading: loadingUpdateMessage,
      error: errorUpdateMessage,
    },
  ] = useMutation<{messageUpdate: Message}, {record: MessageUpdateInput}>(
    MESSAGES_UPDATE,
  );

  const onMessageUpdate = async (record: MessageUpdateInput): Promise<void> => {
    if (!record.body) return;
    try {
      await messageUpdate({
        variables: {
          record,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onMessageUpdate,
    updatedMessageMessage,
    loadingUpdateMessage,
    errorUpdateMessage,
  };
};

export default useMessageUpdate;
