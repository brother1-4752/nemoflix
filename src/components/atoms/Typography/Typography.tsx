import React from "react";

import { StyledTypography } from "./Typography.styled";
import { Color, TextAlign } from "./Typography.type";

export type Props = {
  level?: 1 | 2 | 3; // 1:디테일 타이틀(1em), 2:카드 타이틀(1.25em), 3:헤더 타이틀(1.5em)
  color?: Color;
  textAlign?: TextAlign;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function Typography({
  children,
  level = 1,
  textAlign = "center",
  color = "#ff0558",
  ...rest
}: Props) {
  return (
    <StyledTypography
      level={level}
      textAlign={textAlign}
      color={color}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
}
