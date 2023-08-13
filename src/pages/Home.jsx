import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../context/contextBoilerPlate";
import MovieCard from "../components/MovieCard";
import { v4 as uuid } from "uuid";

const Home = () => {
  const {
    state: { genre, data, releaseYear, rating },
    dispatch,
    renderingData,
  } = useMoviesContext();
  const allGenres = [
    "All",
    ...new Set([...data?.map(({ genre }) => genre).flat()]),
  ];
  const years = ["All", ...new Set([...data?.map(({ year }) => year)])];

  const ratings = ["All", ...new Set([...data?.map(({ rating }) => rating)])];

  const [showModal, setShowModal] = useState(false);
  const [newMovieName, setNewMovieName] = useState("");
  const [newMovieDirector, setNewMovieDirector] = useState("");
  const [newMovieWriter, setNewMovieWriter] = useState("");
  const [newMovieGenre, setNewMovieGenre] = useState("");
  const [newMovieCast, setNewMovieCast] = useState("");
  const [newMovieSummary, setNewMovieSummary] = useState("");
  const [newMovieImageUrl, setNewMovieImageUrl] = useState("");
  const [newMovieYear, setNewMovieYear] = useState("");
  const [newMovieRating, setNewMovieRating] = useState("");

  const cancelHandler = () => {
    setShowModal(false);
    setNewMovieName("");
    setNewMovieDirector("");
    setNewMovieWriter("");
    setNewMovieGenre("");
    setNewMovieCast("");
    setNewMovieSummary("");
    setNewMovieImageUrl("");
    setNewMovieYear("");
    setNewMovieRating("");
  };

  const newMovieAddHandler = () => {
    if (
      newMovieName &&
      newMovieDirector &&
      newMovieWriter &&
      newMovieGenre &&
      newMovieCast &&
      newMovieSummary &&
      newMovieImageUrl &&
      newMovieRating &&
      newMovieYear
    ) {
      dispatch({
        type: "newMovieAdder",
        payload: {
          id: uuid(),
          watchList: false,
          isStarred: false,
          title: newMovieName,
          year: newMovieYear,
          genre: newMovieGenre.split(","),
          rating: newMovieRating,
          director: newMovieDirector,
          writer: newMovieWriter,
          cast: newMovieCast.split(","),
          summary: newMovieSummary,
          imageURL: newMovieImageUrl,
        },
      });
      cancelHandler();
      setShowModal(false);
    } else {
      alert("Please fill all the fields CORRECTLY");
    }
  };

  return (
    <>
      <div
        className={`${
          showModal ? "blurBg" : ""
        } box-border flex flex-col w-full relative py-4 px-4 gap-4`}
      >
        <section className="flex box-border justify-between items-start w-full  py-2 relative">
          <h2 className="font-bold">Movies</h2>
          <span className="flex">
            <p>Select genre: </p>
            <select
              className="bg-stone-600 border-none outline-none p-[2px] text-white ml-1 rounded-lg cursor-pointer"
              value={genre}
              onChange={(e) =>
                dispatch({ type: "genreSetter", payload: e.target.value })
              }
            >
              {allGenres?.map((title) => (
                <option className="cursor-pointer" value={title}>
                  {title}
                </option>
              ))}
            </select>
          </span>
          <span className="flex">
            <p>Select ReleaseYear: </p>
            <select
              className="bg-stone-600 border-none outline-none p-[2px] text-white ml-1 rounded-lg cursor-pointer"
              value={releaseYear}
              onChange={(e) =>
                dispatch({ type: "releaseYearSetter", payload: e.target.value })
              }
            >
              {years?.map((title) => (
                <option value={title} className="cursor-pointer">
                  {title}
                </option>
              ))}
            </select>
          </span>
          <span className="flex">
            <p>Select Rating: </p>
            <select
              className="bg-stone-600 border-none outline-none p-[2px] text-white ml-1 rounded-lg cursor-pointer"
              value={rating}
              onChange={(e) =>
                dispatch({ type: "ratingSetter", payload: e.target.value })
              }
            >
              {ratings?.map((title) => (
                <option className="cursor-pointer" value={title}>
                  {title}
                </option>
              ))}
            </select>
          </span>

          <button
            onClick={() => setShowModal(true)}
            className="bg-stone-900 text-white font-semibold py-1 px-3 rounded-md hover:bg-stone-800"
          >
            Add a movie
          </button>
        </section>
        {renderingData?.length > 0 ? (
          <section className="flex box-border w-full flex-wrap py-2 justify-between relative overflow-x-hidden">
            {renderingData?.map((movie) => (
              <MovieCard data={movie} key={movie?.id} />
            ))}{" "}
          </section>
        ) : (
          <h1 className="font-bold text-2xl">
            No movies with that combination of filters
          </h1>
        )}
      </div>
      <section
        style={{ display: !showModal ? "none" : "" }}
        className="p-4 bg-stone-800 shadow-md flex flex-col text-white gap-2 w-[40%] fixed rounded-md modal"
      >
        <h1 className="font-bold text-2xl">Add new movie</h1>
        <span className="w-full flex flex-col gap-1 items-start">
          <p>Title of movie: </p>
          <input
            className="w-full overflow-hidden text-black"
            type="text"
            value={newMovieName}
            onChange={(e) => setNewMovieName(e.target.value)}
          />
        </span>
        <span className="w-full flex flex-col gap-1 items-start">
          <p>Directed by: </p>
          <input
            className="w-full overflow-hidden text-black"
            type="text"
            value={newMovieDirector}
            onChange={(e) => setNewMovieDirector(e.target.value)}
          />
        </span>

        <span className="w-full flex flex-col gap-1 items-start">
          <p>Written by: </p>
          <input
            className="w-full overflow-hidden text-black"
            type="text"
            value={newMovieWriter}
            onChange={(e) => setNewMovieWriter(e.target.value)}
          />
        </span>

        <span className="w-full flex flex-col gap-1 items-start">
          <p>Genre (You can enter multiple genre, separated by comma):</p>
          <input
            className="w-full overflow-hidden text-black"
            type="text"
            value={newMovieGenre}
            onChange={(e) => setNewMovieGenre(e.target.value)}
          />
        </span>
        <span className="w-full flex flex-col gap-1 items-start">
          <p>Cast (You can enter multiple names, comma separated) : </p>
          <input
            className="w-full overflow-hidden text-black"
            type="text"
            value={newMovieCast}
            onChange={(e) => setNewMovieCast(e.target.value)}
          />
        </span>
        <span className="w-full flex flex-col gap-1 items-start">
          <p>Year of release: </p>
          <input
            className="w-full overflow-hidden text-black"
            type="number"
            value={newMovieYear}
            onChange={(e) => setNewMovieYear(e.target.value)}
          />
        </span>
        <span className="w-full flex flex-col gap-1 items-start">
          <p>Rating: </p>
          <input
            className="w-full overflow-hidden text-black"
            type="number"
            value={newMovieRating}
            onChange={(e) => setNewMovieRating(e.target.value)}
          />
        </span>

        <span className="w-full relative flex flex-col gap-1 items-start">
          <p>Summary: </p>
          <input
            className="w-full overflow-hidden text-black"
            type="text"
            value={newMovieSummary}
            onChange={(e) => setNewMovieSummary(e.target.value)}
          />
        </span>

        <span className="w-full relative flex flex-col gap-1 items-start">
          <p>Image Url: </p>
          <input
            className="w-full overflow-hidden text-black"
            type="text"
            value={newMovieImageUrl}
            onChange={(e) => setNewMovieImageUrl(e.target.value)}
          />
        </span>
        <span className="w-full flex justify-evenly mt-1">
          <button
            onClick={newMovieAddHandler}
            className="bg-white text-black py-1 px-2 rounded-md"
          >
            Add
          </button>
          <button
            onClick={cancelHandler}
            className="bg-white text-black py-1 px-2 rounded-md"
          >
            Cancel
          </button>
        </span>
      </section>
    </>
  );
};

export default Home;
