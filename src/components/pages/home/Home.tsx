import { Outlet } from "react-router-dom";

import HomeContainer from "./Home.styled";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";

import { categoryLabelList } from "@/types/categoryLabelList";
import { CategoryLayout, TopSectionLayout } from "@/components";

function Home() {
  return (
    <HomeContainer>
      <TopSectionLayout />

      {categoryLabelList.map((category) => (
        <CategoryLayout key={category} variant={category}></CategoryLayout>
      ))}

      <Sidebar pageIndexArr={[0, 1, 2, 3]} />

      <Outlet />
    </HomeContainer>
  );
}

export default Home;
