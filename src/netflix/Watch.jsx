import React, { useState, useEffect } from "react";
import Row from "./Row";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Footer from "./Footer";

function Watch() {
  let { id } = useParams();
  let [movie, umovie] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=25d9f5f783797f3abc4bccc9aaa3763a`;
    async function getMovies() {
      let data = await Axios.get(url);
      console.log(data);
      umovie(data.data.results);
    }
    getMovies();
    return false;
  }, [id]);

  return (
    <React.Fragment>
      <Nav />
      <div className="watch">
        <h2 className="now">Now Playing</h2>

        <iframe
          frameborder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          className="myVideo"
          type="text/html"
          title="lads"
          allowFullScreen={true}
          src={`https://www.youtube.com/embed/${movie[0]?.key}?autoplay=1`}
        ></iframe>
        <hr />
        <h3>{movie[0]?.name}</h3>
        <p>
          Description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nihil ipsam fuga cupiditate?
        </p>
        <br />
        <br />
        <Row
          title="Popular Movies"
          url="trending/all/week?api_key=25d9f5f783797f3abc4bccc9aaa3763a&with_network=213"
        />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Watch;
