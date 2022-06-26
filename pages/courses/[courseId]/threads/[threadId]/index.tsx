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
import {useGetCourse} from '@/graph-hooks/courses/useGetCourse';
import {useGetThreadById} from '@/graph-hooks/threads/useGetThreadById';
import {
  formatDuration,
  getDeclension,
  getSlugifiedUrl,
  isNonEmptyArray,
} from '@/helpers/common';
import {initApollo} from '@/lib/apolloClient';
import {GET_COURSE} from '@/query/courses/course';
import {FAQ_BY_ID} from '@/query/faqs/faqById';
import {IFaqOptions} from '@/types/common';
import {ICourse} from '@/types/courses';
import {IModule} from '@/types/module';
import {GetServerSideProps} from 'next';
import absoluteUrl from 'next-absolute-url';
import {useRouter} from 'next/router';
import {FC, useMemo} from 'react';
import ContentBlock from 'src/components/content-block/ContentBlock';
import {CourseStatus, ThreadAvailableAction} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {Box, Text} from 'styles/common';
import {FAQ} from 'styles/courses';
import * as UI from 'styles/courses/course-page';

interface ICoursePageProps {
  ssrModules: IModule[];
  ssrCourse: ICourse;
  ssrFaqOptions: IFaqOptions[];
  url: string;
}

const CoursePage: FC<ICoursePageProps> = ({ssrCourse, ssrFaqOptions, url}) => {
  const {
    query: {courseId, threadId: mainThreadId},
  } = useRouter();

  const courseRecord = getSlugifiedUrl(courseId);
  const {course, loading: courseLoading} = useGetCourse(courseRecord.record);
  const courseData: ICourse | null = courseLoading ? ssrCourse : course;

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

  const threadData = useGetThreadById({
    id: mainThreadId,
  });

  const mainThread = useMemo(() => {
    if (threadData.thread) {
      return threadData.thread;
    }

    if (OwnThread) {
      return OwnThread;
    }

    if (DefaultThread) {
      return DefaultThread;
    }

    return Threads?.find((thread) => thread.id === mainThreadId);
  }, [mainThreadId, DefaultThread, OwnThread, threadData.thread]);

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

  const {
    ThreadAvailableActionActivateByFree,
    ThreadAvailableActionActivateBySubscription,
    ThreadAvailableActionBuy,
  } = ThreadAvailableAction;

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

  const availableActions = (Threads || []).filter(
    (elem) => elem.id == mainThreadId,
  )?.[0]?.availableActions;

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
            {!OwnThread && (
              <Media at={'xs'}>
                {availableActions && availableActions.length > 0 && (
                  <UI.CarouselWrapper>
                    <CourseDetailsCarousel
                      data={{
                        thread: mainThread,
                        module: freeModule,
                      }}
                      freeCourse={freeCourse}
                      courseId={courseId}
                      availableActions={availableActions}
                      isPurchaseCard={isPurchaseCard}
                      isFreeModuleCard={isFreeModuleCard}
                    />
                  </UI.CarouselWrapper>
                )}
              </Media>
            )}

            {!OwnThread && (
              <Media greaterThan={'xs'}>
                {availableActions && availableActions.length > 0 && (
                  <UI.CourseDetailsWrapper>
                    {availableActions.includes(
                      ThreadAvailableActionActivateBySubscription,
                    ) && (
                      <CourseDetailsCard
                        data={{
                          thread: mainThread,
                          type: ThreadAvailableActionActivateBySubscription,
                        }}
                        courseId={courseId}
                        url={url}
                      />
                    )}

                    {!availableActions.includes(
                      ThreadAvailableActionActivateBySubscription,
                    ) &&
                      availableActions.includes(ThreadAvailableActionBuy) && (
                        <CourseDetailsCard
                          data={{
                            thread: mainThread,
                            type: ThreadAvailableActionBuy,
                          }}
                          courseId={courseId}
                          url={url}
                        />
                      )}

                    {availableActions.includes(
                      ThreadAvailableActionActivateByFree,
                    ) && (
                      <CourseDetailsCard
                        data={{
                          module: freeModule,
                          thread: mainThread,
                        }}
                        freeCourse={freeCourse}
                        courseId={courseId}
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
                      threadId={threadId}
                      courseId={id}
                      OwnThread={OwnThread}
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
            <Media at={'xs'}>
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
            </Media>
            {!isFeedbackVidget && (
              <UI.FeedbackFormWrapper>
                <FeedbackForm
                  title={mainThread?.title ?? ''}
                  tariffId={mainThread?.Product?.Tariffs?.[0]?.id ?? 0}
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
                    <AccordionItem item={item} key={`${item.title}_${index}`} />
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
    query: {courseId},
  } = ctx;
  const client = initApollo(null, ctx);

  const url = absoluteUrl(req).origin;

  const record = getSlugifiedUrl(courseId);

  let data;
  let faqId;
  //@ts-ignore
  if (record && record?.record) {
    data = await client.query({
      query: GET_COURSE,
      variables: record,
    });
    faqId = data?.data?.course?.Faq?.id;
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
