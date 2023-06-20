import { mainPosterUrlList } from "@/constants/mainPosterUrlList";

export const makeRandomMainPoster = () => {
  const randomIndexofMainImage = Math.floor(
    Math.random() * mainPosterUrlList.length
  );

  const randomMainPoster = mainPosterUrlList[randomIndexofMainImage];

  return { randomMainPoster };
};
