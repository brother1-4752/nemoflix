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
    textColor: "#ffffff",
    bgColor: "#ffffff",
    hoverColor: "#ff0558",
    focusColor: "#ff0558",
  },
  DETAIL_GENRE: {
    textColor: "#FFFFFF",
    bgColor: "#ff0558",
    hoverColor: "#0F0F0F",
  },
  EXIT: {
    textColor: "#FFFFFF",
    bgColor: "none",
    hoverColor: "#0f0f0f",
  },
};

export const StyledButton = styled.button<Props>`
  width: fit-content;
  padding: ${({ variant }) => getButtonSize(variant)?.padding};
  border-radius: ${({ variant }) => getButtonSize(variant)?.borderRadius};
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ variant }) =>
    BUTTON_COLOR[variant || "LOGIN"].bgColor};
  color: ${({ variant }) => BUTTON_COLOR[variant || "LOGIN"].textColor};
  font-family: inherit;
  font-size: ${({ variant }) => getButtonSize(variant)?.fontSize};

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
        padding: "1em",
        borderRadius: "50%",
        fontSize: "30px",
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
        borderRadius: "50%",
      };
  }
};
