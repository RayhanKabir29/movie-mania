/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";

const WatchList = () => {
  const watcheListMovies = useSelector((state: any) => state.movie.watchList);
  console.log("Watch List =>", watcheListMovies);
  
  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">
            <h2>Movies</h2>
          </div>
        </div>

        <div className="content">
          {watcheListMovies?.length > 0 ? (
            watcheListMovies?.map((movieItem: any, index: any) => {
              return <MovieCard key={index} data={movieItem} />;
            })
          ) : (
            <span className="resultNotFound">Sorry, Results not found!</span>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default WatchList;
