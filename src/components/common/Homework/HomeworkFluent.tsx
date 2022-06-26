import {Chat} from '@/components/chat';
import {Carousel} from '@/components/common/Carousel';
import HomeworkFile from '@/components/common/Homework/HomeworkFile';
import {Loader} from '@/components/common/Loader';
import {CourseSidebar} from '@/components/courses';
import {useRoom} from '@/graph-hooks/chat';
import {useRoomById} from '@/graph-hooks/chat/useRoomById';
import {useFileCreate} from '@/graph-hooks/files/useCreateFile';
import {useDeleteFile} from '@/graph-hooks/files/useDeleteFile';
import {useGetFiles} from '@/graph-hooks/files/useGetFiles';
import {useHomeworkResult} from '@/graph-hooks/homeworkResults/useHomeworkResult';
import {useHomeworkById} from '@/graph-hooks/homeworks/useHomeworkById';
import {useHomeworkResultCalculate} from '@/graph-hooks/homeworks/useHomeworkResultCalculate';
import {useGetNextStep} from '@/graph-hooks/lessons/useNextStep';
import {useUser} from '@/graph-hooks/user';
import {IFile} from '@/types/file';
import {IHomework} from '@/types/homework';
import {IThread} from '@/types/thread';
import {format} from 'date-fns';
import {useRouter} from 'next/router';
import {FC, Fragment, useEffect, useRef, useState} from 'react';
import ContentBlock from 'src/components/content-block/ContentBlock';
import {DATE_FORMAT} from 'src/constants';
import useHomeworkResultCreate from 'src/graph/hooks/homeworks/useHomeworkResultCreate';
import useHomeworkResultUpdate from 'src/graph/hooks/homeworks/useHomeworkResultUpdate';
import {
  CourseStatus,
  EntityName,
  FileParentEntity,
  HomeworkType,
} from 'src/graphql.schema';
import {Media} from 'src/media-styles';
import {Wrapper} from 'styles/courses/course-page';
import * as UI from 'styles/homeworks/homework-fluent';

interface IHomeworkFluent {
  modules?: any;
  courseId?: string;
  threadId?: string;
  status?: CourseStatus;
  OwnThreadId?: string | undefined;
  mainThread?: IThread | undefined;
  OwnThread?: IThread | null | undefined;
  homeworks?: IHomework[];
  idCourse?: string;
}

