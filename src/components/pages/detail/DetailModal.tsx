import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Button, Image, Paragraph, Typography } from "@/components/atoms";
import { StyledDetail } from "./DetailModal.styled";

import { useGetDetailData } from "@/hooks/useGetDetailData";
import { makeBgPath } from "@/utils/makeBgPath";

const DetailModal = () => {
  const naviagte = useNavigate();
  const location = useLocation();

  const handleModalClose = () => {
    if (location.key === "default") {
      naviagte("/", { replace: true });
    } else {
      naviagte(-1);
    }
  };

  const { movieId } = useParams();
  const { isLoading, isError, error, data } = useGetDetailData(movieId);

  if (isError) {
    return <div>{error && error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <AnimatePresence>
      <StyledDetail onClick={handleModalClose}>
        {isLoading ? (
          <></>
        ) : (
          <motion.div
            className="detail__wrapper"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{
              duration: 0.5,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image variant="DETAIL" url={makeBgPath(data.backdrop_path)} />
            <div className="detail__descriptions">
              <Typography
                level={2}
                style={{
                  backgroundColor: "#ff0558",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  width: "fit-content",
                }}
              >
                {data.title}
              </Typography>
              <Typography level={3}>{`<Overview>`}</Typography>
              <Paragraph variant="DETAIL">{data.overview}</Paragraph>
              <div className="genres__wrapper">
                <Typography level={2}>Genres :</Typography>
                {data.genres.map((genre) => (
                  <Button variant="DETAIL_GENRE" key={genre.id}>
                    {genre.name}
                  </Button>
                ))}
              </div>
              <Typography level={2}>Popularity : {data.popularity}</Typography>
              <Typography
                level={2}
                style={{
                  width: "fit-content",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                {`<HOMEPAGE LINK> `}
                <Link
                  style={{
                    backgroundColor: "white",
                    color: "#ff0558",
                    width: "fit-content",
                    padding: "6px 12px",
                    borderRadius: "10px",
                  }}
                  target="_blank"
                  to={data.homepage}
                >
                  HOMEPAGE
                </Link>
              </Typography>
              <footer
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  padding: "15px",
                  fontStyle: "italic",
                }}
              >
                <Typography level={3}>NEMOFLIX</Typography>
              </footer>
            </div>

            <Button
              variant="EXIT"
              style={{
                width: "30px",
                height: "30px",
                position: "absolute",
                top: "0",
                right: "0",
                margin: "10px",
              }}
              onClick={handleModalClose}
            >
              ❌
            </Button>
          </motion.div>
        )}
      </StyledDetail>
    </AnimatePresence>
  );
};

export default DetailModal;
