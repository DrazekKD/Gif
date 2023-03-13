import { AxiosResponse } from "axios";
import { Gif } from "@giphy/react-components";
import { IGifList } from "../api/gif/types";

type Props = {
  pages: AxiosResponse<IGifList, any>[];
};
const GifsList = ({ pages }: Props) => (
  <div className="container m-auto">
    {pages.map((page) =>
      page?.data?.data?.map((gif) => (
        <div className="container flex justify-center my-3" key={gif.id}>
          <Gif gif={gif} width={500} />
        </div>
      ))
    )}
  </div>
);

export default GifsList;
