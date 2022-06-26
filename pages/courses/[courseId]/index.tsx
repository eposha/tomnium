import {AccordionItem} from '@/components/common/AccordionItem';
import FeedbackForm from '@/components/common/feedback/Form';
import HeadSeo from '@/components/common/HeadSeo';
import {TestimonialsCarousel} from '@/components/common/testimonial/Carousel';
import {
  CourseDetailsCard,
  CourseDetailsCarousel,
  CourseGiftCard,
  CourseGiftsCarousel,
  CourseProgressLabel,
  CourseSidebar,
  CourseStructureItem,
  CourseTagCard,
} from '@/components/courses';
import {LearnProcessBanner} from '@/components/learning-structure';
import {
  formatDuration,
  getCoursePagePreviewMode,
  getDeclension,
  getSlugifiedUrl,
} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {GET_COURSE_PREVIEW} from '@/query/courses/coursePreview';
import {FAQ_BY_ID} from '@/query/faqs/faqById';
import {IFaqOptions} from '@/types/common';
import {IModule} from '@/types/module';
import {ICourse} from '@/types/courses';
import {GetServerSideProps} from 'next';
import absoluteUrl from 'next-absolute-url';
import {useRouter} from 'next/router';
import {FC, useMemo} from 'react';
import ContentBlock from 'src/components/content-block/ContentBlock';
import {Media} from 'src/media-styles';
import {Box, Text} from 'styles/common';
import {FAQ} from 'styles/courses';
import * as UI from 'styles/courses/course-page';
import {useGetCourse} from '@/graph-hooks/courses/useGetCourse';
import {CourseStatus, ThreadAvailableAction} from 'src/graphql.schema';
import {useSurvey} from '@/graph-hooks/survey/useSurvey';
import SurveyCard from '@/components/survey/SurveyCard';
import {useSurveyResults} from '@/graph-hooks/survey/useSurveyResults';
import {isNonEmptyArray} from '@apollo/client/utilities';
import {useGetCoursePreview} from '@/graph-hooks/courses/useGetCoursePreview';

interface ICoursePageProps {
  ssrModules: IModule[];
  ssrCourse: ICourse;
  ssrFaqOptions: IFaqOptions[];
  url: string;
}

