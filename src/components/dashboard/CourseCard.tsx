import {FC} from 'react';
import {Course, Maybe} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import * as UI from 'styles/dashboard/dashboard-course';
import Link from 'next/link';
import {Container} from 'styles/dashboard/dashboard-event';
import {useGetNextStep} from '@/graph-hooks/lessons/useNextStep';

interface ICourseCard {
  id?: string | undefined;
  title?: string;
  Course: Maybe<Course>;
}

const CourseCard: FC<ICourseCard> = ({title, Course}) => {
  const {getSteps} = useGetNextStep();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    getSteps({
      variables: {
        courseId: Course?.id,
      },
    });
  };

  return (
    <UI.CourseContainer>
      <Media greaterThan='xs'>
        <Container mb={10}>
          <UI.CourseImage src={'/images/courses/test1.jpg'} />
          <UI.CourseImageLabel>Урок</UI.CourseImageLabel>
        </Container>
      </Media>
      <UI.FlexCourse mb={5}>
        <UI.CourseText>{title}</UI.CourseText>
        <UI.Label>Курс</UI.Label>
      </UI.FlexCourse>
      <UI.CourseTitle>{Course?.title}</UI.CourseTitle>
      <UI.FlexCourse align='center' jc='flex-end'>
        <Link href='#' passHref>
          <UI.CourseButton onClick={handleClick}>Продолжить</UI.CourseButton>
        </Link>
      </UI.FlexCourse>
    </UI.CourseContainer>
  );
};

export default CourseCard;
