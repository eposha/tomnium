import {Media} from 'src/media-styles';
import {Widget} from 'styles/common';
import {IconsGroup} from 'src/components/common/logo';
import {
  UserCountWrapper,
  IconLabel,
  IconsGroupWrapper,
} from 'styles/courses/course-card';
import {IMedia} from '@/types/media';

interface IUsersCountProps {
  studentsCount: number;
  usersImages: IMedia[][];
}

const UsersCount: React.FC<IUsersCountProps> = ({
  studentsCount,
  usersImages,
}) => {
  return (
    <UserCountWrapper>
      {usersImages && !!usersImages.length && (
        <IconsGroupWrapper>
          <IconsGroup
            groupListSize={{
              height: 20,
            }}
            iconsSizes={{width: 20, height: 20}}
            iconsList={usersImages.slice(0, 3)}
          />
        </IconsGroupWrapper>
      )}
      {!!studentsCount && (
        <>
          <Media at='xs'>
            <Widget $content $status fontSize='12px'>
              {studentsCount} прошли
            </Widget>
          </Media>
          <Media greaterThan='xs'>
            <IconLabel>
              <b>{studentsCount}</b> прошли
            </IconLabel>
          </Media>
        </>
      )}
    </UserCountWrapper>
  );
};

export default UsersCount;
