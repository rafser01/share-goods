// @ts-check
// @flow
import * as constants from "../../../appConstants/index";
import { SIGNUP_SUBMIT } from "../../../../constants/index";
import { push, go } from "react-router-redux";
import { User } from "../../../../models/User";
import { addHuman } from "../graphQL/authGraphql";
import graphCoolClient from "../graphCoolClient";
//@ts-ignore
import { fork, put, call, takeEvery } from "redux-saga/effects";

/**
 *
 * @param {User} user  object
 */
const pushSignUpData = (user: User) => {
  return graphCoolClient.mutate({
    mutation: addHuman,
    variables: {
      firstName: user.firstName,
      lastName: user.lastName,
      sex: user.sex,
      dob: user.dob,
      email: user.email,
      password: user.password,
      verified: user.verified
    }
  });
};

function* watchSignUp(action) {
  console.log("action ", action);

  try {
    let user = new User(
      action.payload.SIGN_UP_FIRST_NAME_INPUT,
      action.payload.SIGN_UP_LAST_NAME_INPUT,
      action.payload.SIGNUP_EMAIL_INPUT,
      action.payload.SIGNUP_SEX_CHOOSE,
      action.payload.SIGNUP_DOB,
      action.payload.SIGNUP_PASSWORD_INPUT,
      false
    );
    const response = yield call(pushSignUpData, user);
    console.log("in signup response ", response);
    if (response.data.addHuman.verified) {
      // alaready verified
      alert("User Already exist");
      // yield put({type: constants.SIGNUP_SUCCESS , payload: response.data.addUser})
      // yield put({type: constants.CLIENT_LIST , payload: response.clientList})
      yield put({ type: constants.SIGNUP_FAILURE });
      // yield put(go('dashboard'))
    } else {
      alert("Verify Email");
      yield put(push("/login"));
    }
  } catch (err) {
    console.log("Error -> SIGNUP api call -> saga ->", err);
    // yield put({type: constants.LOGIN_FAILURE})
  }
}

function* signUp() {
  yield takeEvery(SIGNUP_SUBMIT, watchSignUp);
}

/**
 * @returns any return yield
 */
export default function* signUpSaga(): any {
  yield [fork(signUp)];
}
