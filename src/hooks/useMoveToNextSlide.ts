import { useState } from "react";

export const useMoveToNextSlide = () => {
  const [cardDataIndex, setCardDataIndex] = useState(0);
  const INITIAL_INDEX = 0;
  const FINAL_INDEX = 18;

  const moveToNextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO: undefined 가능성 있는 것들을 어떻게 처리해야할지 모르겠다
    const INDEX = event.currentTarget.dataset.cardpageindex
      ? +event.currentTarget.dataset.cardpageindex
      : -1;
    setCardDataIndex((prev) => {
      const calculatedIndex = prev + INDEX;
      if (INITIAL_INDEX >= calculatedIndex) return INITIAL_INDEX;
      else if (calculatedIndex > FINAL_INDEX) return FINAL_INDEX;
      return prev + INDEX * 3;
    });
  };

  return { cardDataIndex, moveToNextSlide };
};
