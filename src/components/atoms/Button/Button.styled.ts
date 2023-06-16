import styled from "styled-components";

import { Props } from "./Button";

const BUTTON_COLOR = {
  LOGIN: { textColor: "#FFFFFF", bgColor: "#2b2b2b", hoverColor: "#ff0558" },
  NEXT_CATEGORY: {
    textColor: "#FFFFFF",
    bgColor: "#2b2b2b",
    hoverColor: "#ff0558",
  },
  SIDEBAR_CATEGORY: {
    textColor: "#f2f0f0",
    bgColor: "#f2f0f0",
    hoverColor: "rgba(15,15,15,0.1)",
    focusColor: "#ff0558",
  },
  DETAIL_GENRE: {
    textColor: "#FFFFFF",
    bgColor: "#ff0558", //핑크
    hoverColor: "#0f0f0f",
  },
  EXIT: {
    textColor: "#FFFFFF", //화이트
    bgColor: "#2b2b2b", //살짝 옅은 블랙
    hoverColor: "#0f0f0f", //찐블랙
  },
};

export const StyledButton = styled.button<Props>`
  padding: ${({ variant }) => getButtonSize(variant)?.padding};
  border-radius: ${({ variant }) => getButtonSize(variant)?.borderRadius};

  display: flex;
  justify-content: center;
  align-items: center;

  //TODO: border none과 아래 코드는 무슨 차이?
  border: none;
  /* border:0;
    outline: none; */
  cursor: pointer;

  background-color: ${({ variant }) =>
    BUTTON_COLOR[variant || "LOGIN"].bgColor};
  color: ${({ variant }) => BUTTON_COLOR[variant || "LOGIN"].textColor};

  &:hover {
    background-color: ${({ variant }) =>
      BUTTON_COLOR[variant || "LOGIN"].hoverColor};
  }
`;

const getButtonSize = (variant?: string) => {
  switch (variant) {
    case "LOGIN":
      return {
        padding: "8px 12px",
        borderRadius: "15px",
      };
    case "NEXT_CATEGORY":
      return {
        padding: "12px",
        borderRadius: "50%",
      };
    case "SIDEBAR_CATEGORY":
      return {
        padding: "10px",
        borderRadius: "50%",
      };
    case "DETAIL_GENRE":
      return {
        padding: "6px 12px",
        borderRadius: "10px",
      };
    case "EXIT":
      return {
        padding: "10px",
        borderRadius: "10px",
      };
  }
};
