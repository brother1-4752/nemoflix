import styled from "styled-components";
import { Props } from "./Sidebar";

export const StyledSidebar = styled.div<Props>`
  width: 60px;
  height: 180px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  position: fixed;
  right: 1em;
  top: 11em;
  font-size: 30px;
`;
