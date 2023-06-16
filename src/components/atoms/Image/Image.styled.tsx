import styled from "styled-components";

import { Props } from "./Image";

export const StyledImage = styled.div<Props>`
  width: ${({ variant }) => getImageSize(variant)?.width};
  height: ${({ variant }) => getImageSize(variant)?.height};

  background: no-repeat url(${({ url }) => url});
  background-size: 100% ${({ variant }) => getImageSize(variant)?.height};
`;

const getImageSize = (variant?: string) => {
  switch (variant) {
    case "MAIN":
      return {
        width: "100%",
        height: "100vh",
      };
    case "CARD":
      return {
        width: "50%",
        height: "50vh",
      };
    case "DETAIL":
      return {
        width: "100%",
        height: "100vh",
      };
  }
};
