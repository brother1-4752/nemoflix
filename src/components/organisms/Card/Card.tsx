import { motion, AnimatePresence } from "framer-motion";

import { Image, Typography } from "@/components/atoms";
import { StyledCard } from "./Card.styled";

import { makeImagePath } from "@/utils/makeImagePath";
import { IAPIResponse } from "@/types/apiDataTypes";
import { useRouter } from "@/hooks/useRouter";
import { variants } from "./Card.type";

export type Props = {
  data: IAPIResponse | undefined;
  cardDataIndex: number;
} & React.HTMLAttributes<HTMLUListElement>;

const Card = ({ data, cardDataIndex = 0, ...rest }: Props) => {
  const { routeTo } = useRouter();

  return (
    <StyledCard cardDataIndex={0} data={data} {...rest}>
      <AnimatePresence>
        {data && (
          <>
            {data?.results
              .slice(cardDataIndex, cardDataIndex + 3)
              .map((data, i) => (
                <motion.li
                  key={data.id}
                  className="card__item"
                  custom={i}
                  variants={variants}
                  exit={{ opacity: 0 }}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: [null, 1.05] }}
                  whileTap={{ scale: 0.9 }}
                  transition={{
                    delayChildren: 0.3,
                    staggerChildren: 0.2,
                    ease: "easeOut",
                  }}
                  onClick={() => routeTo(`movie/${data.id}`)}
                >
                  <Image url={makeImagePath(data.poster_path)} variant="CARD" />
                  <Typography
                    color="#0079FF"
                    level={2}
                    style={{ marginTop: "15px", paddingLeft: "30px" }}
                  >
                    {data.title}
                  </Typography>
                </motion.li>
              ))}
          </>
        )}
      </AnimatePresence>
    </StyledCard>
  );
};

export default Card;
