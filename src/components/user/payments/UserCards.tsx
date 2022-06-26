import CardDeleteCardPopup from '@/components/common/popup/CardDeletePopup';
import DeletePopup from '@/components/common/popup/DeletePopup';
import CustomRoundCheckbox from '@/components/unsubscribe/form-elements/CustomRoundCheckbox';
import {useCardDelete} from '@/graph-hooks/cards/useCardDelete';
import {ICard} from '@/types/card';
import {FC, Fragment, useState} from 'react';
import {CardType} from 'src/graphql.schema';
import {useModal} from 'src/hooks/useModal';
import {Media} from 'src/media-styles';
import * as UI from 'styles/user/payments/payment-cards';

interface IUserCardsProps {
  cards: {
    id: string;
    displayName: string;
    Cards: ICard[];
  }[];
}

const UserCards: FC<IUserCardsProps> = ({cards}) => {
  const {isOpen, onOpen, onClose} = useModal();
  const {onCardDelete} = useCardDelete(onClose);

  const initialCardId = cards?.[0]?.Cards?.[0]?.id;
  const [cardId, setCardId] = useState<string>(initialCardId);

  const onCardChange = (id?: string) => {
    if (id) {
      setCardId(id);
    }
  };

  return (
    <UI.CardsWrapper>
      {cards?.map(({id, displayName, Cards}) => {
        return (
          <Fragment key={id}>
            <Media lessThan='md'>
              <UI.BlockTitle mb={15}>Мои карты: {displayName}</UI.BlockTitle>
              {Cards?.map(({id, type, masked}) => {
                const {CardTypeMastercard} = CardType;
                const name =
                  type === CardTypeMastercard ? 'MasterCard' : 'Visa';

                return (
                  <Fragment key={id}>
                    <UI.CardWrapper>
                      <CustomRoundCheckbox
                        right
                        currentValue={cardId}
                        type='radio'
                        value={id}
                        name={'card'}
                        onChange={onCardChange}>
                        <UI.CardContainer>
                          <UI.Card>
                            {type === CardTypeMastercard ? (
                              <UI.MasterCardSVG />
                            ) : (
                              <UI.VisaSVG />
                            )}
                          </UI.Card>
                          <UI.CardData>
                            <UI.CardTitle>
                              {name} {masked}
                            </UI.CardTitle>
                          </UI.CardData>
                        </UI.CardContainer>
                      </CustomRoundCheckbox>
                    </UI.CardWrapper>
                  </Fragment>
                );
              })}
              <UI.DeleteButton onClick={onOpen}>Удалить карту</UI.DeleteButton>
              <DeletePopup
                description='Вы уверены, что хотите удалить выбранную карту?'
                onPopupClose={onClose}
                open={isOpen}
                onDelete={() => onCardDelete(cardId)}
              />
            </Media>
          </Fragment>
        );
      })}
      {cards?.map(({id, displayName, Cards}) => (
        <Fragment key={id}>
          <Media greaterThan='sm'>
            <UI.BlockTitle mb={10}>Платежные данные</UI.BlockTitle>

            <UI.BlockText>
              На этой странице вы можете управлять данными ваших банковских карт
              и увидеть историю совершенных денежных операций.
            </UI.BlockText>
            <UI.BlockTitle mb={15}>Мои карты: {displayName}</UI.BlockTitle>
            <UI.CardSectionWrapper>
              {Cards?.map(({id, masked, type}) => {
                const {CardTypeMastercard} = CardType;
                return (
                  <Fragment key={id}>
                    <UI.BigCard>
                      <UI.CardTitle>{masked}</UI.CardTitle>
                      {type === CardTypeMastercard ? (
                        <UI.BigMasterSVG />
                      ) : (
                        <UI.BigVisaSVG />
                      )}
                    </UI.BigCard>
                  </Fragment>
                );
              })}
            </UI.CardSectionWrapper>
            <UI.DeleteButton onClick={onOpen}>Удалить карту</UI.DeleteButton>
            <CardDeleteCardPopup
              onPopupClose={onClose}
              open={isOpen}
              cards={cards}
              onDelete={onCardDelete}
            />
          </Media>
        </Fragment>
      ))}
    </UI.CardsWrapper>
  );
};

export default UserCards;
