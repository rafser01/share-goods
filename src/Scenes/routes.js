import React from "react";
import { Route, IndexRoute, Redirect, withRouter } from "react-router";

import App from "./Components/App";
import Login from "./Components/Authentication/Login/index.jsx";
import SignUpContainer from "./Components/Authentication/SignUp/index";
import Dashboard from "./Components/Dashboard/index";
import UserList from "./Components/Dashboard/UserList/index";
import Profile from "./Components/Dashboard/Profile/index";
const auth = require("../index").auth;
export { history } from "../index";

export default (
  <Route path="/" name="Home" component={App}>
    <Route path="connect" name="Connect" component={Login} />
    <Route path="join" name="Join" component={SignUpContainer} />
    <Route  name="Dashboard" component={Dashboard}>
      <IndexRoute component={UserList} />
      <Route path="human/:user" name="profile" component={Profile} />
    </Route>
    <Redirect from="login" to="connect" />
    <Redirect from="signUp" to="join" />
  </Route>
);

//
{
  /* <Route path="dashboard" name="Dashboard" component={Dashboard}   > //onEnter={auth} -> auth check and dispatch to route
  <IndexRoute component={License} />
  <Route path="tokenGen" name="TokenGen" component={TokenGen}  ></Route>
  <Route path="license" name="license" component={License}  ></Route>
</Route> */
}
// <Route path="login" name="Login" component={Login}  ></Route>
