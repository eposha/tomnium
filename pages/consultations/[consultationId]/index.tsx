import React, {useEffect, useMemo, useState} from 'react';
import {Consultation} from '@/components/consultations/consultation';
import {
  useAppointments,
  useAppointmentsMy,
  useBookAppointment,
  useCancelAppointment,
} from '@/graph-hooks/appointments';
// import {useRoom} from '@/graph-hooks/chat';
import {useConsultation} from '@/graph-hooks/consultations/useConsultation';
import {useDirectories} from '@/graph-hooks/directories';
import {useUser} from '@/graph-hooks/user';
import {getSelectOptions, getSlugifiedUrl} from '@/helpers/common';
import {
  getDataLanguageSelect,
  getDataPricesSelect,
} from '@/helpers/consultation';
import {initApollo} from '@/lib/apolloClient';
import {CONSULTATION_QUERY} from '@/query/consultations';
import {FAQ_BY_ID} from '@/query/faqs/faqById';
import {IFaqOptions, ISelectOption} from '@/types/common';
import {IConsultation} from '@/types/consultation';
import {utcToZonedTime} from 'date-fns-tz';
import {GetServerSideProps, NextPage} from 'next';
import {useRouter} from 'next/router';
import {parseCookies} from 'nookies';
// import {EntityName} from 'src/graphql.schema';
import absoluteUrl from 'next-absolute-url';
import {useConsultationsMy} from '@/graph-hooks/consultations/useConsultationsMy';

interface IProps {
  ssrConsultation?: IConsultation | null;
  ssrFaqOptions: IFaqOptions[];
  url: string;
}

