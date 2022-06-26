import * as UI from 'styles/dashboard/dashboard-event';
import PhotoSeries from './common/PhotoSeries';
import Link from 'next/link';
import {Media} from 'src/media-styles';
import {formatDate} from '@/helpers/common';
import {DATE_FORMAT} from '@/constants/common';
import {FC} from 'react';

interface IEventCard {
  title?: string;
  id?: string;
  startsAt?: string;
  studentCount?: number;
}

const EventCard: FC<IEventCard> = ({title, id, startsAt, studentCount}) => {
  return (
    <UI.EventContainer>
      <UI.EventInfoContainer>
        <UI.Container mb={10}>
          <UI.EventPicture src={'/images/courses/test1.jpg'} />
          <UI.ConerLabel>Новое</UI.ConerLabel>
          <UI.Label>Конференция</UI.Label>
        </UI.Container>
        <UI.Container>
          <UI.EventTimeText>
            <UI.CalendarSVG />
            <UI.EventTime>
              {`${formatDate(startsAt, DATE_FORMAT.primary)}, ${formatDate(
                startsAt,
                DATE_FORMAT.time,
              )} по `}
            </UI.EventTime>
            <UI.EventTimezone>МСК</UI.EventTimezone>
          </UI.EventTimeText>
          <Media greaterThan='md'>
            <UI.TimeContainer mb={20}>
              <UI.TimeText>До начала:</UI.TimeText>
              <UI.TimeLabel>22:07:21</UI.TimeLabel>
            </UI.TimeContainer>
          </Media>
          <UI.Container mb={15}>
            <PhotoSeries />
            <UI.EventParticipantText fw={700} pl={52}>
              {studentCount}
            </UI.EventParticipantText>
            <UI.EventParticipantText fw={500} pl={3}>
              Участвуют
            </UI.EventParticipantText>
          </UI.Container>
        </UI.Container>
      </UI.EventInfoContainer>
      <UI.EventTitle>{title}</UI.EventTitle>
      <UI.EventInfoContainer jc>
        <UI.EventCreaterContainer>
          <UI.EventPhoto src={'/images/courses/test1.jpg'} />
          <UI.Container>
            <UI.EventCreaterTitle mb={5}>
              Светлана Керимова
            </UI.EventCreaterTitle>
            <UI.EventCreaterText>
              Основательница Woman Insight
            </UI.EventCreaterText>
          </UI.Container>
        </UI.EventCreaterContainer>
        <UI.FlexContainer>
          <Link href={'#'} passHref>
            <UI.EventButton color='blueberry' bgc='white'>
              Подробнее
            </UI.EventButton>
          </Link>
          <Link href={`/documents/${id}`} passHref>
            <UI.EventButton color='white' bgc='blueberry' $display>
              Записаться
            </UI.EventButton>
          </Link>
        </UI.FlexContainer>
      </UI.EventInfoContainer>
    </UI.EventContainer>
  );
};

export default EventCard;
