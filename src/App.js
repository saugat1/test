import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Web from "./websitehomepage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function Apps() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Web />
      </BrowserRouter>
    </React.Fragment>
  );
}
export default Apps;

/* <FirstName.Provider value={"nir bahadur rana magar"}>
  <Age.Provider value={21}>
    <Study.Provider value={"BBS 1st years."}>
      <ComC></ComC>
      {/* component  */
//     </Study.Provider>
//   </Age.Provider>
// </FirstName.Provider>;
