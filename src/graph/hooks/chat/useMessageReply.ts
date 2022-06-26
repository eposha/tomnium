import {useMutation} from '@apollo/client';
import {Message, MessageReplyInput} from 'src/graphql.schema';
import {MESSAGES_REPLY} from 'src/graph/mutations/chat';

const useMessageReply = () => {
  const [
    messageReply,
    {
      data: repliedMessageMessage,
      loading: loadingReplyMessage,
      error: errorReplyMessage,
    },
  ] = useMutation<{messageReply: Message}, {record: MessageReplyInput}>(
    MESSAGES_REPLY,
  );

  const onMessageReply = async (record: MessageReplyInput): Promise<void> => {
    if (!record.body) return;
    try {
      await messageReply({
        variables: {
          record,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onMessageReply,
    repliedMessageMessage,
    loadingReplyMessage,
    errorReplyMessage,
  };
};

export default useMessageReply;
