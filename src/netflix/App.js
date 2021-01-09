import React from "react";
import Main from "./Main";
import Hero from "./Hero";
import Footer from "./Footer";

let MOVIE_DB_KEY = "25d9f5f783797f3abc4bccc9aaa3763a";
let movieTypes = {
  originals: `discover/tv?api_key=${MOVIE_DB_KEY}&language=en-US`,
  trending: `trending/all/week?api_key=${MOVIE_DB_KEY}&with_network=213`,
  toprated: `movie/top_rated?api_key=${MOVIE_DB_KEY}&language=en-US`,
  action: `discover/movie?api_key=${MOVIE_DB_KEY}&with_generes=28`,
  comedy: `discover/movie?api_key=${MOVIE_DB_KEY}&with_generes=35`,
  horror: `discover/movie?api_key=${MOVIE_DB_KEY}&with_generes=27`,
  romantic: `discover/movie?api_key=${MOVIE_DB_KEY}&with_generes=10749`,
  documentries: `discover/movie?api_key=${MOVIE_DB_KEY}&with_generes=99`,
  search: `search/company?api_key=${MOVIE_DB_KEY}&query=querymovietitle`,
};

function App() {
  return (
    <div className="container">
      <Hero url={movieTypes.trending} />
      <Main types={movieTypes} />
      <Footer />
    </div>
  );
}

export default App;
