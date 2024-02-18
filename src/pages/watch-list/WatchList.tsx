/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";

import "./style.scss";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const WatchList = () => {
  const [loading, setLoading] = useState(false);
  const watcheListMovies = useSelector((state: any) => state.movie.watchList);
  console.log("Watch List Movies =>", watcheListMovies);
  return (
    <div>
      <h2>Hello</h2>
      <ContentWrapper>
        {loading && <Spinner initial={true} />}
        {!loading && (
          <>
            {watcheListMovies.length > 0 ? (
              <MovieCard data={watcheListMovies} />
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default WatchList;
