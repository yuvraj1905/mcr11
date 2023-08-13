import React from "react";
import { useMoviesContext } from "../context/contextBoilerPlate";
import MovieCard from "../components/MovieCard";

const StarredPage = () => {
  const {
    state: { data },
  } = useMoviesContext();
  const starredListData = data.filter(({ isStarred }) => isStarred);
  return (
    <>
      {starredListData?.length > 0 ? (
        <section className="flex box-border w-full px-4 flex-wrap py-2 justify-between relative overflow-x-hidden">
          {starredListData?.map((movie) => (
            <MovieCard data={movie} starredCard key={movie?.id} />
          ))}{" "}
        </section>
      ) : (
        <h1 className="px-4 text-2xl font-semibold">
          No movies added to starred list
        </h1>
      )}
    </>
  );
};

export default StarredPage;
