import React from "react";
import { useMoviesContext } from "../context/contextBoilerPlate";

const DetailsPageCard = ({ data }) => {
  const { dispatch } = useMoviesContext();
  const {
    id,
    watchList,
    isStarred,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = data;
  return (
    <div className="shadow-lg flex border max-h-[80vh] min-h-[80vh] w-full relative py-4 px-4 gap-6 ">
      <img className="w-[40%] object-cover" src={imageURL} alt="" />
      <section className="flex flex-col gap-2 w-full px-4">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p>{summary}</p>
        <p>Year : {year}</p>
        <p>Genre : {genre?.join(",")}</p>
        <p>Rating : {rating}</p>
        <p>Director : {director}</p>
        <p>Writer : {writer}</p>
        <p>Cast : {cast?.join(",")}</p>
        <span className="flex w-full px-3 justify-between mt-1">
          <button
            onClick={() => dispatch({ type: "movieStarrer", payload: id })}
            className="p-2 rounded-md bg-stone-800 text-white font-bold"
          >
            {isStarred ? "Starred" : "Star"}
          </button>

          <button
            onClick={() => dispatch({ type: "movieWatchLister", payload: id })}
            className="p-2 rounded-md bg-stone-800 text-white font-bold"
          >
            {watchList ? "Added to watchlist" : "Add to watchlist"}
          </button>
        </span>
      </section>
    </div>
  );
};

export default DetailsPageCard;
