import {useState} from 'react';

export const useModal = (initState?: boolean) => {
  const [isOpen, setIsOpen] = useState(initState || false);

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  return {
    isOpen,
    onOpen,
    onClose,
  };
};
