/* eslint-disable @typescript-eslint/no-unused-vars */
import { useSelector } from "react-redux";
import "./style.scss";
import Spinner from "../../components/spinner/Spinner";
import { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import CircleRating from "../../components/circleRating/CirlcleRating";
import dayjs from "dayjs";

const WatchList = () => {
  const [loading, setLoading] = useState(false);
  const watcheListMovies = useSelector((state: any) => state.movie.watchList);
  console.log("Watch List Movies =>", watcheListMovies);
  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">
            <h2>Movies</h2>
          </div>
        </div>
        {watcheListMovies?.length > 0
          ? watcheListMovies?.map((item: any) => {
              return console.log("Item =>", item);
            })
          : ""}
      </ContentWrapper>
    </div>
  );
};

export default WatchList;
//   {watcheListMovies?.length > 0 ? (
//   watcheListMovies?.map((movieItem: any, index: any) => {
//     console.log("Movie Item", movieItem?.title);

//     <div className="movieCard" key={index}>
//       <p>{movieItem?.title}</p>
//       <div className="posterBlock">
//         {/* <Img className="posterImg" src={posterUrl} /> */}
//         <CircleRating rating={movieItem?.vote_average.toFixed(1)} />
//       </div>
//       <div className="textBlock">
//         <span className="title">{movieItem?.title}</span>
//         <span className="date">
//           {dayjs(movieItem?.release_date).format("MMM D, YYYY")}
//         </span>
//       </div>
//     </div>;
//   })
// ) : (
//   <span className="resultNotFound">Sorry, Results not found!</span>
// )}
