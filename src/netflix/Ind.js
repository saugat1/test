import React from "react";
import Watch from "./Watch";
import App from "./App";
import { Switch, Route } from "react-router-dom";
import Search from "./Search";
import "./css/style.css";

const Ind = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/Watch/:id" component={Watch} />
      <Route exact path="/Search/:string" component={Search} />
    </Switch>
  );
};

export default Ind;
