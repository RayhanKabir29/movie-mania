import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import "./style.scss";
import Img from "../lazyLoad/Img";
import CircleRating from "../circleRating/CirlcleRating";
import { addMovieToWatchList } from "../../store/movieWatchListSlice";
import { AiFillPlusCircle } from "react-icons/ai";

const MovieCard = ({ data }: any) => {
  const dispatch = useDispatch();
  const { url } = useSelector((state: any) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <>
      <div className="movieCard">
        <div
          className="posterBlock"
          onClick={() => navigate(`/movie/${data?.id}`)}
        >
          <Img className="posterImg" src={posterUrl} />
          <CircleRating rating={data.vote_average.toFixed(1)} />
        </div>
        <div
          className="textBlock"
          onClick={() => navigate(`/movie/${data?.id}`)}
        >
          <span className="title">{data.title || data.name}</span>
          <span className="date">
            {dayjs(data.release_date).format("MMM D, YYYY")}
          </span>
        </div>
        <span className="watchButton">
          <button
            className="watchList"
            onClick={() => dispatch(addMovieToWatchList(data))}
          >
            <AiFillPlusCircle />
          </button>
        </span>
      </div>
    </>
  );
};

export default MovieCard;
