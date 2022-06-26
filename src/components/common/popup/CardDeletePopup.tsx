import CustomRoundCheckbox from '@/components/unsubscribe/form-elements/CustomRoundCheckbox';
import {ICard} from '@/types/card';
import {FC, Fragment, ReactChild, useState} from 'react';
import {CardType} from 'src/graphql.schema';
import * as UI from 'styles/popup';
import * as CARD from 'styles/user/payments/payment-cards';

interface CardDeletePopupProps {
  children?: ReactChild | ReactChild[];
  open: boolean;
  onPopupClose: () => void;
  cards: {
    id: string;
    displayName: string;
    Cards: ICard[];
  }[];
  onDelete: (id: string) => void;
}

const CardDeleteCardPopup: FC<CardDeletePopupProps> = ({
  open,
  onPopupClose,
  cards,
  onDelete,
}) => {
  const initialCardId = cards?.[0]?.Cards?.[0]?.id;
  const [cardId, setCardId] = useState<string>(initialCardId);

  const onCardChange = (id?: string) => {
    if (id) {
      setCardId(id);
    }
  };

  return open ? (
    <UI.ModalWrapper onClick={onPopupClose}>
      <UI.ModalContainer onClick={(e) => e.stopPropagation()}>
        <UI.ModalTitle>Выбирите карту:</UI.ModalTitle>
        {cards?.map(({id, Cards}) => {
          return (
            <Fragment key={id}>
              {Cards?.map(({id, type, masked}) => {
                const {CardTypeMastercard} = CardType;
                const name =
                  type === CardTypeMastercard ? 'MasterCard' : 'Visa';

                return (
                  <Fragment key={id}>
                    <CARD.CardWrapper as={'form'}>
                      <CustomRoundCheckbox
                        currentValue={cardId}
                        type={'radio'}
                        value={id}
                        name={'card'}
                        right
                        onChange={onCardChange}>
                        <CARD.CardContainer>
                          <CARD.Card>
                            {type === CardTypeMastercard ? (
                              <CARD.MasterCardSVG />
                            ) : (
                              <CARD.VisaSVG />
                            )}
                          </CARD.Card>
                          <CARD.CardData>
                            <CARD.CardTitle>
                              {name} {masked}
                            </CARD.CardTitle>
                          </CARD.CardData>
                        </CARD.CardContainer>
                      </CustomRoundCheckbox>
                    </CARD.CardWrapper>
                  </Fragment>
                );
              })}
            </Fragment>
          );
        })}
        <UI.FlexContainer>
          <UI.ModalButton
            background='white'
            color='blueberry'
            onClick={onPopupClose}>
            Нет
          </UI.ModalButton>
          <UI.ModalButton
            background='blueberry'
            color='white'
            onClick={() => onDelete(cardId)}>
            Да, удалите
          </UI.ModalButton>
        </UI.FlexContainer>
      </UI.ModalContainer>
    </UI.ModalWrapper>
  ) : null;
};

export default CardDeleteCardPopup;
