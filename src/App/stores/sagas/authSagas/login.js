// @ts-check
// @flow
import * as constants from "../../../appConstants/index";
import { LOGIN_SUBMIT } from "../../../../constants/index";
import { push, go } from "react-router-redux";
import { User } from "../../../../models/User";
//@ts-ignore
import { fork, put, call, takeEvery } from "redux-saga/effects";

/**
 *
 * @param {Login} Object  {email, password}
 */
const pushLoginData = (login: Object) => {
  const reqObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*"
    },
    body: `email=${login.email}&password=${login.password}`
  };
  return fetch(constants.API.concat("/login"), reqObj)
    .then(function(response) {
      return response.json();
    })
    .catch(function(err) {
      console.error("Error -> FetchLogin -> ", err);
    });
};

function* watchLogin(action) {
  try {
    let user = {
      email: action.payload.LOGIN_EMAIL_INPUT,
      password: action.payload.LOGIN_PASSWORD_INPUT
    };

    const response = yield call(pushLoginData, user);

    if (response) {
      if (response.result === false) {
        alert("Verify email");
        return;
      }
      // console.log("token ",response.token );

      yield put({
        type: constants.LOGIN_SUCCESS,
        payload: { user: response.user, token: response.token }
      });
      // yield put({type: constants.CLIENT_LIST , payload: response.clientList})
      yield put(push(`/human/${response.user.username}`));
      // yield put(go('dashboard'))
    } else {
      yield put({ type: constants.LOGIN_FAILURE });
    }
  } catch (err) {
    console.log("Error -> SIGNUP api call -> saga ->", err);
    // yield put({type: constants.LOGIN_FAILURE})
  }
}

function* login() {
  yield takeEvery(LOGIN_SUBMIT, watchLogin);
}

/**
 * @returns any return yield
 */
export default function* loginSaga(): any {
  yield [fork(login)];
}
