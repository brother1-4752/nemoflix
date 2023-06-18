import HeaderWrapper from "./Header.styled";
import { Button, Typography } from "../atoms";
import { useRouter } from "@/hooks/useRouter";
import { useEffect, useState } from "react";

function Header() {
  const { routeTo } = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper className={scrollPosition < 969 ? "" : "hide"}>
      <Typography level={3} style={{ marginLeft: "20px" }}>
        NEMOFLIX
      </Typography>

      <Button
        variant="LOGIN"
        style={{ marginRight: "20px" }}
        onClick={() => routeTo("/login")}
      >
        LOGIN
      </Button>
    </HeaderWrapper>
  );
}

export default Header;
