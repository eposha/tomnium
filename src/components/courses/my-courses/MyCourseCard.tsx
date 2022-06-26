import Link from 'next/link';
import {Dispatch, FC, SetStateAction, useState} from 'react';
import {Media} from 'src/media-styles';
import {EntityName, HomeworkType, Lesson} from 'src/graphql.schema';
import {
  ColumnFlex,
  Container,
  ContentWrapper,
  Flex,
} from 'styles/courses/my-courses/common';
import * as UI from 'styles/courses/my-courses/my-course-card';
import {getDeclension} from '@/helpers/common';
import {useGetNextStep} from '@/graph-hooks/lessons/useNextStep';
import {useHomeworkInfo} from '@/graph-hooks/homeworks/useHomeWorkInfo';
import {HOMEWORK_TYPES} from '@/constants/homework';
import useRoomId from '@/graph-hooks/chat/useRoomId';
import {UnreadMessagesCount} from 'styles/chat/chat-page';
import {CHAT_TYPES} from '@/constants/chat';
import parse from 'html-react-parser';

interface IMyCourseCard {
  lesson: Lesson;
  courseId: string | undefined;
}

const MyCourseCard: FC<IMyCourseCard> = ({lesson, courseId}) => {
  const {id, title, description, Course} = lesson;

  const {data, loading} = useHomeworkInfo(courseId);

  const {EntityNameThread} = EntityName;

  const authors = data?.course?.Authors || null;

  const {completionRate, Modules} = data?.course?.OwnThread || {};

  const roomData = useRoomId(
    {
      entityName: EntityNameThread as EntityName,
      entityId: data?.course?.OwnThread?.id,
    },
    false,
  );

  const {room} = roomData?.data || {};

  const allLessons: Lesson[] = (Modules || []).reduce(
    (prev: any, current: any) => [...prev, ...current.Lessons],
    [],
  );

  const currentLesson: Lesson | undefined = allLessons.find(
    (elem: any) => elem.id == id,
  );

  const {getSteps} = useGetNextStep();

  const [isBtnDisabled, setDisabled] = useState(false);

  const [isLinkDisabled, setLinkDisabled] = useState(false);

  const handleClick = (e: any, setFunc: Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault();
    setFunc(true);

    getSteps({
      variables: {
        courseId,
      },
    });
  };

  return (
    <>
      <Media lessThan='lg'>
        {loading == false && roomData.loading == false ? (
          <UI.MyCourseCardWrapper>
            <Container mb={15}>
              <UI.MyCourseImage
                src={
                  !!Course?.imageWeb
                    ? `${process.env.NEXT_PUBLIC_FILE_URL}${Course?.imageWeb[0]?.path}`
                    : '/images/courses/test2.jpg'
                }
              />
              <UI.MyCourseLabel>Новое</UI.MyCourseLabel>
              <UI.MyCourseTag>Урок</UI.MyCourseTag>
            </Container>
            <UI.StatsWrapper>
              {(!!Course?.lessonsCount || Course?.lessonsCount == 0) && (
                <UI.StatsText>
                  <UI.FileIconSVG />
                  {Course?.lessonsCount}{' '}
                  <UI.StatsSmallText>
                    {getDeclension(
                      ['урок', 'урока', 'уроков'],
                      Course?.lessonsCount,
                    )}
                  </UI.StatsSmallText>
                </UI.StatsText>
              )}

              {(!!Course?.totalHomeworks || Course?.totalHomeworks == 0) && (
                <UI.StatsText>
                  <UI.BookIconSVG />
                  {Course?.totalHomeworks}
                  <UI.StatsSmallText>
                    {getDeclension(
                      ['задание', 'задания', 'заданий'],
                      Course?.totalHomeworks,
                    )}
                  </UI.StatsSmallText>
                </UI.StatsText>
              )}
            </UI.StatsWrapper>
            <UI.Title size={14}>{Course?.title}</UI.Title>
            <UI.Text mb={15}>{Course?.description}</UI.Text>
            {authors && (
              <UI.AuthorWrapper>
                <UI.AuthorPhoto
                  src={
                    authors[0].avatar != null
                      ? `${process.env.NEXT_PUBLIC_FILE_URL}${authors[0].avatar[0].path}`
                      : '/images/test.jpg'
                  }
                />
                <ContentWrapper>
                  <UI.AuthorTitle>{authors[0].fullName}</UI.AuthorTitle>
                  <UI.AuthorText>{authors[0].regalia}</UI.AuthorText>
                </ContentWrapper>
              </UI.AuthorWrapper>
            )}

            <UI.Divider />
            <Container>
              {!currentLesson?.Homework ||
              currentLesson?.Homework.length == 0 ? (
                <UI.Title size={16}>Нет заданий в уроке</UI.Title>
              ) : (
                <UI.TagsList>
                  {currentLesson.Homework.map((el, index) => {
                    return (
                      <UI.TagItem key={index}>
                        {HOMEWORK_TYPES[el?.type as HomeworkType]}
                      </UI.TagItem>
                    );
                  })}
                </UI.TagsList>
              )}

              <UI.Title size={14}>{title}</UI.Title>
              <UI.Text mb={10}>{description}</UI.Text>
              <UI.FooterContainer mb={15}>
                <Link href={``} passHref>
                  <UI.MyCourseLink
                    $isDisabled={isLinkDisabled}
                    onClick={(e) => {
                      !isLinkDisabled && handleClick(e, setLinkDisabled);
                    }}>
                    Продолжить урок
                  </UI.MyCourseLink>
                </Link>
              </UI.FooterContainer>
            </Container>
            <UI.Divider />
            <Container mb={25}>
              <UI.Title size={14}>Чат</UI.Title>
              {room?.lastMessage?.body && (
                <UI.ClockContainer>
                  <UnreadMessagesCount />
                  <UI.Text mb={0} ml={5}>
                    {parse(room?.lastMessage?.body)}
                  </UI.Text>
                </UI.ClockContainer>
              )}
              <Link
                href={`/chat/${room?.meta?.Parent?.id}/${
                  CHAT_TYPES[
                    room?.meta?.Parent?.entityName as keyof typeof CHAT_TYPES
                  ]
                }`}
                passHref>
                <UI.MyCourseLink>Перейти в чат</UI.MyCourseLink>
              </Link>
            </Container>
            <UI.FooterContainer>
              <UI.FooterContainer>
                <UI.CheckedSVG />
                <UI.FooterText>
                  Прогресс: {!!completionRate ? completionRate : '0'}%
                </UI.FooterText>
              </UI.FooterContainer>
              <Link href={``} passHref>
                <UI.FooterLink
                  $isDisabled={isBtnDisabled}
                  onClick={(e) => {
                    !isBtnDisabled && handleClick(e, setDisabled);
                  }}>
                  Обучаться
                </UI.FooterLink>
              </Link>
            </UI.FooterContainer>
          </UI.MyCourseCardWrapper>
        ) : (
          <UI.WhiteCard />
        )}
      </Media>

      <Media greaterThan='md'>
        {loading == false && roomData.loading == false ? (
          <UI.MyCourseCardWrapper>
            <Flex mb={20}>
              <Container>
                <UI.MyCourseImage
                  src={
                    !!Course?.imageWeb
                      ? `${process.env.NEXT_PUBLIC_FILE_URL}${Course?.imageWeb[0]?.path}`
                      : '/images/courses/test2.jpg'
                  }
                />
                <UI.MyCourseTag>Урок</UI.MyCourseTag>
              </Container>
              <Container mr={20} mw={320} $isFullWidth>
                <UI.Title size={16}>{Course?.title}</UI.Title>
                <UI.Text>{Course?.description}</UI.Text>
              </Container>
              <ColumnFlex mr={40} jc='space-around'>
                <UI.StatsText>
                  <UI.StatsSmallText>Ваш прогресс</UI.StatsSmallText>:{' '}
                  {!!completionRate ? completionRate : '0'}%
                </UI.StatsText>

                {(!!Course?.lessonsCount || Course?.lessonsCount == 0) && (
                  <UI.StatsText>
                    <UI.FileIconSVG />
                    {Course?.lessonsCount}{' '}
                    <UI.StatsSmallText>
                      {getDeclension(
                        ['урок', 'урока', 'уроков'],
                        Course?.lessonsCount,
                      )}
                    </UI.StatsSmallText>
                  </UI.StatsText>
                )}

                {(!!Course?.totalHomeworks || Course?.totalHomeworks == 0) && (
                  <UI.StatsText>
                    <UI.BookIconSVG />
                    {Course?.totalHomeworks}
                    <UI.StatsSmallText>
                      {getDeclension(
                        ['задание', 'задания', 'заданий'],
                        Course?.totalHomeworks,
                      )}
                    </UI.StatsSmallText>
                  </UI.StatsText>
                )}
              </ColumnFlex>
              <ColumnFlex jc='space-between'>
                {authors && (
                  <UI.AuthorWrapper>
                    <UI.AuthorPhoto
                      src={
                        authors[0].avatar
                          ? `${process.env.NEXT_PUBLIC_FILE_URL}${authors[0].avatar[0].path}`
                          : '/images/test.jpg'
                      }
                    />
                    <ContentWrapper>
                      <UI.AuthorTitle>{authors[0].fullName}</UI.AuthorTitle>
                    </ContentWrapper>
                  </UI.AuthorWrapper>
                )}

                <Link href={``} passHref>
                  <UI.FooterLink
                    $isDisabled={isBtnDisabled}
                    onClick={(e) => {
                      !isBtnDisabled && handleClick(e, setDisabled);
                    }}>
                    Продолжить
                  </UI.FooterLink>
                </Link>
              </ColumnFlex>
            </Flex>
            <UI.Divider mb={20} />
            <Flex>
              <ColumnFlex jc='space-between'>
                {!currentLesson?.Homework ||
                currentLesson?.Homework.length == 0 ? (
                  <UI.Title size={16}>Урок № 3</UI.Title>
                ) : (
                  <UI.TagsList>
                    {currentLesson.Homework.map((el, index) => {
                      return (
                        <UI.TagItem key={index}>
                          {HOMEWORK_TYPES[el?.type as HomeworkType]}
                        </UI.TagItem>
                      );
                    })}
                  </UI.TagsList>
                )}
              </ColumnFlex>
              <Container mr={20} mw={320} $isFullWidth>
                <UI.Title size={14}>{title}</UI.Title>
                <UI.Text mb={10}>{description}</UI.Text>
                <UI.FooterContainer mb={15}>
                  <Link href={``} passHref>
                    <UI.MyCourseLink
                      $isDisabled={isLinkDisabled}
                      onClick={(e) => {
                        !isLinkDisabled && handleClick(e, setLinkDisabled);
                      }}>
                      Продолжить урок
                    </UI.MyCourseLink>
                  </Link>
                </UI.FooterContainer>
              </Container>
              <Container>
                <UI.Title size={14}>Чат</UI.Title>
                {room?.lastMessage?.body && (
                  <UI.ClockContainer>
                    <UnreadMessagesCount />
                    <UI.Text mb={0} ml={5}>
                      {parse(room?.lastMessage?.body)}
                    </UI.Text>
                  </UI.ClockContainer>
                )}
                <Link
                  href={`/chat/${room?.meta?.Parent?.id}/${
                    CHAT_TYPES[
                      room?.meta?.Parent?.entityName as keyof typeof CHAT_TYPES
                    ]
                  }`}
                  passHref>
                  <UI.MyCourseLink>Перейти в чат</UI.MyCourseLink>
                </Link>
              </Container>
            </Flex>
          </UI.MyCourseCardWrapper>
        ) : (
          <UI.WhiteCard />
        )}
      </Media>
    </>
  );
};

export default MyCourseCard;
