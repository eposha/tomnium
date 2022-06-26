import {CARD_DELETE, ICardDeleteRequest} from '@/mutations/cards/cardDelete';
import {GET_MY_CARDS} from '@/query/user/payments/getMyCards';
import {useMutation} from '@apollo/client';

export const useCardDelete = (onClose?: () => void) => {
  const [
    cardDelete,
    {data: deletedCard, loading: loadingDeleteCard, error: errorDeleteCard},
  ] = useMutation<ICardDeleteRequest>(CARD_DELETE, {
    refetchQueries: [GET_MY_CARDS],
  });

  const onCardDelete = async (id: string): Promise<void> => {
    try {
      await cardDelete({
        variables: {
          id,
        },
        onCompleted() {
          onClose && onClose();
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    onCardDelete,
    deletedCard,
    loadingDeleteCard,
    errorDeleteCard,
  };
};
