import React, { useState } from "react";
import logo from "./img/logo.png";
import { NavLink, useHistory } from "react-router-dom";
import mike from "./img/mike.png";

function Nav() {
  let history = useHistory();
  let [searchExpand, setSearchExpand] = useState(false);
  function searchClicked() {
    setSearchExpand(!searchExpand);
  }
  let [val, setVal] = useState("");

  function changed(e) {
    setVal(e.target.value);
  }

  function formSubmited(e) {
    e.preventDefault();
    if (val === "") {
      return alert("movie name is required");
    } else {
      history.push("/Search/" + val);
    }
  }
  return (
    <div className="nav">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="logo" width="80" style={{ maxHeight: "10" }} />
        </NavLink>
      </div>
      <div className="menu">
        <ul>
          <li>
            <form onSubmit={formSubmited}>
              <input
                type="text"
                className={searchExpand ? "showSearch" : ""}
                name=""
                id="search"
                value={val}
                onChange={changed}
                placeholder="movie name"
              />
            </form>
          </li>
          <li>
            <i
              className="fa fa-search"
              aria-hidden="true"
              onClick={() => {
                searchClicked();
              }}
            ></i>
          </li>
          <li>
            <img src={mike} style={{ maxWidth: "35px" }} alt="sadf" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
