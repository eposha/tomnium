import {useMutation} from '@apollo/client';
import {Message} from 'src/graphql.schema';
import {MESSAGE_PIN} from 'src/graph/mutations/chat';

const useMessagePin = () => {
  const [
    messagePin,
    {data, loading: loadingPinMessage, error: errorPinMessage},
  ] = useMutation<{messagePin: Message}, {id: string}>(MESSAGE_PIN);

  const onMessagePin = async (id: string): Promise<void> => {
    try {
      await messagePin({
        variables: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onMessagePin,
    currentPinnedMessage: data?.messagePin || null,
    loadingPinMessage,
    errorPinMessage,
  };
};

export default useMessagePin;
