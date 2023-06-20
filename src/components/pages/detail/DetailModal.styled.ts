import styled from "styled-components";

export const StyledDetail = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  cursor: pointer;

  .detail__wrapper {
    width: 80%;
    height: 80vh;

    position: absolute;

    display: flex;
    position: relative;

    .detail__descriptions {
      width: 100%;
      padding: 20px;

      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      background-color: rgba(0, 0, 0, 0.9);

      display: flex;
      flex-direction: column;
      gap: 30px;

      .genres__wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
`;
