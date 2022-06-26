import {useEffect, useState} from 'react';

export const usePaymentPopup = (isItem: boolean) => {
  const [isMount, setIsMount] = useState(false);

  const [isPaymentPopup, setIsPaymentPopup] = useState(false);

  const getStorageIsOpenPayments = () =>
    Boolean(localStorage.getItem('isOpenPayments'));

  useEffect(() => {
    if (isMount) return;
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (!isMount || !isItem) return;
    setIsPaymentPopup(getStorageIsOpenPayments());
  }, [isMount, isItem]);

  const handleOpenPaymentPopup = () => {
    setIsPaymentPopup(true);
  };

  const handleClosePaymentPopup = (props?: {callback?: () => void}) => {
    const {callback} = props || {};

    setIsPaymentPopup(false);
    callback && callback();
    if (!getStorageIsOpenPayments()) return;
    localStorage.removeItem('isOpenPayments');
  };

  return {
    isPaymentPopup,
    handleOpenPaymentPopup,
    handleClosePaymentPopup,
  };
};
