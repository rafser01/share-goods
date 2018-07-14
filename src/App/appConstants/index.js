import config from "../../config";
import { hashMap } from "mori";
function serverUrl() {
  if (config.isDev) {
    return "http://localhost:3333";
  } else {
    return "https://re-share-api.herokuapp.com";
  }
}

export const API = serverUrl();
//"https://re-share-api.herokuapp.com"; // "http://23.227.183.119:3333"; // "http://localhost:3333"; //"https://re-share-api.herokuapp.com";
export const SIGN_UP = "SIGN_UP";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GRAPHQL_AUTH_API = API.concat("/auth");
export const GRAPHCOOL_SUBSCRIBTION_API =
  "wss://subscriptions.graph.cool/v1/cjdalhcms18640130ujlrpoqc";
export const INITIAL_STATE = hashMap();
export const TYPE_LOG_OUT = "LOG_OUT";
export const TYPE_CHANGE_AVATAR = "CHANGE_AVATAR";
