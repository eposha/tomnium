import {Container} from 'styles/dashboard/dashboard-event';
import {UserPhoto} from 'styles/dashboard/dashboard-user';

const PhotoSeries = () => {
  const users = [
    '/images/courses/test1.jpg',
    '/images/courses/test2.jpg',
    '/images/courses/test3.jpg',
  ];
  const ZINDEX = 1000;

  return (
    <Container>
      {users?.map((user, index) => (
        <UserPhoto
          key={user}
          src={user}
          left={index * 12}
          zIndex={ZINDEX - index}
        />
      ))}
    </Container>
  );
};

export default PhotoSeries;
