import {AccordionItem} from '@/components/common/AccordionItem';
import {
  AppointmentsDatePicker,
  CancelAppointmentModal,
} from '@/components/common/appointmentsDatepiker';
import {Message as MessageComponent} from '@/components/common/message';
import {TestimonialsCarousel} from '@/components/common/testimonial/Carousel';
import {Aside} from '@/components/consultations/consultation/Aside';
import {ConsultationCard} from '@/components/consultations/consultation/Card';

import {
  IUseAppointments,
  IUseBookAppointment,
  IUseCancelAppointment,
} from '@/graph-hooks/appointments';
import {
  IAppointment,
  IFaqOptions,
  ISelectOption,
  ISelectOptions,
} from '@/types/common';
import {IConsultation, IDataSelect} from '@/types/consultation';
import {IUser} from '@/types/user';
import {addMonths} from 'date-fns';
import dynamic from 'next/dynamic';
// import {Chat} from 'src/components/chat';
import React, {useEffect, useState} from 'react';
import {Box, Text} from 'styles/common';
import {
  MainInnerPage,
  WrapperPage,
} from 'styles/consultations/consultationPage';
import {FAQ} from 'styles/courses';
import * as UI from 'styles/courses/course-page';
import {Maybe, Message} from 'src/graphql.schema';
import HeadSeo from '@/components/common/HeadSeo';
import {getImgSrc} from '@/helpers/image';
import {TRefetchUser} from '@/components/common/PurchaseProducts';
import {Media} from 'src/media-styles';
import FeedbackForm from '@/components/common/feedback/Form';
import {
  MobileAppointmentsWrapper,
  WrapperAppointments,
} from 'styles/consultations/appointments';
import {Appointment} from './Appointment';
import {LOCALES} from '@/constants/locales';

const ContentBlock = dynamic(
  () => import('src/components/content-block/ContentBlock'),
);

interface IProps {
  consultation?: IConsultation | null;
  user?: IUser | null;
  refetchUser: TRefetchUser;
  locale: string;
  appointmentId?: string;
  consultationId?: string | number;
  appointmentsMy?: IAppointment[] | null;
  appointments?: IAppointment[] | null;
  timezonesOptions: ISelectOptions;
  dataPricesSelect: IDataSelect;
  dataLanguageSelect: IDataSelect;
  dataAppointments: IUseAppointments;
  dataBookAppointment: IUseBookAppointment;
  dataCancelAppointment: IUseCancelAppointment;
  dataSelectedDate: {
    selectedDate: Date | null;
    setDate: React.Dispatch<React.SetStateAction<Date | null>>;
  };
  dataTimezone: {
    timezone: ISelectOption;
    setTimezone: React.Dispatch<React.SetStateAction<ISelectOption>>;
  };
  loading: boolean;
  queryAppointment?: IAppointment;
  faqOptions: IFaqOptions[];
  roomId?: string;
  pinnedMessage?: Maybe<Message>;
  url: string;
  isChatActive: boolean;
  fetchAppointmentsByMonth: (date: Date) => void;
  appointmentsFromMonth?: IAppointment[] | null;
}

