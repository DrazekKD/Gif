import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import gifApi from "../api";
import { IGifList } from "./types";

interface IParams {
  limit?: number;
  pageParam?: number;
  q: string;
}
const getNextOffset = (lastPage: AxiosResponse<IGifList, any>) => {
  const { count, offset, total_count: totalCount } = lastPage.data.pagination;
  if (count < totalCount) {
    return offset + count;
  }
  return undefined;
};

const searchGifs = async <T>({
  pageParam = 10,
  limit = 10,
  ...params
}: IParams) =>
  gifApi.get<T>("/gifs/search", {
    params: { ...params, limit, offset: pageParam },
  });
const getGifsListQueryConfig = <T>(params: IParams) => ({
  queryFn: () => searchGifs<T>({ ...params }),
  queryKey: [params.q],
  getNextPageParam: getNextOffset,
  staleTime: Infinity,
  keepPreviousData: true,
});

const useSearchGif = <T extends IGifList>(params: IParams) =>
  useInfiniteQuery(getGifsListQueryConfig<T>(params));

export default useSearchGif;
