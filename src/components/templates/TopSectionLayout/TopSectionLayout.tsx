import { Image, Paragraph, Typography } from "@/components/atoms";
import { VIEW_HEIGHT } from "@/constants/windowScreenSizeData";
import { Header } from "@/components/organisms";

const TopSectionLayout = () => {
  return (
    <>
      <Header />
      <Image variant="MAIN" url={`mainImg3.webp`} />
      <Typography
        level={3}
        style={{
          position: "absolute",
          top: VIEW_HEIGHT / 2,
        }}
      >
        Movies, dramas, and variety shows without limit!
      </Typography>
      <Paragraph
        variant="DETAIL"
        style={{
          position: "absolute",
          top: VIEW_HEIGHT / 2 + 30,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        Feel free to use the new weekly updates at no extra charge!
      </Paragraph>
    </>
  );
};

export default TopSectionLayout;
