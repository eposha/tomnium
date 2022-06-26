import {IModule} from '@/types/module';
import {FC} from 'react';
import Link from 'next/link';
import {
  LessonsWrapper,
  LessonItem,
  LessonLink,
  LessonItemTxt,
} from 'styles/learningStructure/aside-modules';
import {CourseStatus} from 'src/graphql.schema';
import {useRouter} from 'next/router';

interface IAsideLessonCard {
  module: IModule;
  moduleIndex: number;
  isActive: boolean;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
}

const AsideLessonCard: FC<IAsideLessonCard> = ({
  module,
  isActive,
  courseId,
  threadId,
}) => {
  const {
    query: {show},
  } = useRouter();
  const {Lessons, id: moduleId, slug: moduleSlug} = module;

  const moduleUrlId = moduleSlug ?? moduleId;

  return (
    <LessonsWrapper $isActive={isActive}>
      {Lessons.map((elem: any, index: number) => {
        const {id: lessonId, slug: lessonSlug, isAvailable} = elem;

        const lessonUrlId = lessonSlug ?? lessonId;

        return (
          <LessonItem key={index}>
            {isAvailable ? (
              <Link
                href={`/courses/${courseId}/threads/${threadId}/modules/${moduleUrlId}/lessons/${lessonUrlId}/${
                  !!show ? '?show=own' : ''
                }`}
                passHref>
                <LessonLink>{elem?.title}</LessonLink>
              </Link>
            ) : (
              <LessonItemTxt>{elem?.title}</LessonItemTxt>
            )}
          </LessonItem>
        );
      })}
    </LessonsWrapper>
  );
};

export default AsideLessonCard;
