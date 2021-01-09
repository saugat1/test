import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import axiosConfig from "./axiosConfig";
import Nav from "./Nav";
import Footer from "./Footer";
let MOVIE_DB_KEY = "25d9f5f783797f3abc4bccc9aaa3763a";

const Search = () => {
  let IMG_PATH = "http://image.tmdb.org/t/p/w300";
  const [result, setResult] = useState([
    { name: "The Lsat voyage of the Ghost Ship" },
    { name: "Nightmare Fall down in the Town(ep:1)" },
  ]);
  let { string } = useParams();
  useEffect(() => {
    let searchIt = async () => {
      let data = await axiosConfig.get(
        `search/movie?api_key=${MOVIE_DB_KEY}&query=${string}`
      );
      setResult(data.data.results);
    };
    searchIt();
    return false;
  }, [string]);
  let lastResult = result.filter((item) => item.poster_path !== null);
  return (
    <React.Fragment>
      <Nav />
      <div className="search">
        <h3 style={{ margin: "10px 0" }}>Your search : {string} </h3>
        <hr />
        {lastResult?.length > 0 ? (
          <div className="searchItems">
            {lastResult.map((item, index) => {
              return (
                <div className="item" key={index}>
                  {/* <img src="" alt=""/> */}
                  <NavLink to={"/Watch/" + item.id}>
                    <div>
                      <img src={`${IMG_PATH}${item.poster_path}`} alt="" />
                    </div>
                  </NavLink>
                  <div>
                    <NavLink to={"/Watch/" + item.id}>
                      <h2
                        className="title"
                        style={{
                          fontWeight: "600",
                          fontSize: "24px",
                          marginBottom: "14",
                        }}
                      >
                        {item.title}
                      </h2>
                    </NavLink>
                    <p>
                      {item.overview?.length > 200
                        ? item.overview.substr(0, 200)
                        : item.overview}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h3 style={{ margin: "70px 0", color: "#222", textAlign: "center" }}>
            No Movies Founded
          </h3>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Search;
