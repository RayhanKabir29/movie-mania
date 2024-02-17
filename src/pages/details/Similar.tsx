import Carousel from "../../components/carousel/Carousel";
import useFetch from "../../hooks/useFetch";

const Similar = ({ id }: any) => {
  const { data, loading } = useFetch(`movie/${id}/similar`);

  return (
    <Carousel title="Similar Movies" data={data?.results} loading={loading} />
  );
};

export default Similar;
