import {FC} from 'react';
import {ButtonLink} from 'styles/notifications/NotificationsSettings';

interface LinkButtonPropType {
  text: string;
}
const LinkButton: FC<LinkButtonPropType> = ({text}) => {
  return <ButtonLink>{text}</ButtonLink>;
};

export default LinkButton;
