import * as appConstants from "../../appConstants/index";
import * as authServices from "./authServices";

/**
 *
 * @param {Object} state Reducer Object
 * @param {Object} action {type , payload : Object}
 */
export default function(state = appConstants.INITIAL_STATE, action): Object {
  switch (action.type) {
    case appConstants.SIGNUP_FAILURE:
      return authServices[appConstants.SIGNUP_FAILURE](state);
    case appConstants.SIGNUP_SUCCESS:
      return authServices[appConstants.SIGNUP_SUCCESS](state, action.payload);
    case appConstants.LOGIN_SUCCESS:
      return authServices[appConstants.LOGIN_SUCCESS](state, action.payload);
    case appConstants.TYPE_LOG_OUT:
      return authServices[appConstants.TYPE_LOG_OUT](state);
    case appConstants.TYPE_CHANGE_AVATAR:
      return authServices[appConstants.TYPE_CHANGE_AVATAR](
        state,
        action.payload
      );
    default:
      return state;
  }
  return state;
}
