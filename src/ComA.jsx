import React, { useContext } from "react";
// import ComB from "./ComB";
import { FirstName, Age, Study } from "./App.js";

function ComA() {
  let fname = useContext(FirstName);
  let age = useContext(Age);
  let std = useContext(Study);
  return (
    <>
      <h2>
        My name is {fname}. my age is {age}. my study is {std}.
      </h2>
    </>
  );
}

export default ComA;
