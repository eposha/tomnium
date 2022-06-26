import {GetServerSideProps} from 'next';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {addApolloState, initApollo} from '@/lib/apolloClient';
import {CuratorDashboardLayout} from '@/components/layout';
import {formatDate} from '@/helpers/common';
import {DATE_FORMAT} from '@/constants/common';

import {GET_FC_APPOINTMENT} from '@/query/appointments';
import {useGetFCAppointment} from '@/graph-hooks/appointments';
import {withErrorHandler} from 'src/hooks/withErrorHandler';
import {Card, Text} from 'styles/common';

import * as UI from 'styles/curator-dashboard/appointments';
import {CONSULTATION_DURATION} from '@/constants/consultation';
import {CellLink} from 'styles/table';
import UserCard from '@/components/curator-dashboard/UserCard';

const MyApoointmentPage = () => {
  const {query} = useRouter();
  const appointmentId = Number(query.appointmentId);

  const {appointment} = useGetFCAppointment({id: appointmentId});
  const {startAt, url, Consultation, User} = appointment || {};

  return (
    <CuratorDashboardLayout pageTitle='Информация'>
      <UI.Wrapper>
        <Card $fullWidth>
          <Text fontSize='18px' margin='0 0 20px' color='black'>
            Консультация
          </Text>
          <UI.Item>
            <UI.UserLabel>Название</UI.UserLabel>
            <Link href={`/consultations/${Consultation?.id}`} passHref>
              <CellLink>{Consultation?.title}</CellLink>
            </Link>
          </UI.Item>
          <UI.Item>
            <UI.UserLabel>Дата проведения</UI.UserLabel>
            {formatDate(startAt, DATE_FORMAT.secondary)}
          </UI.Item>
          {Consultation?.duration && (
            <UI.Item>
              <UI.UserLabel>Длительность</UI.UserLabel>
              {CONSULTATION_DURATION[Consultation?.duration]}
            </UI.Item>
          )}
          <UI.Item>
            <UI.UserLabel>URL</UI.UserLabel>
            <Link href={url ?? '#'} passHref>
              <CellLink>{url}</CellLink>
            </Link>
          </UI.Item>
        </Card>

        <UserCard user={User} />
      </UI.Wrapper>
    </CuratorDashboardLayout>
  );
};

export default MyApoointmentPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    res,
    query: {appointmentId},
  } = ctx;
  const client = initApollo(null, ctx);

  await withErrorHandler(
    ctx,
    client.query({
      query: GET_FC_APPOINTMENT,
      variables: {
        id: Number(appointmentId),
      },
    }),
  );

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=10, stale-while-revalidate=18000`,
  );

  return addApolloState(client, {
    props: {},
  });
};
