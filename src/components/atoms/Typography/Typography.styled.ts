import styled from "styled-components";
import { Props } from "./Typography";

export const StyledTypography = styled.h1<Props>`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ level }) => getFontSize(level)};
  color: ${({ color }) => color};

  cursor: pointer;
`;

const getFontSize = (level?: number) => {
  switch (level) {
    case 1:
      return "1em";
    case 2:
      return "1.25em";
    case 3:
      return "1.8em";
  }
};
