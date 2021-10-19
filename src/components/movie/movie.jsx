import React from "react";

import Actor from "./../Actor/actor";

const Movie = (props) => {
  return (
    <>
      <div className="box">
        <div className="props">
          <div className="props__left">
            <img
              className="props__img"
              src={props.poster}
              alt="poster"
              className="img"
            />
          </div>
          <div className="props__right">
            <div className="props__title">{props.title}</div>
            <div className="props__info">
              <div className="props__year">
                <p className="props__cathegory">Year</p>
                <div className="props__prop">{props.year}</div>{" "}
              </div>
              <div className="props__rating">
                <p className="props__cathegory">Rating</p>
                <div className="props__prop">{props.rating}</div>
              </div>
              <div className="props__director">
                <p className="props__cathegory">Director</p>
                <div className="props__prop">{props.director}</div>
              </div>
              <div className="props__genre">
                <p className="props__cathegory">Genre</p>
                <div className="props__prop">{props.genre}</div>
              </div>

              <div className="props__genre">
                <p className="props__cathegory">Cast</p>
                <div className="props__prop">{props.cast}</div>
              </div>
              <div className="props__actors">
                {" "}
                {props.actors.map((persona) => (
                  <Actor name={persona.name} as={persona.as} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
