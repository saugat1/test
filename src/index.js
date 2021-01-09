import React from "react";
import ReactDOM from "react-dom";
// import "./bootstrap/css/bootstrap.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./new.css";
// import reportWebVitals from "./reportWebVitals";
import App from "./netflix/Ind";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter basename={window.location.pathname || ""}>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
