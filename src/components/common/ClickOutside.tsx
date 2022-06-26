import {useEffect, useRef} from 'react';

interface IProps {
  Component: React.ElementType;
  handler: () => void;
}

export const ClickOutside: React.FC<IProps> = ({
  children,
  Component,
  handler,
}) => {
  const modalWrapperRef = useRef(null);

  const handleClickOutside = ({target}: Event) => {
    const {current: wrap} = modalWrapperRef;
    // @ts-ignore
    if (wrap && !wrap.contains(target)) handler();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return <Component ref={modalWrapperRef}>{children}</Component>;
};
