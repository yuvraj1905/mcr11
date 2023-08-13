import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import Header from "./components/Header";
import WatchList from "./pages/WatchList";
import StarredPage from "./pages/StarredPage";

function App() {
  return (
    <div className=" flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="/starredMovies" element={<StarredPage />} />
        <Route path="/details/:mId" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
