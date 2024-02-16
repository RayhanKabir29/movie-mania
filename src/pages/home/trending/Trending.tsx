/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState<any>("day");
  const { data, loading } = useFetch(`trending/movie/${trendingMovies}
  `);
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Trending Movies</span>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