const CoursePage: FC<ICoursePageProps> = ({ssrCourse, ssrFaqOptions, url}) => {
  const {
    query: {courseId, show},
  } = useRouter();

  const courseRecord = !show ? getSlugifiedUrl(courseId) : {record: {}};
  const {course, loading: courseLoading} = useGetCourse(courseRecord?.record);

  const previewRecord = !!show ? getCoursePagePreviewMode(courseId, show) : {};
  const {coursePreview, loading: loadingCoursePreview} =
    useGetCoursePreview(previewRecord);

  const courseData =
    courseLoading || loadingCoursePreview
      ? ssrCourse
      : show
      ? coursePreview
      : course;

  const {
    CourseContent,
    Threads,
    CourseFeedbacks,
    Authors,
    title,
    description,
    studentsCount,
    imageWeb,
    imageMob,
    usersImages,
    id,
    seoTitle,
    seoDescription,
    DefaultThread,
    OwnThread,
    status,
  } = courseData || {};

  const survey = useSurvey(OwnThread?.id);

  const surveyResult = useSurveyResults(survey?.survey?.id);

  const mainThread = useMemo(() => {
    if (OwnThread) {
      return OwnThread;
    }
    if (DefaultThread) {
      return DefaultThread;
    }
  }, [Threads?.length, OwnThread, DefaultThread]);

  const {
    lessonsCount,
    modulesCount,
    homeworksCount,
    endSubmissionDate,
    learnDuration,
    id: threadId,
    Product,
    MyTariff,
  } = mainThread || {};

  const learnDurationSplitted = formatDuration(learnDuration)?.split(' ');
  const freeModule = mainThread?.Modules?.find((module) => !!module.isFree);

  const efficiency = OwnThread?.UserThreadProgress?.efficiency ?? 0;
  const progress = OwnThread?.UserThreadProgress?.progress ?? 0;

  const {
    CourseStatusAvailable,
    CourseStatusCompleted,
    CourseStatusFreeAccess,
    CourseStatusFullAccess,
  } = CourseStatus;

  const isPurchaseCard =
    status === CourseStatusAvailable || status === CourseStatusFreeAccess;

  const isFreeModuleCard = status === CourseStatusAvailable;

  const isFeedbackVidget =
    status === CourseStatusCompleted || status === CourseStatusFullAccess;

  const {freeTitle, freeDescription, freeImage} = mainThread || {};

  const freeCourse = {
    freeTitle: freeTitle ?? '',
    freeDescription: freeDescription ?? '',
    freeImage,
  };

  const availableActions = DefaultThread?.availableActions;

  const {
    ThreadAvailableActionActivateByFree,
    ThreadAvailableActionActivateBySubscription,
    ThreadAvailableActionBuy,
  } = ThreadAvailableAction;

  // Не удаляйте это для Романа
  console.log(ssrCourse);

  return (
    <>
      <HeadSeo seoTitle={seoTitle} seoDescription={seoDescription} />

      <UI.Wrapper>
        <Media greaterThan={'xs'}>
          <CourseSidebar
            endSubmissionDate={endSubmissionDate}
            modules={mainThread?.Modules}
            threadId={threadId}
            courseId={id}
            status={status}
            OwnThreadId={OwnThread?.id}
          />
        </Media>
        <div>
          <LearnProcessBanner
            title={title}
            description={description}
            Authors={Authors}
            studentsCount={studentsCount}
            imageWeb={imageWeb}
            imageMob={imageMob}
            usersImages={usersImages}
            mainThreadId={mainThread?.id}
            threadsList={Threads}
            label={'Курс'}
            button={true}
            courseId={id}
            OwnThread={OwnThread}
          />
          {!OwnThread && (
            <UI.BannerBottomLabel>
              {availableActions &&
              availableActions.includes(
                ThreadAvailableActionActivateBySubscription,
              )
                ? 'Вы ещё не активировали этот курс'
                : 'У вас еще не куплен этот курс'}
            </UI.BannerBottomLabel>
          )}
          <UI.Main>
            {OwnThread && (
              <Media at={'xs'}>
                <UI.ProgressWrapper>
                  <CourseProgressLabel
                    title='Эффективность'
                    progress={efficiency}
                    color='blueberry'
                  />
                  <CourseProgressLabel
                    title='Пройдено'
                    progress={progress}
                    color='red'
                  />
                </UI.ProgressWrapper>
              </Media>
            )}

            {DefaultThread && (
              <Media at={'xs'}>
                {availableActions && availableActions.length > 0 && (
                  <UI.CarouselWrapper>
                    <CourseDetailsCarousel
                      data={{
                        thread: DefaultThread ?? OwnThread,
                        module: freeModule,
                      }}
                      availableActions={availableActions}
                      courseId={courseData?.id}
                      isPurchaseCard={isPurchaseCard}
                      isFreeModuleCard={isFreeModuleCard}
                      freeCourse={freeCourse}
                    />
                  </UI.CarouselWrapper>
                )}
              </Media>
            )}

            {DefaultThread && (
              <Media greaterThan={'xs'}>
                {availableActions && availableActions.length > 0 && (
                  <UI.CourseDetailsWrapper>
                    {availableActions.includes(
                      ThreadAvailableActionActivateBySubscription,
                    ) && (
                      <CourseDetailsCard
                        data={{
                          thread: DefaultThread ?? OwnThread,
                          type: ThreadAvailableActionActivateBySubscription,
                        }}
                        courseId={courseData?.id}
                        url={url}
                      />
                    )}

                    {!availableActions.includes(
                      ThreadAvailableActionActivateBySubscription,
                    ) &&
                      availableActions.includes(ThreadAvailableActionBuy) && (
                        <CourseDetailsCard
                          data={{
                            thread: DefaultThread ?? OwnThread,
                            type: ThreadAvailableActionBuy,
                          }}
                          courseId={courseData?.id}
                          url={url}
                        />
                      )}

                    {availableActions.includes(
                      ThreadAvailableActionActivateByFree,
                    ) && (
                      <CourseDetailsCard
                        data={{
                          module: freeModule,
                          thread: DefaultThread,
                        }}
                        freeCourse={freeCourse}
                        courseId={courseData?.id}
                      />
                    )}
                  </UI.CourseDetailsWrapper>
                )}
              </Media>
            )}

            <UI.CourseContentWrapper>
              {CourseContent && (
                <UI.ContentBlockWrapper $isFlex>
                  <ContentBlock contentData={CourseContent} />
                </UI.ContentBlockWrapper>
              )}

              <UI.CourseStructureWrapper>
                <Text fontSize='18px' margin='0 0 10px'>
                  Полная структура курса
                </Text>
                <UI.CourseStructureList>
                  {mainThread?.Modules?.map((module, moduleIndex) => (
                    <CourseStructureItem
                      key={module.id}
                      module={module}
                      moduleIndex={moduleIndex}
                      courseId={id}
                      threadId={threadId}
                      OwnThread={OwnThread}
                      isPreviewMode={!!show}
                    />
                  ))}
                </UI.CourseStructureList>
              </UI.CourseStructureWrapper>

              <UI.CourseTagsWrapper $isRight={!CourseContent}>
                {!!modulesCount && (
                  <CourseTagCard
                    count={modulesCount}
                    title={getDeclension(
                      ['Модуль', 'Модуля', 'Модулей'],
                      modulesCount,
                    )}
                  />
                )}
                {!!lessonsCount && (
                  <CourseTagCard
                    count={lessonsCount}
                    title={getDeclension(
                      ['Урок', 'Урока', 'Уроков'],
                      lessonsCount,
                    )}
                  />
                )}
                {!!learnDuration &&
                  Object.entries(learnDuration).some(
                    (item) => item[1] && item[0] !== '__typename',
                  ) && (
                    <CourseTagCard
                      count={Number(learnDurationSplitted?.[0] || 0)}
                      title={learnDurationSplitted?.[1]}
                    />
                  )}
                {!!homeworksCount && (
                  <CourseTagCard
                    count={homeworksCount}
                    title={getDeclension(
                      ['Задание', 'Задания', 'Заданий'],
                      homeworksCount,
                    )}
                  />
                )}
              </UI.CourseTagsWrapper>
            </UI.CourseContentWrapper>

            {survey && surveyResult && (
              <SurveyCard
                survey={survey.survey}
                surveyOptions={surveyResult}
                ownThreadId={OwnThread?.id}
                courseId={id}
              />
            )}

            {/* <Media at={'xs'}>
              <UI.ChatLabel>
                <UI.ChatLabelText fontSize='18px' margin='0 0 20px'>
                  Чат потока <UI.ChatCounter>12</UI.ChatCounter>
                </UI.ChatLabelText>
                <UI.ChatThreadTitle>Поток #12</UI.ChatThreadTitle>
              </UI.ChatLabel>
              <UI.ChatList>
                <UI.ChatItem>
                  <UI.ChatItemContent>
                    <UI.ChatName lineClamp={1} fontSize='10px'>
                      Полюби себя и будь счастливой всю жизнь
                    </UI.ChatName>
                    <Text lineClamp={1}>
                      Задача первого урока выполнить тест. Задача первого урока
                      выполнить тест
                    </Text>
                  </UI.ChatItemContent>
                  <UI.ChatCounter>15</UI.ChatCounter>
                </UI.ChatItem>
                <UI.ChatItem>
                  <UI.ChatItemContent>
                    <UI.ChatName lineClamp={1} fontSize='10px'>
                      Полюби себя и будь счастливой всю жизнь
                    </UI.ChatName>
                    <Text lineClamp={1}>
                      Задача первого урока выполнить тест...
                    </Text>
                  </UI.ChatItemContent>
                  <UI.ChatCounter>6</UI.ChatCounter>
                </UI.ChatItem>
                <UI.ChatItem>
                  <UI.ChatItemContent>
                    <UI.ChatName lineClamp={1} fontSize='10px'>
                      Полюби себя и будь счастливой всю жизнь
                    </UI.ChatName>
                    <Text lineClamp={1}>
                      Задача первого урока выполнить тест...
                    </Text>
                  </UI.ChatItemContent>
                  <UI.ChatCounter>22</UI.ChatCounter>
                </UI.ChatItem>
                <UI.ShowAllButton $fullWidth>Все чаты (7)</UI.ShowAllButton>
              </UI.ChatList>
            </Media> */}
            {!isFeedbackVidget && (
              <UI.FeedbackFormWrapper>
                <FeedbackForm
                  tariffId={mainThread?.Product?.Tariffs[0].id ?? 0}
                  title={courseData?.title ?? ''}
                />
              </UI.FeedbackFormWrapper>
            )}
            {!isFeedbackVidget && CourseFeedbacks && !!CourseFeedbacks?.length && (
              <Media greaterThan={'xs'}>
                <UI.TestimonialsWrapper>
                  <Text fontSize='18px' margin='0 0 25px'>
                    Отзывы участников курса
                  </Text>
                  <TestimonialsCarousel testimonials={CourseFeedbacks} />
                </UI.TestimonialsWrapper>
              </Media>
            )}
            {isNonEmptyArray(Product?.Gifts) && (
              <Box mb='50px' mw='780px'>
                <Text fontSize='18px' margin='0 0 20px'>
                  Подарки
                </Text>
                {Product && (
                  <Media at='xs'>
                    <CourseGiftsCarousel
                      gifts={Product?.Gifts}
                      myTariffId={MyTariff?.id}
                      product={Product}
                      courseId={`${courseId}`}
                    />
                  </Media>
                )}

                <Media greaterThan='xs'>
                  <UI.CourseGiftsWrapper>
                    {Product?.Gifts?.map((gift) => (
                      <CourseGiftCard
                        key={gift.id}
                        gift={gift}
                        myTariffId={MyTariff?.id}
                        product={Product}
                        url={url}
                      />
                    ))}
                  </UI.CourseGiftsWrapper>
                </Media>
              </Box>
            )}
            {ssrFaqOptions && (
              <>
                <Text fontSize='20px'>Часто задаваемые вопросы</Text>
                <FAQ>
                  {ssrFaqOptions.map((item, index) => (
                    <AccordionItem
                      item={item}
                      key={`${item.title}_${index}`}
                      size='large'
                    />
                  ))}
                </FAQ>
              </>
            )}
          </UI.Main>
        </div>
      </UI.Wrapper>
    </>
  );
};

export default CoursePage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    req,
    query: {courseId, show},
  } = ctx;
  const client = initApollo(null, ctx);

  const url = absoluteUrl(req).origin;

  const record = getCoursePagePreviewMode(courseId, show);

  let data;
  let faqId;

  //@ts-ignore
  if (record?.record) {
    data = await client.query({
      query: GET_COURSE,
      variables: record,
    });
    faqId = data?.data?.course?.Faq?.id;
  } else {
    data = await client.query({
      query: GET_COURSE_PREVIEW,
      variables: record,
    });
    faqId = data?.data?.coursePreview?.Faq?.id;
  }

  let faq;
  try {
    if (faqId) {
      faq = await client.query({
        query: FAQ_BY_ID,
        variables: {
          id: faqId,
        },
      });
    }
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      ssrCourse: data?.data?.course ?? data?.data?.coursePreview ?? {},
      ssrFaqOptions: faq?.data?.faq.FaqOptions || null,
      url,
    },
  };
};
