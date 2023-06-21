import { HeaderWrapper } from "./Header.styled";
import { Button, Typography } from "../../atoms";

import { useRouter } from "@/hooks/useRouter";
import { useScrollYPosition } from "@/hooks/useScrollYPosition";
import { VIEW_HEIGHT } from "@/constants/windowScreenSizeData";

function Header() {
  const { scrollY } = useScrollYPosition();
  const { routeTo } = useRouter();

  return (
    <HeaderWrapper className={scrollY < VIEW_HEIGHT - 60 ? "" : "hide"}>
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
