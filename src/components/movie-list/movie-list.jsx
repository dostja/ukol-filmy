import React from "react";
import Movie from "../movie/movie";

const MovieList = (props) => {
  return (
    <>
      {props.filmy.map((film) => (
        <Movie
          key={film.id}
          title={film.title}
          poster={film.poster}
          year={film.year}
          rating={film.rating}
          director={film.director}
          genre={film.genre}
          actors={film.cast}
        />
      ))}
    </>
  );
};

export default MovieList;
