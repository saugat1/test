import React from "react";
import { FirstName, Age, Study } from "./App";
function ComC() {
  return (
    <>
      <FirstName.Consumer>
        {(name) => {
          return (
            <Age.Consumer>
              {function (age) {
                return (
                  <Study.Consumer>
                    {(std) => {
                      return (
                        <h1>
                          my name is {name}. and my age is {age}. I am studying{" "}
                          {std} now. thank you.
                        </h1>
                      );
                    }}
                  </Study.Consumer>
                );
              }}
            </Age.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
}

export default ComC;
