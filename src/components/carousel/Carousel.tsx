import { FC } from "react";
import { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import PosterFallback from "../../assets/no-poster.png";
import "./style.scss";
import Img from "../lazyLoad/Img";
import CircleRating from "../circleRating/CirlcleRating";

interface ICarousel {
  data: any;
  loading: any;
}

const Carousel: FC<ICarousel> = ({ data, loading }) => {
  const carouselContainer = useRef<any>();
  const { url } = useSelector((state: any) => state.home);
  const navigate = useNavigate();

  const navigation = (dir: any) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);
    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock skeleton">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel">
      <ContentWrapper>
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="carouselItems" ref={carouselContainer}>
            {data?.map((item: any) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() => navigate(`${item?.media_type}/${item?.id}`)}
                >
                  <div className="posterBlock">
                    <Img src={posterUrl} />
                    <CircleRating rating={item?.vote_average} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item?.title}</span>
                    <span className="date">
                      {dayjs(item?.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
