import { useQuery } from "@tanstack/react-query";
import { StyledCategoryLayout } from "./CategoryLayout.styled";
import { CategoryVariant } from "./CategoryLayout.type";
import apiClient from "@/api/apiClient";
import BASE_URL from "@/api/apiUrl";
import { IAPIResponse } from "@/types/apiDataTypes";
import { Image, Typography } from "@/components/atoms";
import { makeBgPath } from "@/utils/makeBgPath";

export type Props = {
  variant: CategoryVariant;
} & React.HTMLAttributes<HTMLDivElement>;

const CategoryLayout = ({ variant = "popular", ...rest }: Props) => {
  const CATEGORY_URL = BASE_URL + "/" + variant;

  const { isLoading, isError, error, data } = useQuery<IAPIResponse, Error>({
    queryKey: ["FETCH_CATEGORY_PAGE", CATEGORY_URL],
    queryFn: () => apiClient(CATEGORY_URL),
  });

  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <StyledCategoryLayout variant={variant} {...rest}>
      <Typography
        textAlign="start"
        level={3}
        style={{ width: "80%", margin: "20px 0" }}
      >
        {variant}
      </Typography>
      <ul className="card__container">
        {data?.results.map((data) => (
          //li = card
          <li key={data.id} className="card__item">
            <Image url={makeBgPath(data.backdrop_path)} variant="CARD" />
            <div>{data.title}</div>
            <div>{data.release_date}</div>
            <div>{data.popularity}</div>
          </li>
        ))}
      </ul>
    </StyledCategoryLayout>
  );
};

export default CategoryLayout;
