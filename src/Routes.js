import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Register from "./Pages/Register/Register"


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
