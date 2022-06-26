import {ClickOutside} from '@/components/common/ClickOutside';
import {MainWrapperModal} from 'styles/payments';

interface IProps {
  onClose: () => void;
  WrapperComponent: React.ElementType;
  isMainWrapper?: boolean;
  positionMainWrapper?: 'fixed' | 'absolute';
}

export const Modal: React.FC<IProps> = ({
  children,
  onClose,
  WrapperComponent,
  isMainWrapper = true,
  positionMainWrapper,
}) => {
  return (
    <>
      {isMainWrapper && <MainWrapperModal position={positionMainWrapper} />}
      <ClickOutside Component={WrapperComponent} handler={onClose}>
        {children}
      </ClickOutside>
    </>
  );
};
