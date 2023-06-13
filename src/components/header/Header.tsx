import { Link } from "react-router-dom";
import HeaderBox from "./Header.styled";

function Header() {
  return (
    <HeaderBox>
      <Link to="">popular</Link>
      <Link to="coming-soon">coming-soon</Link>
      <Link to="now-playing">now-playing</Link>
    </HeaderBox>
  );
}

export default Header;
