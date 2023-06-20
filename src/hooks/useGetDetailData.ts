import apiClient from "@/api/apiClient";
import BASE_URL from "@/api/apiUrl";
import { IMovieDetail } from "@/types/apiDataTypes";
import { useQuery } from "@tanstack/react-query";

export const useGetDetailData = (movieId: string | undefined) => {
  const DETAIL_URL = BASE_URL + "/movie?id=" + movieId;

  const { isLoading, isError, error, data } = useQuery<IMovieDetail, Error>({
    queryKey: [`FETCH_DETAIL_PAGE`, DETAIL_URL],
    queryFn: () => apiClient(DETAIL_URL),
  });

  return { isLoading, isError, error, data };
};
