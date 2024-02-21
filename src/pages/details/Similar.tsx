import Carousel from "../../components/carousel/Carousel";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import useFetch from "../../hooks/useFetch";
import "./style.scss"
const Similar = ({ id }: any) => {
  const { data, loading } = useFetch(`movie/${id}/similar`);
  console.log("Data Similar =>", data?.results);

  return (
    <>
      {data?.results?.length > 0 ? (
        <Carousel
          title="Similar Movies"
          data={data?.results}
          loading={loading}
        />
      ) : (
        <ContentWrapper>
          <div className="similar-data">
            <h2>Opps! Seems Like No Similar Movie For This!!!!</h2>
          </div>
        </ContentWrapper>
      )}
    </>
  );
};

export default Similar;
