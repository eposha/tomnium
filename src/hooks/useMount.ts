import {useEffect, useState} from 'react';

export const useMount = () => {
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    if (isMount) return;
    setIsMount(isMount);
  }, []);
  return {isMount};
};
