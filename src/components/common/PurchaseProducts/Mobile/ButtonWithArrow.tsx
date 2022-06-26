import {PrimaryMobileButton} from 'styles/payments';
import {RightArrow, Text} from 'styles/common';
import {TColors} from 'styles/_variables';

interface IProps {
  handler: () => void;
  text: string;
  margin?: string;
  color?: TColors;
  border?: 'primary' | 'none';
}

export const ButtonWithArrow: React.FC<IProps> = ({
  text,
  handler,
  color = 'jordyBlue',
  margin,
  border,
}) => {
  return (
    <PrimaryMobileButton
      onClick={handler}
      margin={margin}
      border={border}
      color={color}>
      <Text $description fontSize={'12px'} color={color} fontWeight={'500'}>
        {text}
      </Text>
      <RightArrow width={2} padding={3} color={color} />
    </PrimaryMobileButton>
  );
};
