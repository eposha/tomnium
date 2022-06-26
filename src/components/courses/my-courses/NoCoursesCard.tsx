import Link from 'next/link';
import * as UI from 'styles/courses/my-courses/no-course-card';

const NoCoursesCard = () => {
  return (
    <UI.Wrapper>
      <UI.Title>У вас нет курсов</UI.Title>
      <UI.Text>
        Пройдите диагностику, чтобы получить персональную рекомендацию
      </UI.Text>
      <Link href='#' passHref>
        <UI.Button>Пройти</UI.Button>
      </Link>
    </UI.Wrapper>
  );
};

export default NoCoursesCard;
