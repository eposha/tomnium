import Link from 'next/link';
import {FC} from 'react';
import * as UI from 'styles/courses/my-courses/my-course-banner';

const MyCourseBanner: FC<any> = ({src}) => {
  const arr = [1, 2];

  return (
    <UI.BannerWrapper src={src}>
      <UI.Container mw={580}>
        <UI.Label>Урок</UI.Label>
        <UI.Title>Притяжение ON. Ты магнит для мужчины</UI.Title>
        <UI.Text>
          Обретите бесценный опыт, сочетающий проверенные временем практики и
          современные знания подтвержденные исследованиями.
        </UI.Text>
      </UI.Container>
      <UI.Wrapper>
        <UI.Div>
          <UI.Span fw={600} mb={12}>
            Авторы курса
          </UI.Span>
          {arr?.map((el) => (
            <UI.Container key={el} mw={250} flex>
              <UI.AuthorImage src={'/images/courses/test1.jpg'} />
              <UI.Div>
                <UI.Span fw={500} mb={5}>
                  Светлана Керимова
                </UI.Span>
                <UI.OpacitySpan>Основательница Woman Insight</UI.OpacitySpan>
              </UI.Div>
            </UI.Container>
          ))}
        </UI.Div>
        <Link href='#' passHref>
          <UI.BannerLink>Принять участие</UI.BannerLink>
        </Link>
      </UI.Wrapper>
    </UI.BannerWrapper>
  );
};

export default MyCourseBanner;
