import {useEffect, useState, useRef, useCallback} from 'react';

const useClickOutside = (initialState: boolean) => {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsVisible(false);
      }
    },
    [ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  return {ref, isVisible, setIsVisible};
};

export default useClickOutside;
