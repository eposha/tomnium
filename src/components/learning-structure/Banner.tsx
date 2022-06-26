import {EntityAuthor} from '@/components/authors';
import {CourseProgressLabel} from '@/components/courses';
import {useLeaveThread} from '@/graph-hooks/threads/useLeaveThread';
import {getDeclension, getNonOriginalImage} from '@/helpers/common';
import {IAuthor} from '@/types/author';
import {IMedia} from '@/types/media';
import {IThread} from '@/types/thread';
import {useRouter} from 'next/router';
import DropdownIcon from 'public/icons/DropdownSVG.svg';
import {FC} from 'react';
import IconsGroup from 'src/components/common/logo/IconsGroup';
import {useClickOutside} from 'src/hooks';
import {useModal} from 'src/hooks/useModal';
import {Media} from 'src/media-styles';
import {CardLabel, Text, Widget} from 'styles/common';
import * as UI from 'styles/learningStructure/banner';
import DeletePopup from '../common/popup/DeletePopup';

interface IPageHeroProps {
  title?: string;
  description?: string;
  Authors?: IAuthor[];
  studentsCount?: number;
  imageWeb?: IMedia[];
  imageMob?: IMedia[];
  usersImages?: [IMedia[]];
  threadsList?: IThread[];
  mainThreadId?: string;
  button?: boolean;
  label: string;
  courseId?: string;
  OwnThread?: IThread | null;
  progress?: number;
}

const Banner: FC<IPageHeroProps> = ({
  title,
  description,
  Authors,
  studentsCount,
  imageWeb,
  imageMob,
  usersImages,
  threadsList,
  mainThreadId,
  button,
  label,
  courseId,
  OwnThread,
}) => {
  const router = useRouter();
  const {ref, isVisible, setIsVisible} = useClickOutside(false);

  const {isOpen, onClose, onOpen} = useModal();
  const onSuccessLeave = () => {
    onClose();
  };

  const {handleLeaveThread} = useLeaveThread(OwnThread?.id, onSuccessLeave);

  return (
    <UI.Hero
      imageWeb={getNonOriginalImage(imageWeb)}
      imageMob={getNonOriginalImage(imageMob)}>
      <UI.HeroInner>
        <UI.HeroHeader>
          <Media greaterThan={'xs'}>
            <CardLabel>{label}</CardLabel>
          </Media>

          <UI.Title>{title}</UI.Title>
          <UI.Description>{description}</UI.Description>
          {OwnThread && (
            <Media greaterThan={'xs'}>
              <UI.ProgressWrapper>
                <CourseProgressLabel
                  title='Эффективность'
                  progress={OwnThread?.UserThreadProgress?.efficiency}
                  color='blueberry'
                />
                <CourseProgressLabel
                  title='Пройдено'
                  progress={OwnThread?.UserThreadProgress?.progress}
                  color='red'
                />
              </UI.ProgressWrapper>
            </Media>
          )}
        </UI.HeroHeader>

        <UI.HeroFooter>
          {!!Authors?.length && (
            <UI.AuthorsWrapper>
              <UI.AuthorsHeading>
                Автор{Authors.length > 1 && 'ы'} курса
              </UI.AuthorsHeading>
              <UI.AuthorsList>
                {Authors?.map((author) => (
                  <EntityAuthor key={author.id} author={author} color='light' />
                ))}
              </UI.AuthorsList>
            </UI.AuthorsWrapper>
          )}
          <UI.UsersCountWrapper>
            {usersImages && !!usersImages.length && (
              <>
                <Media at={'xs'}>
                  <IconsGroup
                    groupListSize={{
                      height: 20,
                    }}
                    iconsSizes={{width: 20, height: 20}}
                    iconsList={usersImages.slice(0, 3)}
                  />
                </Media>
                <Media greaterThan={'xs'}>
                  <IconsGroup
                    groupListSize={{
                      height: 40,
                    }}
                    iconsSizes={{width: 40, height: 40}}
                    iconsList={usersImages.slice(0, 3)}
                    $isBanner
                    reverseZindex
                  />
                </Media>
              </>
            )}
            <Media at={'xs'}>
              <Widget $content $status ml={10}>
                <UI.UsersCountLabel>
                  <b>{studentsCount}</b> прошли
                </UI.UsersCountLabel>
              </Widget>
            </Media>
            {!!studentsCount && (
              <Media greaterThan={'xs'}>
                <UI.UsersCountLabel ml={10}>
                  {studentsCount}{' '}
                  {getDeclension(
                    ['участник', 'участника', 'участников'],
                    studentsCount,
                  )}
                  <br />
                  прошли курс
                </UI.UsersCountLabel>
              </Media>
            )}
          </UI.UsersCountWrapper>

          {button && OwnThread && (
            <>
              <UI.HeroButton onClick={onOpen}>
                Прекратить обучение
              </UI.HeroButton>

              <DeletePopup
                description={
                  'Вы уверены что хотите прекратить обучение в текущем потоке и потерять все выполненные домашние задания и прогресс обучения?'
                }
                open={isOpen}
                onPopupClose={onClose}
                onDelete={handleLeaveThread}
              />
            </>
          )}

          {button && !OwnThread && (
            <div ref={ref}>
              <UI.HeroButton
                onClick={() => setIsVisible((current) => !current)}>
                <Text fontSize='14px' margin='0 5px 0 0' color='white'>
                  Сменить поток
                </Text>
                <DropdownIcon width={10} height={5} />
                <UI.ThreadListWrapper>
                  {isVisible && (
                    <UI.ThreadList>
                      {threadsList?.map(({id, title}) => (
                        <UI.ThreadItem
                          key={id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsVisible(false);
                            if (id !== mainThreadId) {
                              router.replace(
                                `/courses/${courseId}/threads/${id}`,
                              );
                            }
                          }}
                          isSelected={id === mainThreadId}>
                          {title}
                        </UI.ThreadItem>
                      ))}
                    </UI.ThreadList>
                  )}
                </UI.ThreadListWrapper>
              </UI.HeroButton>
            </div>
          )}
        </UI.HeroFooter>
      </UI.HeroInner>
    </UI.Hero>
  );
};

export default Banner;
