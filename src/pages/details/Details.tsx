import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./details-banner/DetailsBanner";
import "./style.scss";
import Cast from "./cast/Cast";
import Similar from "./Similar";

const Details = () => {
  const { id } = useParams<any>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: credits, loading } = useFetch(`movie/${id}/credits`);
  return (
    <div>
      <DetailsBanner crew={credits?.crew} />
      <Cast data={credits?.cast} loading={loading} />
      <Similar id={id} />
    </div>
  );
};

export default Details;
