import Link from 'next/link';
import {FC} from 'react';
import * as UI from 'styles/dashboard/dashboard-new-course';

const NewCourseCard: FC<any> = ({courses}) => {
  const title = courses.length
    ? 'Походите до 3 курсов одновременно!'
    : 'Начните свой первый курс!';
  return (
    <UI.CardContainer>
      <UI.Title>{title}</UI.Title>
      <UI.Text>
        Пройдите диагностику, чтобы получить персональную рекомендацию
      </UI.Text>
      <Link href={'/courses'} passHref>
        <UI.Button>Подробнее</UI.Button>
      </Link>
    </UI.CardContainer>
  );
};

export default NewCourseCard;
