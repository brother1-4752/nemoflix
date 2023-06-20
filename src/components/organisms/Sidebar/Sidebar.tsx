import { moveToSection } from "@/utils/moveToSection";
import { StyledSidebar } from "./Sidebar.styled";
import { PageIndexArr } from "./Sidebar.type";
import { Button } from "@/components/atoms";

export type Props = {
  pageIndexArr: PageIndexArr;
} & React.HTMLAttributes<HTMLDivElement>;

const Sidebar = ({ pageIndexArr }: Props) => {
  return (
    <StyledSidebar pageIndexArr={[0, 1, 2, 3]}>
      {pageIndexArr.map((pageIndex) => (
        <Button
          key={pageIndex}
          variant="SIDEBAR_CATEGORY"
          data-index={pageIndex}
          onClick={moveToSection}
        ></Button>
      ))}
    </StyledSidebar>
  );
};

export default Sidebar;
