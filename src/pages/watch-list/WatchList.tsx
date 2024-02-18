/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import CircleRating from "../../components/circleRating/CirlcleRating";
import dayjs from "dayjs";
import Img from "../../components/lazyLoad/Img";
import PosterFallback from "../../assets/no-poster.png";

const WatchList = () => {
  const watcheListMovies = useSelector((state: any) => state.movie.watchList);
  const { url } = useSelector((state: any) => state.home);
  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">
            <h2>Movies</h2>
          </div>
        </div>

        {watcheListMovies?.length > 0 ? (
          watcheListMovies?.map((movieItem: any, index: any) => {
            const posterUrl = movieItem.poster_path
              ? url.poster + movieItem.poster_path
              : PosterFallback;
            return (
              <div className="watchlist-movie">
                <div className="movieCard" key={index}>
                  <div className="posterBlock">
                    <Img className="posterImg" src={posterUrl} />
                    <CircleRating rating={movieItem?.vote_average.toFixed(1)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{movieItem?.title}</span>
                    <span className="date">
                      {dayjs(movieItem?.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <span className="resultNotFound">Sorry, Results not found!</span>
        )}
      </ContentWrapper>
    </div>
  );
};

export default WatchList;
