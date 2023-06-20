import styled from "styled-components";

import { Props } from "./Image";

export const StyledImage = styled.div<Props>`
  width: ${({ variant }) => getImageSize(variant)?.width};
  height: ${({ variant }) => getImageSize(variant)?.height};

  background: no-repeat url(${({ url }) => url});
  background-size: 100% ${({ variant }) => getImageSize(variant)?.height};

  //메인포스터인 경우만 animation 적용
  animation: ${({ variant }) => getImageSize(variant)?.animation};

  //메인포스터 제외 border-radius 적용
  border-radius: ${({ variant }) => getImageSize(variant)?.borderRadius};

  //공통
  cursor: pointer;
  box-shadow: rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset,
    rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
    rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
    rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px,
    rgba(255, 255, 255, 0.09) 0px 8px 4px,
    rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

const getImageSize = (variant?: string) => {
  switch (variant) {
    case "MAIN":
      return {
        width: "100%",
        height: "100vh",
        animation: "loadMainPoster 2s ease-in-out forwards",
      };
    case "CARD":
      return {
        width: "100%",
        height: "50vh",
        borderRadius: "15px",
      };
    case "DETAIL":
      return {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
      };
  }
};
