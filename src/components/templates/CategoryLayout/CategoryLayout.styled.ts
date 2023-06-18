import styled from "styled-components";
import { Props } from "./CategoryLayout";

export const StyledCategoryLayout = styled.div<Props>`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  scroll-behavior: smooth;

  background-color: rgba(0, 0, 0, 0.95);

  .card__container {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
`;
