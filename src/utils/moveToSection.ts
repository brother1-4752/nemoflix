import { VIEW_HEIGHT } from "@/constants/windowScreenSizeData";

//TODO: utils디렉토리에 두는게 맞을까?
export const moveToSection = (event: React.MouseEvent<HTMLButtonElement>) => {
  //TODO: 원래는 undefined일 경우 에러, 어떻게 처리하지?
  const INDEX = event.currentTarget.dataset.index
    ? +event.currentTarget.dataset.index
    : -1;

  window.scrollTo({
    top: VIEW_HEIGHT * INDEX,
    behavior: "smooth",
  });
};
