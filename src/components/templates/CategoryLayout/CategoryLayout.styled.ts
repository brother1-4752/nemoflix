import styled from "styled-components";
import { Props } from "./CategoryLayout";

export const StyledCategoryLayout = styled.div<Props>`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  scroll-behavior: smooth;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.95);

  position: relative;

  .loading__container {
    width: 100%;
    height: 100vh;

    position: absolute;
  }

  .card__container {
    width: 80%;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);

    .card__item {
      width: 90%;
      height: 70vh;

      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
