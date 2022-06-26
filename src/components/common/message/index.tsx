import {
  InnerMessage,
  InnerCloseButton,
  CloseIcon,
  InnerContent,
  AttentionIcon,
} from 'styles/message';
import {Text} from 'styles/common';
import {Media} from 'src/media-styles';

export type TMessage = 'error' | 'success';

interface IProps {
  type: TMessage;
  isOpen: boolean;
  handleClose: () => void;
  text: string;
  margin?: string;
}

export const Message: React.FC<IProps> = ({
  type,
  isOpen,
  handleClose,
  text,
  margin,
}) => {
  if (!isOpen) return null;

  return (
    <InnerMessage margin={margin} type={type}>
      <InnerContent>
        <AttentionIcon type={type} />
        <Media greaterThanOrEqual={'lg'}>
          <Text
            $description
            fontSize={'16px'}
            fontWeight={'600'}
            color={'black'}>
            {text}
          </Text>
        </Media>
        <Media lessThan={'lg'}>
          <Text
            $description
            fontSize={'12px'}
            fontWeight={'600'}
            color={'black'}>
            {text}
          </Text>
        </Media>
      </InnerContent>
      <InnerCloseButton onClick={handleClose}>
        <CloseIcon type={type} />
      </InnerCloseButton>
    </InnerMessage>
  );
};
