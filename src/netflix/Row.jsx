import React, { useEffect, useState } from "react";
import axiosConfig from "./axiosConfig";
import { useHistory } from "react-router-dom";
let IMG_PATH = "http://image.tmdb.org/t/p/w500";

function Row(props) {
  let [movie, setmovie] = useState([]);
  let history = useHistory();
  useEffect(() => {
    async function getMovies() {
      let data = await axiosConfig.get(props.url);

      setmovie(data.data.results);
    }
    getMovies();
    return false;
  }, []);
  function watch(id) {
    history.push("/Watch/" + id);
  }
  return (
    <div className="row">
      <h2> {props.title} </h2>
      <div className="img">
        {movie.map(function (item, index) {
          return (
            <div
              key={index}
              style={{ height: props.big ? 230 : 120 }}
              data-id={item.id}
              onClick={() => {
                watch(item.id);
              }}
            >
              <img
                src={
                  props.big
                    ? IMG_PATH + item.poster_path
                    : IMG_PATH + item.backdrop_path
                }
                alt="df"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
