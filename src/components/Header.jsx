import React from "react";
import { NavLink } from "react-router-dom";
import { useMoviesContext } from "../context/contextBoilerPlate";

const Header = () => {
  const {
    state: { searchInput },
    dispatch,
  } = useMoviesContext();
  const navlinkStyler = ({ isActive }) => ({
    fontWeight: isActive && 900,
  });
  return (
    <div className="flex justify-between items-start w-full bg-stone-900 text-white px-4 py-3 relative">
      <h2 className="font-bold">IMDB</h2>
      <input
        type="text"
        value={searchInput}
        onChange={(e) =>
          dispatch({ type: "searchInputSetter", payload: e.target.value })
        }
        className="w-[30%] px-2 text-black py-1 border-none outline-none rounded-md"
        placeholder="Search movies by title, cast or director"
      />
      <section className="flex gap-6 items-center justify-between">
        <NavLink style={navlinkStyler} to="/">
          Movies
        </NavLink>
        <NavLink style={navlinkStyler} to="/watchList">
          Watch List
        </NavLink>
        <NavLink style={navlinkStyler} to="/starredMovies">
          Starred Movies
        </NavLink>
      </section>
    </div>
  );
};

export default Header;
