import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { movies } from "../data";

const moviesContext = createContext();

export const MoviesContextComponent = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    data: localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [],
    genre: "All",
    releaseYear: "All",
    rating: "All",
    searchInput: "",
  });

  useEffect(() => {
    if (state?.data.length < 1) {
      localStorage.setItem("data", JSON.stringify(movies));
      dispatch({ type: "dataSetter" });
    } else {
      localStorage.setItem("data", JSON.stringify(state?.data));
    }
  }, [state?.data]);

  let renderingData = [];
  (function () {
    const { data, genre, releaseYear, rating, searchInput } = state;

    renderingData =
      searchInput !== ""
        ? data.filter(
            ({ title, cast, director }) =>
              title.toLowerCase().includes(searchInput.toLowerCase()) ||
              director?.toLowerCase().includes(searchInput.toLowerCase()) ||
              cast?.find((name) =>
                name.toLowerCase().includes(searchInput.toLowerCase())
              )
          )
        : [...data];

    renderingData =
      genre !== "All"
        ? renderingData?.filter((item) => item?.genre?.includes(genre))
        : [...renderingData];

    renderingData =
      releaseYear !== "All"
        ? renderingData?.filter(({ year }) => year == releaseYear)
        : [...renderingData];

    renderingData =
      rating !== "All"
        ? renderingData?.filter((item) => item?.rating == rating)
        : [...renderingData];
  })();

  return (
    <moviesContext.Provider value={{ state, dispatch, renderingData }}>
      {children}
    </moviesContext.Provider>
  );
};

export const useMoviesContext = () => useContext(moviesContext);
