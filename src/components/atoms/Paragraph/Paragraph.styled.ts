import styled from "styled-components";

import { Props } from "./Paragraph";

export const StyledParagraph = styled.p<Props>`
  font-size: ${({ variant }) => getFontSize(variant)};
`;

const getFontSize = (variant?: string) => {
  switch (variant) {
    case "MAIN":
      return "2em";
    case "DETAIL":
      return "1.2em";
  }
};
