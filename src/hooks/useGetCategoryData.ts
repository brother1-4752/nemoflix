import apiClient from "@/api/apiClient";
import BASE_URL from "@/api/apiUrl";
import { CategoryVariant } from "@/components/templates/CategoryLayout/CategoryLayout.type";
import { IAPIResponse } from "@/types/apiDataTypes";
import { useQuery } from "@tanstack/react-query";

//TODO: 어디에 원래 넣어야지? 아 loader?!
export const useGetCategoryData = (category: CategoryVariant) => {
  const CATEGORY_URL = BASE_URL + "/" + category;

  const { isLoading, isError, error, data } = useQuery<IAPIResponse, Error>({
    queryKey: [`FETCH_${category}_PAGE`, CATEGORY_URL],
    queryFn: () => apiClient(CATEGORY_URL),
  });

  return { isLoading, isError, error, data };
};
