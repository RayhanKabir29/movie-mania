import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getData } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Details from "./pages/details/Details";
import Movies from "./pages/movies/Movies";
import WatchList from "./pages/watch-list/WatchList";
import PageNotFoud from "./pages/404/PageNotFoud";
import Home from "./pages/home/Home";


function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { url } = useSelector((state: any) => state.home);
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = async () => {
    const res = await getData("configuration");
    const url = {
      backdrop: res?.images?.secure_base_url + "original",
      poster: res?.images?.secure_base_url + "original",
      profile: res?.images?.secure_base_url + "original",
    };
    dispatch(getApiConfiguration(url));
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Details />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="*" element={<PageNotFoud />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
