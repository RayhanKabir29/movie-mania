import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import "./style.scss";
import Img from "../lazyLoad/Img";
import CircleRating from "../circleRating/CirlcleRating";


const MovieCard = ({ data }: any) => {
  
  const { url } = useSelector((state: any) => state.home);
  const navigate = useNavigate();
  const posterUrl = data?.poster_path
    ? url.poster + data?.poster_path
    : PosterFallback;
  return (
    <>
      <div className="movieCard">
        <div
          className="posterBlock"
          onClick={() => navigate(`/movie/${data?.id}`)}
        >
          <Img className="posterImg" src={posterUrl} />
          <CircleRating rating={data?.vote_average?.toFixed(1)} />
        </div>
        <div
          className="textBlock"
          onClick={() => navigate(`/movie/${data?.id}`)}
        >
          <span className="title">{data.title}</span>
          <span className="date">
            {dayjs(data?.release_date).format("MMM D, YYYY")}
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
