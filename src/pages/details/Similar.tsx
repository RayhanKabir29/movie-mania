import Carousel from "../../components/carousel/Carousel";
import useFetch from "../../hooks/useFetch";

const Similar = ({ id }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, loading, error } = useFetch(`movie/${id}/similar`);

  //   const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title="Similar Movies"
      data={data?.results}
      loading={loading}
      //endpoint={mediaType}
    />
  );
};

export default Similar;
