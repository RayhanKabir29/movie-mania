/* eslint-disable no-unsafe-optional-chaining */
import "./style.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { getData } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";
import { addMovieToWatchList } from "../../store/movieWatchListSlice";
import { AiFillPlusCircle } from "react-icons/ai";

const Movies = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchInitialData = () => {
    setLoading(true);
    getData(`discover/movie`).then((res: any) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchInitialData();
  }, []);
  const fetchNextPageData = () => {
    getData(`discover/movie`).then((res: any) => {
      if (data?.results) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="pageHeader">
          <div className="pageTitle">
            <h2>Movies</h2>
          </div>
        </div>
        {loading && <Spinner initial={true} />}
        {!loading && (
          <>
            {data?.results?.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item: any, index: any) => {
                  return (
                    <>
                      <MovieCard key={index} data={item} />
                      <span className="watchButton">
                        <button
                          className="watchList"
                          onClick={() => dispatch(addMovieToWatchList(item))}
                        >
                          <AiFillPlusCircle />
                        </button>
                      </span>
                    </>
                  );
                })}
              </InfiniteScroll>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Movies;
