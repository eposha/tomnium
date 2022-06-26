import {TicketCell, TicketItemInner} from 'styles/diagnostics/components';
import {Ticket} from 'src/graphql.schema';
import Link from 'next/link';
import {FC} from 'react';
import {
  TicketMobileInner,
  TicketNumber,
  Inner,
  TicketInfoWrapper,
  CellText,
  MobileContainer,
  CellLink,
} from 'styles/diagnostics/components/mobile/index';
import {Media} from 'src/media-styles';
import {BtnLink} from 'styles/diagnostics';

interface ITicket {
  ticket: Ticket;
}

const TicketItem: FC<ITicket> = ({ticket}) => {
  return (
    <>
      <MobileContainer at='xs'>
        <TicketMobileInner>
          <TicketNumber>{ticket.id}</TicketNumber>
          <Inner>
            <TicketInfoWrapper mb={15}>
              <div>
                <CellText mb={5}>Тех. поддержка</CellText>
                <CellText color='#697077'>{ticket.title}</CellText>
              </div>
              <CellText color='#697077' fz={10}>
                16.06.2021
              </CellText>
            </TicketInfoWrapper>
            <TicketInfoWrapper>
              <CellText color='#516FF6'>Есть ответ</CellText>
              <Link href={`/chat/${ticket.id}/ticket-chat`} passHref>
                <CellLink>Смотреть ответ</CellLink>
              </Link>
            </TicketInfoWrapper>
          </Inner>
        </TicketMobileInner>
      </MobileContainer>
      <Media greaterThan='xs'>
        <TicketItemInner $isClosed={ticket.closed}>
          <TicketCell>{ticket.id}</TicketCell>
          <TicketCell>Дата</TicketCell>
          <TicketCell>{ticket.title}</TicketCell>
          <TicketCell>Отдел</TicketCell>
          <TicketCell>{ticket.closed ? 'Закрыт' : 'Новый'}</TicketCell>
          <TicketCell>
            <Link href={`/chat/${ticket.id}/ticket-chat`} passHref>
              <BtnLink>Смотреть</BtnLink>
            </Link>
          </TicketCell>
        </TicketItemInner>
      </Media>
    </>
  );
};

export default TicketItem;
