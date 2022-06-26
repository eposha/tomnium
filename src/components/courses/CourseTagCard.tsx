import {Wrapper, Count, Title} from 'styles/courses/course-tag-card';

interface ICourseTagCard {
  count?: number;
  title?: string;
}

const CourseTagCard: React.FC<ICourseTagCard> = ({count, title}) => (
  <Wrapper>
    <Count>{count}</Count>
    <Title>{title}</Title>
  </Wrapper>
);

export default CourseTagCard;
