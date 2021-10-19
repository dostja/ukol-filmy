import React from "react";
import { render } from "react-dom";
import "./style.css";
import Logo from "./components/header/header";
import Movie from "./components/movie/movie";
import movies from "./movies";
import MovieList from "./components/movie-list/movie-list";
import Actor from "./components/Actor/actor";



const App = () => (
  <>
    <Logo />

    <MovieList filmy={movies} />
    <Actor/>
  
  </>
);

render(<App />, document.querySelector("#app"));