export const Consultation: React.FC<IProps> = ({
  consultation,
  user,
  refetchUser,
  appointmentId,
  timezonesOptions,
  appointmentsMy,
  locale,
  dataLanguageSelect,
  dataPricesSelect,
  dataAppointments,
  dataBookAppointment,
  dataCancelAppointment,
  dataSelectedDate,
  dataTimezone,
  loading,
  queryAppointment,
  consultationId,
  faqOptions,
  url,
  // roomId,
  // pinnedMessage,
  // isChatActive,
  fetchAppointmentsByMonth,
  appointmentsFromMonth,
}) => {
  const errMsg =
    dataBookAppointment.error?.message ||
    dataCancelAppointment.error?.message ||
    '';
  const successMsg =
    dataBookAppointment.success || dataCancelAppointment.success || '';

  const [isOpenErrorMsg, serIsOpenErrorMsg] = useState(false);
  const [isOpenSuccessMsg, serIsOpenSuccessMsg] = useState(false);
  const [fixBugRenderCalendar, setFixBugRenderCalendar] = useState(false);

  useEffect(() => {
    serIsOpenErrorMsg(Boolean(errMsg));
  }, [errMsg]);

  useEffect(() => {
    serIsOpenSuccessMsg(Boolean(successMsg));
  }, [successMsg]);

  useEffect(() => {
    setFixBugRenderCalendar(true);
  }, []);

  const handleCloseErrorMsg = () => {
    serIsOpenErrorMsg(false);
  };

  const handleCloseSuccessMsg = () => {
    serIsOpenSuccessMsg(false);
    dataBookAppointment.setSuccess(null);
    dataCancelAppointment.setSuccess(null);
  };

  const isCalendar = Boolean(
    consultation?.ticketsCount || appointmentsMy?.length,
  );
  const image = consultation?.image?.find((it) => it.width === 150)?.path;
  const imageWeb = getImgSrc(consultation?.Product?.imageWeb?.[0]?.path);
  const imageMob = getImgSrc(consultation?.Product?.imageMob?.[0]?.path);

  const [isOpenCancelAppointmentModal, setIsOpenCancelAppointmentModal] =
    useState(false);
  const [currentAppointmentId, setCurrentAppointmentId] = useState<
    number | null
  >(null);

  const handleCloseCancelAppointmentModal = () => {
    setIsOpenCancelAppointmentModal(false);
  };

  const handleOpenCancelAppointmentModal = (id: number) => () => {
    setIsOpenCancelAppointmentModal(true);
    setCurrentAppointmentId(id);
  };

  const handleCancelAppointment = () => {
    if (!currentAppointmentId) return;
    dataCancelAppointment.onCancelAppointment(currentAppointmentId);
    handleCloseCancelAppointmentModal();
  };
  return (
    <>
      <HeadSeo
        seoTitle={consultation?.seoTitle}
        seoDescription={consultation?.seoDescription}
      />

      <WrapperPage>
        <Aside
          duration={consultation?.duration}
          appointmentsMy={appointmentsMy}
          locale={locale}
          meetingMethod={consultation?.MeetingMethod}
          dataCancelAppointment={dataCancelAppointment}
          beforeCancelDuration={consultation?.beforeCancelDuration}
        />
        <MainInnerPage>
          <div>
            <ConsultationCard
              consultationId={consultationId}
              avatar={image}
              productImages={{imageWeb, imageMob}}
              user={user}
              refetchUser={refetchUser}
              productId={consultation?.productId}
              dataLanguageSelect={dataLanguageSelect}
              dataPricesSelect={dataPricesSelect}
              queryAppointmentId={appointmentId}
              ticketsCount={consultation?.ticketsCount}
              description={consultation?.description}
              duration={consultation?.duration}
              Prices={consultation?.Product?.Tariffs?.[0].Prices}
              Categories={consultation?.Categories}
              title={consultation?.title}
              Appointments={consultation?.Appointments}
              url={url}
            />
            {isCalendar && fixBugRenderCalendar && (
              <Box mt={'10px'} mw={'780px'}>
                <AppointmentsDatePicker
                  locale={locale}
                  queryAppointmentId={Number(appointmentId)}
                  minDate={new Date()}
                  maxDate={addMonths(new Date(), 12)}
                  timezonesOptions={timezonesOptions}
                  appointmentsMy={appointmentsMy}
                  dataAppointments={dataAppointments}
                  dataBookAppointment={dataBookAppointment}
                  dataCancelAppointment={dataCancelAppointment}
                  dataSelectedDate={dataSelectedDate}
                  dataTimezone={dataTimezone}
                  loading={loading}
                  queryAppointment={queryAppointment}
                  duration={consultation?.duration || ''}
                  fetchAppointmentsByMonth={fetchAppointmentsByMonth}
                  appointmentsFromMonth={appointmentsFromMonth}
                />
              </Box>
            )}
            <MessageComponent
              handleClose={handleCloseErrorMsg}
              isOpen={isOpenErrorMsg}
              type={'error'}
              text={errMsg}
              margin={'20px 0 0 0'}
            />
            <MessageComponent
              handleClose={handleCloseSuccessMsg}
              isOpen={isOpenSuccessMsg}
              type={'success'}
              text={successMsg}
              margin={'20px 0 0 0'}
            />

            {!!appointmentsMy?.length && (
              <Media lessThan='lg'>
                <MobileAppointmentsWrapper>
                  <CancelAppointmentModal
                    isOpenModal={isOpenCancelAppointmentModal}
                    handleCancelAppointment={handleCancelAppointment}
                    handleCloseModal={handleCloseCancelAppointmentModal}
                    loading={dataCancelAppointment.loading}
                  />
                  <WrapperAppointments>
                    {(appointmentsMy || [])?.map((it) => (
                      <Appointment
                        data={it}
                        key={it.id}
                        locale={LOCALES[locale || '']}
                        meetingMethod={consultation?.MeetingMethod}
                        duration={consultation?.duration || ''}
                        beforeCancelDuration={
                          consultation?.beforeCancelDuration
                        }
                        handleOpenCancelAppointmentModal={
                          handleOpenCancelAppointmentModal
                        }
                      />
                    ))}
                  </WrapperAppointments>
                </MobileAppointmentsWrapper>
              </Media>
            )}
          </div>
          {consultation?.ConsultationContent && (
            <ContentBlock contentData={consultation.ConsultationContent} />
          )}

          {/* {roomId && isChatActive && (
            <Chat
              roomId={roomId}
              pinnedMessage={pinnedMessage}
              title={consultation?.title}
              type='consultation'
            />
          )} */}

          {!appointmentId && (
            <Box mt={'20px'} mw='780px'>
              <FeedbackForm
                tariffId={consultation?.Product?.Tariffs[0].id ?? 0}
                title={consultation?.title ?? ''}
              />
            </Box>
          )}

          {!!consultation?.ConsultationFeedbacks?.length && (
            <Box mt={'55px'} mw='780px'>
              <UI.TestimonialsWrapper>
                <Text fontSize='18px' margin='0 0 25px'>
                  Отзывы участников курса
                </Text>
                <TestimonialsCarousel
                  testimonials={consultation?.ConsultationFeedbacks}
                />
              </UI.TestimonialsWrapper>
            </Box>
          )}
          <Box mt={'45px'} mw='780px'>
            {faqOptions && (
              <>
                <Text fontSize='20px'>Часто задаваемые вопросы</Text>
                <FAQ>
                  {faqOptions?.map((item, index) => (
                    <AccordionItem item={item} key={`${item.title}_${index}`} />
                  ))}
                </FAQ>
              </>
            )}
          </Box>
        </MainInnerPage>
      </WrapperPage>
    </>
  );
};