const HomeworkFluent: FC<IHomeworkFluent> = ({
  modules,
  courseId,
  threadId,
  status,
  OwnThreadId,
  homeworks,
  idCourse,
}) => {
  const {user} = useUser();
  const {getRoom} = useRoom();

  const {
    query: {homeworkId},
  } = useRouter();

  const {homework, loading: homeworkLoading} = useHomeworkById(homeworkId);
  const {
    homeworkResult,
    loading: homeworkResultLoading,
    refetch: refetchHomeworkResult,
  } = useHomeworkResult(homeworkId);

  const {files, loading: loadingHomeworkResultFiles} = useGetFiles({
    entityId: String(homeworkResult?.id),
    parentEntity: FileParentEntity.FileParentEntityHomeworkResult,
  });

  const {handleSubmit} = useFileCreate({
    entityId: String(homeworkResult?.id),
    entity: FileParentEntity.FileParentEntityHomeworkResult,
  });

  const {handleDeleteFile} = useDeleteFile();

  const inputRef = useRef<any>(null);

  const onFilesClickHandler = () => {
    inputRef?.current?.click();
  };

  const onFilesChangeHandler = () => {
    const file = Array([...inputRef?.current?.files])[0];

    if (file?.[0]) {
      handleSubmit({file: file[0]});
    }
  };

  const [textValue, setTextValue] = useState('');
  const [isCreatedResult, setIsCreatedResult] = useState(false);

  const {handleHomeworkResultCreate, loadingHomeworkResultCreate} =
    useHomeworkResultCreate();

  const {handleHomeworkResultUpdate, loadingHomeworkResultUpdate} =
    useHomeworkResultUpdate();

  const {homeworkResultCalculate} = useHomeworkResultCalculate();

  const loading =
    homeworkLoading ||
    homeworkResultLoading ||
    loadingHomeworkResultCreate ||
    loadingHomeworkResultUpdate ||
    loadingHomeworkResultFiles;

  const handleSetTextValue = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setTextValue(e.target.value);

  const handleResultCreate = () => {
    if (textValue.trim() && homeworkId) {
      handleHomeworkResultCreate({
        homeworkId: homeworkId as string,
        content: {html: textValue},
      }).then(() => setIsCreatedResult(true));
    }
  };

  const handleResultUpdate = () => {
    if (textValue.trim() && homeworkId) {
      handleHomeworkResultUpdate({
        homeworkId: homeworkId as string,
        content: {html: textValue},
      });
    }
  };

  const handleCalculateResult = async () => {
    await homeworkResultCalculate({
      variables: {
        homeworkId,
      },
      onCompleted: () => refetchHomeworkResult(),
    });
  };

  // const homeworkStatus =
  //   HOMEWORK_STATUS_TYPES_ANSWER[
  //     homework?.status || 'USER_HOMEWORK_STATUS_NOT_STARTED'
  //   ];

  useEffect(() => {
    if (homeworkResult?.content?.html) {
      setIsCreatedResult(true);
      setTextValue(homeworkResult?.content?.html);
    }
  }, [homeworkResult?.content?.html]);

  useEffect(() => {
    if (
      !user?.id ||
      !homeworkId ||
      !homeworkResult?.chatCreated ||
      homeworkResult?.completed
    )
      return;

    getRoom({
      variables: {
        record: {
          entityId: homeworkResult.id,
          entityName: EntityName.EntityNameHomeworkResult,
        },
      },
    });
  }, [
    user?.id,
    homeworkResult?.chatCreated,
    homeworkId,
    homeworkResult?.completed,
  ]);

  const {room} = useRoomById({
    entityName: EntityName.EntityNameHomeworkResult,
    entityId: String(homeworkResult?.id),
  });

  const {getSteps} = useGetNextStep();

  const {HomeworkTypeNoHomework} = HomeworkType;
  const displayedHomework = homeworks?.filter(
    (homework) => homework?.type !== HomeworkTypeNoHomework,
  );
  const isNoHomework = displayedHomework?.length == 0;

  const onNextLearningProcessClick = (e: any) => {
    e.preventDefault();
    if (isNoHomework) {
      homeworkResultCalculate({
        variables: {
          homeworkId: (homeworks || [])[0]?.id,
        },
        onCompleted: () => {
          getSteps({
            variables: {
              courseId: idCourse,
            },
          });
        },
        onError: () => {
          getSteps({
            variables: {
              courseId: idCourse,
            },
          });
        },
      });
    } else {
      getSteps({
        variables: {
          courseId: idCourse,
        },
      });
    }
  };

  return (
    <Wrapper>
      <Media greaterThan={'xs'}>
        <CourseSidebar
          modules={modules}
          threadId={threadId}
          courseId={courseId}
          status={status}
          OwnThreadId={OwnThreadId}
        />
      </Media>
      <div>
        <Loader $isVisible={loading} />
        <UI.Title>Задание</UI.Title>

        <UI.Description>
          <UI.DescriptionTitle>
            Ответьте максимально содержательно
          </UI.DescriptionTitle>
          {homework?.description && (
            <UI.DescriptionData>{homework?.description}</UI.DescriptionData>
          )}
        </UI.Description>

        <UI.ContentBlockWrapper>
          {homework?.HomeworkContent && (
            <ContentBlock contentData={homework.HomeworkContent} />
          )}
        </UI.ContentBlockWrapper>
        <UI.HeaderContainer>
          <UI.SubTitle>Ваш ответ:</UI.SubTitle>
          {homeworkResult?.submitted && !homeworkResult?.completed && (
            <UI.Label>Проверяется</UI.Label>
          )}
          {homeworkResult?.completed && <UI.Label>Проверен</UI.Label>}
        </UI.HeaderContainer>
        <UI.FluentWrapper>
          <UI.Container>
            <UI.FluentHeader>
              <UI.FluentTitle>
                {user?.fullName || ' '}{' '}
                {homeworkResult?.createdAt && 'добавил ответ'}
              </UI.FluentTitle>
              {homeworkResult?.createdAt && (
                <UI.FluentData>
                  {format(
                    new Date(homeworkResult.createdAt),
                    DATE_FORMAT.secondary,
                  )}
                </UI.FluentData>
              )}
            </UI.FluentHeader>
            <UI.FluentText
              value={textValue}
              onChange={handleSetTextValue}
              disabled={!!homeworkResult?.completed}
            />
            <Media lessThan='md'>
              <Carousel>
                <UI.FilesWrapper>
                  {!!files?.length &&
                    homeworkResult?.id &&
                    files?.map(({id, entityId}: IFile) => (
                      <Fragment key={entityId}>
                        <HomeworkFile onDelete={handleDeleteFile} id={id} />
                      </Fragment>
                    ))}
                </UI.FilesWrapper>
              </Carousel>
            </Media>

            <Media greaterThanOrEqual='md'>
              <UI.FilesWrapper>
                {!!files?.length &&
                  homeworkResult?.id &&
                  files?.map(({id, entityId}: IFile) => (
                    <Fragment key={entityId}>
                      <HomeworkFile onDelete={handleDeleteFile} id={id} />
                    </Fragment>
                  ))}
              </UI.FilesWrapper>
            </Media>

            {!homeworkResult?.completed && (
              <UI.ButtonWrapper>
                {homeworkResult?.id && (
                  <UI.MediaClipWrapper
                    onClick={onFilesClickHandler}
                    onChange={onFilesChangeHandler}>
                    <UI.MediaClipLabel htmlFor='file-input'>
                      Выберите файл:
                    </UI.MediaClipLabel>
                    <UI.MediaClipInput id='file-input' ref={inputRef} />
                    <UI.MediaClipSVG />
                  </UI.MediaClipWrapper>
                )}
                <UI.Button
                  type='button'
                  onClick={() =>
                    isCreatedResult
                      ? handleResultUpdate()
                      : handleResultCreate()
                  }>
                  Сохранить
                </UI.Button>
                {isCreatedResult && !homeworkResult?.submitted && (
                  <UI.Button
                    type='button'
                    onClick={handleCalculateResult}
                    onChange={onFilesChangeHandler}>
                    Ответить на задание
                  </UI.Button>
                )}
              </UI.ButtonWrapper>
            )}
          </UI.Container>
        </UI.FluentWrapper>
        {homeworkResult?.submitted && (
          <UI.NextButtonWrapper>
            <UI.Button as='a' onClick={onNextLearningProcessClick}>
              Продолжить
            </UI.Button>
          </UI.NextButtonWrapper>
        )}

        {room?.id && homeworkResult?.chatCreated && (
          <Chat roomId={room.id} pinnedMessage={room?.pinnedMessage} />
        )}
      </div>
    </Wrapper>
  );
};

export default HomeworkFluent;
