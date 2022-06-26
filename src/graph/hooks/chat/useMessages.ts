import {useLazyQuery} from '@apollo/client';
import {Maybe, Message, MessagesResponse} from 'src/graphql.schema';
import {GET_MESSAGES} from '@/query/chat';

export interface IMessageResponse {
  messages: MessagesResponse;
}

export type IMessageList = Maybe<Array<Maybe<Message>>>;

const useMessages = () => {
  const [getMessages, {loading, error, data}] =
    useLazyQuery<IMessageResponse>(GET_MESSAGES);

  return {
    getMessages,
    messages: data?.messages || {},
    loading,
    error,
  };
};

export default useMessages;
