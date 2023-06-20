import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 30px;
  padding: 20px 12px;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  background-color: rgba(0, 0, 0, 0.75);

  animation: initialSlideIn 0.5s ease-in-out forwards;

  &.hide {
    top: -100px;
  }
`;
