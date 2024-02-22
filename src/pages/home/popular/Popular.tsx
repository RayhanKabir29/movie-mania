/* eslint-disable @typescript-eslint/no-unused-vars */

import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const { data, loading } = useFetch(`movie/popular`);

  return (
    <div className="carouselSection">
      <Carousel title="Popular Movies" data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
