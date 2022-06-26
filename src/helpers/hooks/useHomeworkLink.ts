import {HOMEWORK_LINK_TYPES} from '@/constants/homework';
import {useRouter} from 'next/router';
import {HomeworkType} from 'src/graphql.schema';

export const useHomeworkLink = (
  id: string[] | string | undefined,
  type?: HomeworkType,
) => {
  const {
    query: {courseId, threadId, lessonId, moduleId},
  } = useRouter();
  //@ts-ignore
  const homeworkType = HOMEWORK_LINK_TYPES?.[type];

  if (threadId && lessonId) {
    return `/courses/${courseId}/threads/${threadId}/modules/${moduleId}/lessons/${lessonId}/homeworks/${id}/${homeworkType}`;
  }

  if (threadId) {
    return `/courses/${courseId}/threads/${threadId}/modules/${moduleId}/homeworks/${id}/${homeworkType}`;
  }

  if (lessonId) {
    return `/courses/${courseId}/modules/${moduleId}/lessons/${lessonId}/homeworks/${id}/${homeworkType}`;
  }
};
