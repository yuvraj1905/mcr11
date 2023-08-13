import React from "react";
import { useMoviesContext } from "../context/contextBoilerPlate";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ data, watchlistCard, starredCard }) => {
  const { dispatch } = useMoviesContext();
  const { id, watchList, isStarred, title, summary, imageURL } = data;
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col min-w-[22vw] gap-1 max-w-[22vw] rounded-md min-h-[60vh] max-h-[60vh] border shadow-md mb-8 items-center ">
      <img
        onClick={() => navigate(`/details/${id}`)}
        src={imageURL}
        className="w-[100%] h-[62%] cursor-pointer object-cover rounded-t-md"
        alt=""
      />
      <h2
        onClick={() => navigate(`/details/${id}`)}
        className="cursor-pointer font-bold text-center text-2xl"
      >
        {title}
      </h2>
      <p className="text-sm font-semibold px-3 line-clamp-3">{summary}</p>
      <span className="flex w-full px-3 justify-between mt-1">
        <button
          onClick={() =>
            starredCard
              ? dispatch({ type: "removeFromStarred", payload: id })
              : dispatch({ type: "movieStarrer", payload: id })
          }
          className="p-2 rounded-md bg-stone-800 text-white font-bold"
        >
          {starredCard ? "Unstar" : isStarred ? "Starred" : "Star"}
        </button>

        <button
          onClick={() =>
            watchlistCard
              ? dispatch({ type: "removeFromWatchList", payload: id })
              : dispatch({ type: "movieWatchLister", payload: id })
          }
          className="p-2 rounded-md bg-stone-800 text-white font-bold"
        >
          {watchlistCard
            ? "Remove from watchlist"
            : watchList
            ? "Added to watchlist"
            : "Add to watchlist"}
        </button>
      </span>
    </div>
  );
};

export default MovieCard;