const ConsultationPage: NextPage<IProps> = ({
  ssrConsultation,
  ssrFaqOptions,
  url,
}) => {
  const router = useRouter();
  const {
    query: {consultationId, appointmentId},
  } = router;

  const {record} = getSlugifiedUrl(consultationId);

  //@ts-ignore
  const {consultation: clientConsultation} = useConsultation(record);
  const {languageCode, timezoneCode, currencyId} = parseCookies();

  const [timezone, setTimezone] = useState<ISelectOption>({
    label: '',
    value: '',
  });

  const [selectedDate, setDate] = useState<null | Date>(null);

  const {directories} = useDirectories();

  const {consultationsMy} = useConsultationsMy();

  const {user, loading: loadingUser, refetch: refetchUser} = useUser();

  const {
    appointmentsMy,
    loading: loadingAppointmentsMy,
    queryAppointment,
  } = useAppointmentsMy(
    clientConsultation?.id,
    appointmentId as string | undefined,
  );

  const dataAppointments = useAppointments({
    consultationId: clientConsultation?.id,
    timezone: timezone?.value,
  });

  const fetchAppointments = () => {
    dataAppointments.fetchAppointments(selectedDate);
  };

  const {
    fetchAppointments: fetchAppointmentsFromMonth,
    appointments: appointmentsFromMonth,
  } = useAppointments({
    consultationId: clientConsultation?.id,
    timezone: timezone?.value,
  });

  const fetchAppointmentsByMonth = (startDate: Date) => {
    fetchAppointmentsFromMonth(startDate, true);
  };

  useEffect(() => {
    if (clientConsultation?.id) {
      fetchAppointmentsByMonth(new Date());
    }
  }, [clientConsultation?.id]);

  const dataBookAppointment = useBookAppointment({
    consultationId: clientConsultation?.id,
    fetchAppointments,
  });

  const dataCancelAppointment = useCancelAppointment({
    consultationId: clientConsultation?.id,
    fetchAppointments,
  });

  useEffect(() => {
    if (loadingAppointmentsMy || !timezone) return;

    const date = queryAppointment ? queryAppointment?.startAt : new Date();

    setDate(utcToZonedTime(date, timezone?.value));
  }, [queryAppointment?.id, loadingAppointmentsMy, timezone]);

  useEffect(() => {
    if (!directories || !timezoneCode) return;
    const timezone = directories?.Timezones?.find(
      (it) => it?.tzCode === timezoneCode,
    );

    if (!timezone) return;
    setTimezone({label: timezone?.label, value: timezone?.tzCode});
  }, [directories, timezoneCode]);

  useEffect(() => {
    if (!selectedDate || !timezone?.value) return;

    dataAppointments.fetchAppointments(selectedDate);
  }, [selectedDate, timezone]);

  const timezonesOptions = getSelectOptions(
    'label',
    'tzCode',
    directories?.Timezones,
  );
  const consultation = clientConsultation || ssrConsultation;

  const dataPricesSelect = getDataPricesSelect(
    consultation?.Product?.Tariffs?.[0]?.Prices,
    currencyId,
    consultation?.duration,
  );

  const dataLanguageSelect = getDataLanguageSelect(
    consultation?.Languages,
    languageCode,
  );

  // const {room, getRoom} = useRoom();

  const currentAppointment = consultationsMy.filter(
    (elem) => elem?.id == clientConsultation?.id,
  );

  // useEffect(() => {
  //   if (!user?.id || !clientConsultation?.id) return;
  //   getRoom({
  //     variables: {
  //       record: {
  //         entityId: clientConsultation?.id,
  //         entityName: EntityName.EntityNameConsultation,
  //       },
  //     },
  //   });
  // }, [user?.id, clientConsultation?.id]);

  const loading = useMemo(
    () =>
      loadingUser ||
      loadingAppointmentsMy ||
      dataAppointments?.loading ||
      dataBookAppointment?.loading ||
      dataCancelAppointment?.loading,
    [
      loadingUser,
      loadingAppointmentsMy,
      dataAppointments?.loading,
      dataBookAppointment?.loading,
      dataCancelAppointment?.loading,
    ],
  );

  return (
    <Consultation
      dataSelectedDate={{selectedDate, setDate}}
      dataTimezone={{timezone, setTimezone}}
      locale={languageCode}
      user={user}
      refetchUser={refetchUser}
      appointmentsMy={appointmentsMy}
      consultation={consultation}
      timezonesOptions={timezonesOptions || []}
      dataPricesSelect={dataPricesSelect}
      dataLanguageSelect={dataLanguageSelect}
      queryAppointment={queryAppointment}
      // @ts-ignore
      appointmentId={appointmentId}
      dataAppointments={dataAppointments}
      dataBookAppointment={dataBookAppointment}
      dataCancelAppointment={dataCancelAppointment}
      loading={loading}
      consultationId={clientConsultation?.id}
      faqOptions={ssrFaqOptions}
      // roomId={room?.id}
      // pinnedMessage={room?.pinnedMessage}
      url={url}
      isChatActive={!!user && currentAppointment[0]?.Appointments?.length != 0}
      fetchAppointmentsByMonth={fetchAppointmentsByMonth}
      appointmentsFromMonth={appointmentsFromMonth}
    />
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {query, res, req} = ctx;
  const {consultationId} = query;
  const apolloClient = initApollo(null, ctx);

  const url = absoluteUrl(req).origin;
  const {record} = getSlugifiedUrl(consultationId);

  let consultation;

  try {
    consultation = await apolloClient.query({
      query: CONSULTATION_QUERY,
      variables: {
        record,
      },
    });
  } catch (e) {
    console.log(e);
  }
  let faq;
  const faqId = consultation?.data?.consultation?.Faq?.id;

  try {
    faq =
      faqId &&
      (await apolloClient.query({
        query: FAQ_BY_ID,
        variables: {
          id: faqId,
        },
      }));
  } catch (e) {
    console.log(e);
  }

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );

  return {
    props: {
      ssrConsultation: consultation?.data?.consultation || null,
      ssrFaqOptions: faq?.data?.faq?.FaqOptions || null,
      url,
    },
  };
};

export default ConsultationPage;
