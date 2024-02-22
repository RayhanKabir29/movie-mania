/* eslint-disable @typescript-eslint/no-unused-vars */
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { getData } from "../../utils/api";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import dayjs from "dayjs";
const Movies = () => {
  const initialDate = new Date();
  const [refetch, setRefetch] = useState<boolean>(false);

  const formatedDate = dayjs(initialDate).format("YYYY-MM-DD");
  const prevFormatedDate = dayjs(initialDate)
    .subtract(60, "day")
    .format("YYYY-MM-DD");

  const [data, setData] = useState<any>([]);
  const [startDate, setStartDate] = useState<any>(prevFormatedDate);
  const [endDate, setEndDate] = useState<any>(formatedDate);
  const [pageNum, setPageNum] = useState<number>(1);
  const [nextPage, setNextPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  interface IItem {
    title: string;
    release_date: string;
    vote_average: number;
  }

  const fetchNextPageData = () => {
    getData(
      `discover/movie?page=${nextPage}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}`
    ).then((res: any) => {
      setData((prevData: any) => [...prevData, ...res.results]);
      if (res.page !== res.total_pages) {
        setNextPage(pageNum + 1);
        setPageNum(res.page);
        setRefetch(true);
      }
    });
  };

  const loadMoreData = () => {
    fetchNextPageData();
  };

  useEffect(() => {
    fetchNextPageData();
  }, [startDate, endDate]);

  const handleSelect = (date: any) => {
    setData([]);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setPageNum(1);
    setNextPage(1);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const refOne = useRef<any>(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e: any) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e: any) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };
  return (
    <div className="explorePage">
      <ContentWrapper>
        <div className="calendarWrap">
          <input
            value={`${dayjs(startDate).format("YYYY-MM-DD")} To ${dayjs(
              endDate
            ).format("YYYY-MM-DD")}`}
            readOnly
            className="inputBox"
            onClick={() => setOpen((open) => !open)}
          />
          <div ref={refOne}>
            {open && (
              <DateRangePicker
                onChange={handleSelect}
                editableDateInputs={true}
                moveRangeOnFirstSelection={false}
                ranges={[selectionRange]}
                direction="horizontal"
                className="calendarElement"
              />
            )}
          </div>
        </div>
        <div className="filters"></div>

        {!loading && (
          <>
            {data?.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={data?.length}
                next={loadMoreData}
                hasMore={refetch}
                loader={<Spinner />}
              >
                {data?.map((item: IItem, index: number) => {
                  return <MovieCard key={index} data={item} />;
                })}
              </InfiniteScroll>
            ) : (
              <span> {loading && <Spinner initial={true} />}</span>
            )}
          </>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Movies;
