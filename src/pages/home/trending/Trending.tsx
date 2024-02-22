import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
  const { data, loading } = useFetch(`movie/now_playing`);
  return (
    <div className="carouselSection">
      <Carousel title="Now Playing" data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
