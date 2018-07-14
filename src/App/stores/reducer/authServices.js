// @ts-ignore
// @flow
import { get, assoc, dissoc } from "mori";
import * as constants from "../../../constants";
import { push, go } from "react-router-redux";
// const changeRoute = require('../../../client').changeRoute;

// export const setUserData = (state, payload) => {
//   return assoc(state, 'user', payload.user, 'token', 'JWT '.concat(payload.token))
// }
// export const loginFailure = (state) => {
//   return constants.INITIAL_STATE;
// }
// export const logout = (state) => {
//   return constants.INITIAL_STATE;
// }

/**
 *
 * @param {Object} state Reducer Object
 * @param {Object} payload User Object
 */
export const SIGNUP_SUBMIT = (state: any, payload: Object) => {
  // console.log("reducer ", payload);
  return state;
};

/**
 *
 * @param {Object} state  Reducer Object
 */
export const SIGNUP_FAILURE = state => {
  alert("User not created");
  return state;
};
/**
 *
 * @param {Object} state
 * @param {Object} response  return from graphcool success response
 */
export const SIGNUP_SUCCESS = (state, response) => {
  return assoc(state, "user", response);
};

export const LOGIN_SUCCESS = (state, response) => {
  return assoc(state, "user", response.user, "token", response.token);
};

export const LOG_OUT = (state: any) => {
  return dissoc(state, "user", "token");
};

export const CHANGE_AVATAR = (state: any, payload: { imageString: any }) => {
  let reader = new FileReader();
  reader.readAsDataURL(payload.imageString);
  console.log(" size ", payload.imageString.size);
  reader.onload = () => {
    console.log(reader.result.split(",")[1], " ok ");
  };
  reader.onerror = e => {
    console.error("err ", e);
  };
  return state;
};
