import {FC} from 'react';
import {ArrowWrapper} from 'styles/payments';
import {IArrowProps} from '@/components/common/Carousel/Buttons';

interface IProps extends IArrowProps {
  Component: React.ElementType;
}

export const Arrow: FC<IProps> = ({
  onClick,
  disabled,
  className,
  Component,
}) => (
  <ArrowWrapper onClick={onClick} className={className} disabled={disabled}>
    <Component />
  </ArrowWrapper>
);
