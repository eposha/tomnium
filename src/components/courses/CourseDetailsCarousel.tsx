import {FC} from 'react';

import {Carousel} from '@/components/common/Carousel';
import {CourseDetailsCard} from '@/components/courses';
import {Container, Slide, CarouselDots} from 'styles/courses/course-details';
import {IThread} from '@/types/thread';
import {ThreadAvailableAction} from 'src/graphql.schema';
import {IMedia} from '@/types/media';

interface ICourseDelailsCarousel {
  data: {
    thread?: IThread | null;
    module?: any;
  };
  courseId?: string | string[];
  isFreeModuleCard: boolean;
  isPurchaseCard: boolean;
  availableActions: [ThreadAvailableAction];
  freeCourse?: {
    freeTitle?: string;
    freeDescription?: string;
    freeImage?: IMedia[];
  };
}

const CourseDetailsCarousel: FC<ICourseDelailsCarousel> = ({
  data,
  courseId,
  availableActions,
  freeCourse,
}) => {
  const {thread, module} = data;
  const {
    ThreadAvailableActionActivateByFree,
    ThreadAvailableActionActivateBySubscription,
    ThreadAvailableActionBuy,
  } = ThreadAvailableAction;
  return (
    <Carousel
      options={{
        slidesToScroll: 1,
        align: 'start',
      }}
      Dots={CarouselDots}>
      <Container>
        {availableActions.includes(
          ThreadAvailableActionActivateBySubscription,
        ) && (
          <Slide>
            <CourseDetailsCard
              data={{thread, type: ThreadAvailableActionActivateBySubscription}}
              courseId={courseId}
            />
          </Slide>
        )}
        {!availableActions.includes(
          ThreadAvailableActionActivateBySubscription,
        ) &&
          availableActions.includes(ThreadAvailableActionBuy) && (
            <Slide>
              <CourseDetailsCard
                data={{thread, type: ThreadAvailableActionBuy}}
                courseId={courseId}
              />
            </Slide>
          )}

        {availableActions.includes(ThreadAvailableActionActivateByFree) && (
          <Slide>
            <CourseDetailsCard
              data={{module, thread}}
              freeCourse={freeCourse}
              courseId={courseId}
            />
          </Slide>
        )}
      </Container>
    </Carousel>
  );
};

export default CourseDetailsCarousel;
