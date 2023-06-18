import { Header } from "@/components/header";
import HomeContainer from "./Home.styled";
import { makeBgPath } from "@/utils/makeBgPath";
import { mainPosterData } from "@/constants/mainPosterData";
import { Button, Image, Paragraph, Typography } from "@/components/atoms";
import { CategoryLayout } from "@/components/templates";
import { CategoryVariant } from "@/components/templates/CategoryLayout/CategoryLayout.type";

function Home() {
  const randomIndex = Math.floor(Math.random() * mainPosterData.length);
  const sellectedByRandom = mainPosterData[randomIndex];
  const randomMainPosterData = makeBgPath(sellectedByRandom);

  const categoryArr: CategoryVariant[] = [
    "popular",
    "now-playing",
    "coming-soon",
  ];

  //arr - filter
  const handleClick0 = () => {
    window.scrollTo({
      top: 969 * 0,
      behavior: "smooth",
    });
  };
  const handleClick = () => {
    window.scrollTo({
      top: 969 * 1,
      behavior: "smooth",
    });
  };

  const handleClick2 = () => {
    window.scrollTo({
      top: 969 * 2,
      behavior: "smooth",
    });
  };
  const handleClick3 = () => {
    window.scrollTo({
      top: 969 * 3,
      behavior: "smooth",
    });
  };

  return (
    <HomeContainer>
      <Header />
      <Image variant="MAIN" url={randomMainPosterData} style={{ opacity: 0 }} />
      <Typography
        level={3}
        style={{
          position: "absolute",
          top: "370px",
        }}
      >
        Movies, dramas, and variety shows without limit!
      </Typography>
      <Paragraph
        variant="DETAIL"
        style={{
          position: "absolute",
          top: "420px",
          color: "white",
          opacity: "0.7",
        }}
      >
        Feel free to use the new weekly updates at no extra charge!
      </Paragraph>

      <div className="sidebar">
        <Button variant="SIDEBAR_CATEGORY" onClick={handleClick0}></Button>
        <Button variant="SIDEBAR_CATEGORY" onClick={handleClick}></Button>
        <Button variant="SIDEBAR_CATEGORY" onClick={handleClick2}></Button>
        <Button variant="SIDEBAR_CATEGORY" onClick={handleClick3}></Button>
      </div>

      {categoryArr.map((category) => (
        <CategoryLayout
          id={category}
          key={category}
          variant={category}
        ></CategoryLayout>
      ))}
    </HomeContainer>
  );
}

export default Home;
