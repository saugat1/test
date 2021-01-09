import React, { useEffect, useState } from "react";

function UseEffect() {
  const [n, un] = useState(1);
  const [no, uno] = useState(1);
  useEffect(
    function () {
      alert("hello i am called using useeffect react hook.");
    },
    [n] //it allow to define when to call the function after update some in this component. eg when update of n call this not update in "no" state.
  );

  return (
    <React.Fragment>
      <h2>Hello this is useEffect Hook of REact. </h2>
      <button
        onClick={function () {
          un(n + 1);
        }}
      >
        Cliked {n} times
      </button>
      <button
        onClick={function () {
          uno(no + 1);
        }}
      >
        Cliked {no} times
      </button>
    </React.Fragment>
  );
}

export default UseEffect;
