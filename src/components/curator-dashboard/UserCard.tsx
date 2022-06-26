import {FC} from 'react';
import Image from 'next/image';
import {formatDate, getNonOriginalImage} from '@/helpers/common';
import {IUser} from '@/types/user';
import {DATE_FORMAT} from '@/constants/common';
import {Grid, Item, UserLabel} from 'styles/curator-dashboard/appointments';
import {Card, Text} from 'styles/common';
import {AvatarCardWrapper} from 'styles/user/userProfile';

interface IUserCardProps {
  user?: IUser;
}

const UserCard: FC<IUserCardProps> = ({user}) => {
  return (
    <Card $fullWidth>
      <Text fontSize='18px' margin='0 0 20px' color='black'>
        Пользователь
      </Text>
      {user?.avatar && (
        <Item margin='0 0 20px'>
          <AvatarCardWrapper>
            <Image
              src={getNonOriginalImage(user.avatar)}
              alt='User avatar'
              width={95}
              height={95}
              objectFit='cover'
              priority
            />
          </AvatarCardWrapper>
        </Item>
      )}

      <Grid>
        <div>
          <Item>
            <UserLabel>ФИО</UserLabel> {user?.fullName}
          </Item>
          <Item>
            <UserLabel>Email</UserLabel> {user?.email}
          </Item>
          <Item>
            <UserLabel>Номер телефона</UserLabel> {user?.phone}
          </Item>
          <Item>
            <UserLabel>Дата рождения</UserLabel>
            {formatDate(user?.birthDate, DATE_FORMAT.primary)}
          </Item>
        </div>

        <div>
          <Item>
            <UserLabel>Cтрана</UserLabel> {user?.Country?.name}
          </Item>
          <Item>
            <UserLabel>Город</UserLabel> {user?.City?.name}
          </Item>
          <Item>
            <UserLabel>Часовой пояс</UserLabel>
            {user?.timezone}
          </Item>
          <Item>
            <UserLabel>Язык</UserLabel> {user?.Language}
          </Item>
        </div>
      </Grid>
    </Card>
  );
};

export default UserCard;
