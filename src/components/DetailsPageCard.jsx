import React from "react";

const DetailsPageCard = ({ data }) => {
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
      </section>
    </div>
  );
};

export default DetailsPageCard;
