import {FC} from 'react';
import {Ticket} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {Button} from 'styles/common';
import {Block} from 'styles/diagnostics';
import {
  TicketsWrapper,
  TicketItemInner,
  TicketCell,
  BlockController,
  Title,
  Wrapper,
  TitleWrapper,
  BtnWrapper,
} from 'styles/diagnostics/components';
import TicketItem from './Ticket';

const ticketsHeaders = ['№', 'Дата', 'Тема', 'Отдел', 'Статус', ''];

interface ITicketsBlock {
  Tickets: Ticket[] | undefined;
  openModal: () => void;
}

const TicketsBlock: FC<ITicketsBlock> = ({Tickets, openModal}) => {
  return (
    <Wrapper>
      <Media at='xs'>
        <BlockController>
          <Title>Ваши запросы</Title>
          <Button
            onClick={() => {
              openModal();
            }}
            $transparent>
            Создать запрос
          </Button>
        </BlockController>
      </Media>
      <Block mb={30}>
        <Media greaterThan='xs'>
          <TitleWrapper>
            <Title>Ваши запросы</Title>
          </TitleWrapper>
        </Media>
        <TicketsWrapper>
          <Media greaterThan='xs'>
            <TicketItemInner>
              {ticketsHeaders.map((elem: string, index: number) => (
                <TicketCell key={index}>{elem}</TicketCell>
              ))}
            </TicketItemInner>
          </Media>
          {Tickets &&
            Tickets.map((ticket: Ticket, index: number) => (
              <TicketItem ticket={ticket} key={index} />
            ))}
        </TicketsWrapper>
        <Media greaterThan={'md'}>
          <BtnWrapper>
            <Button
              onClick={() => {
                openModal();
              }}
              width={160}>
              Создать запрос
            </Button>
          </BtnWrapper>
        </Media>
      </Block>
    </Wrapper>
  );
};

export default TicketsBlock;
