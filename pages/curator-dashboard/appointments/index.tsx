import {useRouter} from 'next/router';
import {AppointmentField, SortType} from 'src/graphql.schema';
import {CuratorDashboardLayout} from '@/components/layout';
import {getNewUrlWithQueryFromSelect, getOffset} from '@/helpers/common';

import {useAppointmentsFCTable} from 'src/hooks/curator-dashboard/useAppointmentsTable';
import {useGetFCAppointments} from '@/graph-hooks/appointments/useGetFCAppointments';
import {useGetFCConsultationsMyOptions} from '@/graph-hooks/consultations/useFCConsultationsMyOptions';

import Table from '@/components/common/Table';
import Select from '@/components/common/Select';
import {Header} from 'styles/table';

const ConsultationsDashboard = () => {
  const router = useRouter();
  const {offset, consultationId} = router.query;

  const {consultationsOptions} = useGetFCConsultationsMyOptions();

  const {appointments, pagination} = useGetFCAppointments({
    offset: getOffset({offset}),
    sort: {
      field: AppointmentField.AppointmentFieldStartAt,
      type: SortType.SortTypeAsc,
    },
    filter: consultationId
      ? {
          consultationId: consultationId as string,
        }
      : undefined,
  });

  const {columns, data} = useAppointmentsFCTable({
    appointments,
  });

  return (
    <CuratorDashboardLayout pageTitle='Мои консультации'>
      <Table columns={columns} data={data} pagination={pagination}>
        <Header>
          <Select
            options={consultationsOptions}
            onChange={(value: any) =>
              router.replace(
                getNewUrlWithQueryFromSelect({
                  selectValue: value,
                  selectValueField: 'id',
                  queryFieldName: 'consultationId',
                  router,
                }),
              )
            }
            placeholder='Выбрать консультацию'
            minWidth='150px'
            isSearchable
            isClearable
          />
        </Header>
      </Table>
    </CuratorDashboardLayout>
  );
};

export default ConsultationsDashboard;
