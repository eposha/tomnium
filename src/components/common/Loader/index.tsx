import {LoaderContainer, LoaderOverlay, LoaderItemWrapper} from './styles';
import {IPageLoaderProps} from './types';
import {SpinnerLoader} from '@/components/common/Loader/Loaders';

export const Loader: React.FC<IPageLoaderProps> = ({
  zIndex,
  $isVisible,
  className,
}) => {
  return (
    <LoaderContainer
      zIndex={zIndex}
      $isVisible={$isVisible}
      className={className}>
      <LoaderOverlay className={'page-loader__overlay'} />
      <LoaderItemWrapper>
        <SpinnerLoader />
      </LoaderItemWrapper>
    </LoaderContainer>
  );
};
