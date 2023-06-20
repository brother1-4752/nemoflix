import { useState } from "react";

export const useMoveToNextSlide = () => {
  const [cardDataIndex, setCardDataIndex] = useState(0);

  const moveToNextSlide = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO: undefined 가능성 있는 것들을 어떻게 처리해야할지 모르겠다
    const INDEX = event.currentTarget.dataset.cardpageindex
      ? +event.currentTarget.dataset.cardpageindex
      : -1;
    setCardDataIndex((prev) => {
      const calculatedIndex = prev + INDEX;
      //TODO: 매직넘버 처리하기(0:INITIAL_INDEX, 18|19: FINAL_INDEX)
      if (0 >= calculatedIndex) return 0;
      else if (calculatedIndex >= 19) return 18;
      return prev + INDEX * 3;
    });
  };

  return { cardDataIndex, moveToNextSlide };
};
