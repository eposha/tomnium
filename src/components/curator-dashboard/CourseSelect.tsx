import {useRouter} from 'next/router';

import {getNewUrlWithQueryFromSelect} from '@/helpers/common';

import {useGetCoursesForSelect} from '@/graph-hooks/courses/useCoursesList';

import Select from '@/components/common/Select';

const CourseSelect = () => {
  const router = useRouter();
  const {courseId} = router.query;

  const {courses, loading} = useGetCoursesForSelect();

  return (
    <Select
      value={courses.find((option) => option.id === courseId)}
      options={courses}
      onChange={(value: any) =>
        router.replace(
          getNewUrlWithQueryFromSelect({
            selectValue: value,
            selectValueField: 'id',
            queryFieldName: 'courseId',
            router,
          }),
        )
      }
      placeholder='Выбрать курс'
      isLoading={loading}
      isClearable
    />
  );
};

export default CourseSelect;
