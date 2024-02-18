import { useSelector } from "react-redux";

import "./style.scss";

const WatchList = () => {
  const watcheListMovies = useSelector((state: any) => state.movie.watchList);
  console.log("Watch List Movies =>", watcheListMovies);
  return (
    <div>
      <h2>This is Watch List</h2>
    </div>
  );
};

export default WatchList;
