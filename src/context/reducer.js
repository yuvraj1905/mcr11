import { movies } from "../data";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "dataSetter": {
      return { ...state, data: [...movies] };
    }

    case "genreSetter": {
      return { ...state, genre: payload };
    }

    case "releaseYearSetter": {
      return { ...state, releaseYear: payload };
    }

    case "ratingSetter": {
      return { ...state, rating: payload };
    }

    case "movieStarrer": {
      const updatedData = state?.data?.map((item) =>
        item?.id === payload
          ? { ...item, isStarred: !item.isStarred }
          : { ...item }
      );
      return { ...state, data: [...updatedData] };
    }

    case "removeFromStarred": {
      const updatedData = state?.data?.map((item) =>
        item?.id === payload ? { ...item, isStarred: false } : { ...item }
      );
      return { ...state, data: [...updatedData] };
    }

    case "movieWatchLister": {
      const updatedData = state?.data?.map((item) =>
        item?.id === payload
          ? { ...item, watchList: !item.watchList }
          : { ...item }
      );
      return { ...state, data: [...updatedData] };
    }

    case "removeFromWatchList": {
      const updatedData = state?.data?.map((item) =>
        item?.id === payload ? { ...item, watchList: false } : { ...item }
      );
      return { ...state, data: [...updatedData] };
    }

    case "searchInputSetter": {
      return { ...state, searchInput: payload };
    }

    case "newMovieAdder": {
      return { ...state, data: [...state.data, { ...payload }] };
    }

    default: {
      return { ...state };
    }
  }
};
