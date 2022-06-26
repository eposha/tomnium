import {useRouter} from 'next/router';

export const useHomeworkTestMainLink = () => {
  const {
    query: {courseId, threadId, moduleId, lessonId, homeworkId},
  } = useRouter();

  const mainLink = `/courses/${courseId}/threads/${threadId}/modules/${moduleId}/${
    lessonId ? `lessons/${lessonId}/` : ''
  }homeworks/${homeworkId}`;

  return {
    mainLink,
  };
};
