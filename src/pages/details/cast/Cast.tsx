import "./style.scss";
import { useSelector } from "react-redux";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import avatar from "../../../assets/avatar.png";
import Img from "../../../components/lazyLoad/Img";

interface ICast {
  profile_path?: string;
  id?: number;
  name?: string;
  character?: string;
}

const Cast = ({ data, loading }: any) => {
  const { url } = useSelector((state: any) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item: ICast) => {
              const castImg = item?.profile_path
                ? url?.profile + item?.profile_path
                : avatar;
              return (
                <div key={item?.id} className="listItem">
                  <div className="profileImg">
                    <Img src={castImg} />
                  </div>
                  <div className="name">{item?.name}</div>
                  <div className="character">{item?.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
