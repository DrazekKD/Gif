import useInfinityScroll from "../hooks/useInfinityScroll";
import useSearchGif from "../api/gif/useSearchGif";
import GifsList from "./GifsList";

interface IGifsList {
  searchName?: string;
}

const GifsListWrapper = ({ searchName }: IGifsList) => {
  if (!searchName) {
    return null;
  }

  const query = useSearchGif({
    q: searchName,
  });

  useInfinityScroll({
    loading: query.isLoading,
    enabled: !!query.hasNextPage,
    onNext: query.fetchNextPage,
  });

  if (!query.data?.pages) {
    return null;
  }
  const { pages } = query.data;
  return (
    <div className="container m-auto">
      <GifsList pages={pages} />
    </div>
  );
};

export default GifsListWrapper;
