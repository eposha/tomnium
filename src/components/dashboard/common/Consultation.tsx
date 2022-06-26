import {IConsultation} from '@/types/consultation';
import {FC} from 'react';
import Link from 'next/link';
import {Media} from 'src/media-styles';
import {Box, Flex} from 'styles/dashboard/common';
import {getNearestDate} from '@/helpers/common';
import * as UI from 'styles/dashboard/consultation';
import {
  EventPhoto,
  EventCreaterTitle,
  TimeContainer,
  TimeLabel,
} from 'styles/dashboard/dashboard-event';

interface IMyConsultation {
  consultation: IConsultation;
}

const Consultation: FC<IMyConsultation> = ({consultation}) => {
  const {Consultant, Appointments} = consultation || {};

  const nearestConsultation = getNearestDate(Appointments);

  if (!Appointments || Appointments?.length == 0) {
    return null;
  }

  return (
    <UI.ConsultationWrapper>
      <Link
        href={`/consultations/${
          nearestConsultation ? nearestConsultation[0]?.consultationId : '#'
        }`}
        passHref>
        <a>
          <UI.ConsultatioTitle>Консультация</UI.ConsultatioTitle>
          <UI.FlexContainer mb={10}>
            <EventPhoto
              src={
                Consultant?.avatar
                  ? '/images/courses/test1.jpg'
                  : '/images/courses/test1.jpg'
              }
            />
            <Box width={100}>
              <EventCreaterTitle>{Consultant?.fullName}</EventCreaterTitle>
            </Box>
            <UI.ArrowRightSVG />
          </UI.FlexContainer>
          <Media lessThan='md'>
            <Flex>
              <UI.FlexContainer>
                <UI.ZoomSVG />
                <UI.ZoomText>Zoom</UI.ZoomText>
              </UI.FlexContainer>
              <TimeContainer>
                <UI.TimeText>До начала:</UI.TimeText>
                <TimeLabel>22:07:21</TimeLabel>
              </TimeContainer>
            </Flex>
          </Media>
          <Media greaterThan='sm'>
            <Flex>
              <TimeContainer>
                <UI.TimeText>До начала:</UI.TimeText>
                <TimeLabel>22:07:21</TimeLabel>
              </TimeContainer>
            </Flex>
          </Media>
        </a>
      </Link>
    </UI.ConsultationWrapper>
  );
};

export default Consultation;
