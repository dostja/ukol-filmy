import React from "react";

import Actor from "./../Actor/actor";

const Movie = (props) => {
  return (
    <>
    <div>
    {props.title}</div>
    <div>{props.year}</div>
    <div>{props.rating}</div>
    <div>{props.director}</div>
    <div>{props.genre}</div>
    <img src={props.poster} alt="poster" className="img" />
      
 
    </>
  );
};

export default Movie;

