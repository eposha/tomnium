import {useMutation} from '@apollo/client';
import {Message, MessageCreateInput} from 'src/graphql.schema';
import {MESSAGES_CREATE} from 'src/graph/mutations/chat';

const useMessageCreate = () => {
  const [
    messageCreate,
    {
      data: createdMessage,
      loading: loadingCreatedMessage,
      error: errorCreatedMessage,
    },
  ] = useMutation<{messageCreate: Message}, {record: MessageCreateInput}>(
    MESSAGES_CREATE,
  );

  const onMessageCreate = async (record: MessageCreateInput): Promise<void> => {
    if (!record.body && !record.file) return;
    try {
      await messageCreate({
        variables: {
          record,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onMessageCreate,
    createdMessage,
    loadingCreatedMessage,
    errorCreatedMessage,
  };
};

export default useMessageCreate;
