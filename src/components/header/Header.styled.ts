import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 30px;
  padding: 20px 12px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;

  background-color: rgba(0, 0, 0, 0.75);

  @keyframes slideIn {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  animation: slideIn 0.5s ease-in-out forwards;

  &.hide {
    top: -100px;
  }
`;

export default HeaderWrapper;
