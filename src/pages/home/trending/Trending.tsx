/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState<any>("day");
  const { data, loading } = useFetch(`trending/movie/${trendingMovies}
  `);
  return (
    <div className="carouselSection">
      <Carousel
        title="Trending Movies"
        data={data?.results}
        loading={loading}
      />
    </div>
  );
};

export default Trending;
