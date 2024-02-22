import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoad/Img";
import PosterFallback from "../../../assets/no-poster.png";
import "./style.scss";
import CircleRating from "../../../components/circleRating/CirlcleRating.js";
interface IDirectorName {
  name?: string[];
}
interface IWriter {
  name?: string[];
}
interface IProducerName {
  name?: string[];
}

const DetailsBanner = ({ crew }: any) => {
  const { id } = useParams<any>();
  const { data, loading } = useFetch(`movie/${id}`);
  const { url } = useSelector((state: any) => state.home);
  const director = crew?.filter(
    (filterCrew: any) => filterCrew.job === "Director"
  );
  const writer = crew?.filter(
    (filterCrew: any) =>
      filterCrew?.job === "Screenplay" ||
      filterCrew?.job === "Story" ||
      filterCrew?.job === "Writer"
  );
  const producer = crew?.filter((f: any) => f.job === "Producer");
  return (
    <div className="detailsBanner">
      {!loading ? (
        <div>
          <div className="backdrop-img">
            <Img src={url?.backdrop + data?.backdrop_path} />
            <div className="opacity-layer"></div>
          </div>
          <ContentWrapper>
            <div className="content">
              <div className="left">
                {data?.poster_path ? (
                  <Img
                    src={url?.backdrop + data?.poster_path}
                    className="posterImg"
                  />
                ) : (
                  <Img
                    src={url?.backdrop + PosterFallback}
                    className="posterImg"
                  />
                )}
              </div>
              <div className="right">
                <div className="title">
                  {`${data?.title} (${dayjs(data?.release_date).format(
                    "YYYY"
                  )})`}
                </div>
                <div className="subtitle">{data?.tagline}</div>
                <div className="subtitle">
                  {data?.genres?.map((genre: any) => {
                    return <p>{genre?.name}</p>;
                  })}
                </div>
                <div className="row">
                  <CircleRating rating={data?.vote_average.toFixed(1)} />
                </div>
                <div className="overview">
                  <div className="heading">Overview</div>
                  <div className="description">{data?.overview}</div>
                </div>
                {director?.length > 0 && (
                  <div className="info">
                    <span className="text-bold">
                      Director:{" "}
                      {director?.map(
                        (directorData: IDirectorName, i: number) => {
                          return (
                            <span key={i}>
                              {directorData?.name}{" "}
                              {director?.length - 1 !== i && ", "}
                            </span>
                          );
                        }
                      )}
                    </span>
                  </div>
                )}
                {writer?.length > 0 && (
                  <div className="info">
                    <span className="text-bold">
                      Writer:{" "}
                      {writer?.map((writerData: IWriter, i: number) => {
                        return (
                          <span key={i}>
                            {writerData?.name}{" "}
                            {writer?.length - 1 !== i && ", "}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                )}
                {producer?.length > 0 && (
                  <div className="info">
                    <span className="text-bold">
                      Producer:{" "}
                      {producer?.map(
                        (producerData: IProducerName, i: number) => {
                          return (
                            <span key={i}>
                              {producerData?.name}{" "}
                              {producer?.length - 1 !== i && ", "}
                            </span>
                          );
                        }
                      )}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </ContentWrapper>
        </div>
      ) : (
        <div className="detailsBannerSkeleton">
          <ContentWrapper>
            <div className="left skeleton"></div>
            <div className="right">
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
              <div className="row skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
