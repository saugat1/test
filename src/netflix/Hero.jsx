import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axiosConfig from "./axiosConfig";
import { NavLink } from "react-router-dom";

function Hero(props) {
  let [movie, setmovie] = useState([]);
  useEffect(() => {
    async function getMovies() {
      let data = await axiosConfig.get(props.url);

      setmovie(data.data.results);
    }
    getMovies();
    return false;
  }, []);
  let randomMovie = movie[Math.floor(Math.random() * movie.length)];
  return (
    <React.Fragment>
      <Nav />
      <div
        className="hero"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)),url(http://image.tmdb.org/t/p/original${randomMovie?.backdrop_path})`,
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundSize: "contain",
        }}
      >
        <h4>
          NETFLIX <span>ORIGINAL</span>
        </h4>
        <h3>{randomMovie?.title} </h3>
        <p>
          {randomMovie?.overview.length > 200
            ? randomMovie?.overview.substr(0, 200)
            : randomMovie?.overview}
        </p>
        <NavLink to={"/Watch/" + randomMovie?.id} className="btn">
          Play
        </NavLink>
      </div>
    </React.Fragment>
  );
}

export default Hero;
