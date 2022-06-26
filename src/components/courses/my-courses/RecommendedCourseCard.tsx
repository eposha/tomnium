import Link from 'next/link';
import * as UI from 'styles/courses/my-courses/recommended-course-card';

const RecommendedCourseCard = () => {
  return (
    <>
      <UI.CardTop color='whiteGrey'>
        <UI.Title>“Презагрузка жизни” Светланы Керимовой</UI.Title>
        <UI.Text>
          Выведем тебя за ручку из самой тяжелой ситуации. Даже если у тебя нет
          сил встать утром с кровати.
        </UI.Text>
      </UI.CardTop>
      <UI.CardBottom>
        <UI.FlexCenter>
          <UI.FlexCenter>
            <UI.CurrencySVG color='yellow' />
            <UI.CardSpan>Подписка</UI.CardSpan>
          </UI.FlexCenter>
          <Link href='#' passHref>
            <UI.CardLink>Подробнее</UI.CardLink>
          </Link>
        </UI.FlexCenter>
      </UI.CardBottom>
    </>
  );
};

export default RecommendedCourseCard;
