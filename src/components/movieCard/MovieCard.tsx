import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import "./style.scss";
import Img from "../lazyLoad/Img";
import CircleRating from "../circleRating/CirlcleRating";

const MovieCard = ({ data }: any) => {
  const { url } = useSelector((state: any) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/movie/${data?.id}`)}
    >
      <div className="posterBlock">
        <Img className="posterImg" src={posterUrl} />
        <CircleRating rating={data.vote_average.toFixed(1)} />
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;