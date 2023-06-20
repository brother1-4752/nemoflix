import React from "react";

import { StyledCategoryLayout } from "./CategoryLayout.styled";

import { Button, Typography } from "@/components/atoms";

import { CategoryVariant } from "./CategoryLayout.type";
import { useGetCategoryData } from "@/hooks/useGetCategoryData";
import { useMoveToNextSlide } from "@/hooks/useMoveToNextSlide";
import { Card, LoaderIcon } from "@/components";

export type Props = {
  variant: CategoryVariant;
} & React.HTMLAttributes<HTMLDivElement>;

const CategoryLayout = ({ variant = "popular", ...rest }: Props) => {
  const { isLoading, isError, error, data } = useGetCategoryData(variant);
  const { cardDataIndex, moveToNextSlide } = useMoveToNextSlide();

  if (isError) {
    return <div>{error && error.message}</div>;
  }

  return (
    <StyledCategoryLayout variant={variant} {...rest}>
      {isLoading ? (
        <LoaderIcon></LoaderIcon>
      ) : (
        <>
          <Typography
            textAlign="start"
            level={3}
            style={{ width: "80%", margin: "20px 0" }}
          >
            {variant}
          </Typography>

          <Card
            data={data}
            cardDataIndex={cardDataIndex}
            className="card__container"
          ></Card>

          <Button
            disabled={cardDataIndex === 0 ? true : false}
            variant="NEXT_CATEGORY"
            data-cardpageindex={-1}
            onClick={moveToNextSlide}
            style={{ position: "absolute", top: "15em", left: "4.5em" }}
          >
            ◀
          </Button>
          <Button
            disabled={cardDataIndex === 18 ? true : false}
            variant="NEXT_CATEGORY"
            data-cardpageindex={1}
            onClick={moveToNextSlide}
            style={{ position: "absolute", top: "15em", right: "6em" }}
          >
            ▶
          </Button>
        </>
      )}
    </StyledCategoryLayout>
  );
};

export default CategoryLayout;
