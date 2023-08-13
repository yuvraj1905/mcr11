import React from "react";
import { useMoviesContext } from "../context/contextBoilerPlate";
import MovieCard from "../components/MovieCard";

const WatchList = () => {
  const {
    state: { data },
  } = useMoviesContext();
  const watchListData = data.filter(({ watchList }) => watchList);
  return (
    <>
      {watchListData?.length > 0 ? (
        <section className="flex box-border w-full px-4 flex-wrap py-2 justify-between relative overflow-x-hidden">
          {watchListData?.map((movie) => (
            <MovieCard data={movie} watchlistCard key={movie?.id} />
          ))}{" "}
        </section>
      ) : (
        <h1 className="px-4 text-2xl font-semibold">
          No movies added to watch list
        </h1>
      )}
    </>
  );
};

export default WatchList;
