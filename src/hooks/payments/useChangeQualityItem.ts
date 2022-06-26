import {useState} from 'react';

export type TypeUseChangeQualityItem = {
  quality: number;
  increaseQuality: () => void;
  decreaseQuality: () => void;
};

export const useChangeQualityItem = (): TypeUseChangeQualityItem => {
  const [quality, setQuality] = useState(1);

  const increaseQuality = () => {
    setQuality((prev) => ++prev);
  };
  const decreaseQuality = () => {
    if (quality === 1) return;
    setQuality((prev) => --prev);
  };
  return {
    quality,
    increaseQuality,
    decreaseQuality,
  };
};
