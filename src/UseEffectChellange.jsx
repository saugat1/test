import React, { useState, useEffect } from "react";

function UseEffectChellange() {
  let [num, unum] = useState(0);
  function a() {
    unum(num + 1);
  }
  useEffect(function () {
    document.title = "hello bro this is useEffect " + num;
  });

  return (
    <React.Fragment>
      <h2> use effect chellange i changed after dom render {num}</h2>
      <button onClick={a}>Clicked </button>
    </React.Fragment>
  );
}

export default UseEffectChellange;
