import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMoviesContext } from "../context/contextBoilerPlate";
import MovieCard from "../components/MovieCard";
import DetailsPageCard from "../components/DetailsPageCard";

const DetailsPage = () => {
  const { mId } = useParams();
  const [obj, setObj] = useState({});
  const {
    state: { data },
  } = useMoviesContext();
  useEffect(() => {
    const movieFound = data?.find(({ id }) => id == mId);
    setObj({ ...movieFound });
  }, [data]);
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col w-full items-start relative py-4 px-4 gap-4 ">
      {obj && (
        <button
          onClick={() => navigate("/")}
          className="bg-stone-800 text-white hover:bg-stone-700 px-2 py-1 rounded-sm"
        >
          Go back
        </button>
      )}
      {obj && <DetailsPageCard data={obj} />}
    </div>
  );
};

export default DetailsPage;
