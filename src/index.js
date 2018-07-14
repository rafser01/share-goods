import { syncHistoryWithStore, push } from "react-router-redux";
import { Router, hashHistory } from "react-router";
import { Provider } from "react-redux";
import React from "react";
import { render } from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
// import root from "./utils/windowOrGlobal";
// require("dotenv").config();

import routes from "./Scenes/routes";
import configureStore from "./config/store";
import config from "./config";

import "regenerator-runtime/runtime";
//Browser initialState from localstorage
// let preloadedState = JSON.parse(root.initialState);
if (config.isDev) {
  //console.log('Root -> ',root.localStorage); //debug
}

// Setup store
const store = configureStore({}, "client");

//Setup routing
export const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById("root")
);

export const auth = () => {
  console.log("--------");
};

store.dispatch(push("login"));
registerServiceWorker();
/**
 * 
// "webpack": "^1.7.3",
// "webpack-dev-server": "^1.7.0"
 */
