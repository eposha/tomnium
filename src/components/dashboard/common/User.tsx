import {FC} from 'react';
import * as UI from 'styles/dashboard/dashboard-user';

interface IUser {
  src: string;
  name: string;
  status: string;
}

const User: FC<IUser> = ({src, name, status}) => {
  return (
    <UI.UserContainer>
      <UI.UserPicture src={src} />
      <UI.UserName>{name}</UI.UserName>
      <UI.Status>{status}</UI.Status>
    </UI.UserContainer>
  );
};

export default User;
