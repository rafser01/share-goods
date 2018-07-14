import {
  SIGNUP_PASSWORD_INPUT,
  SIGNUP_PASSWORD_VERIFY_INPUT,
  SIGNUP_DOB,
  SIGNUP_SEX_CHOOSE,
  SIGNUP_EMAIL_INPUT,
  SIGN_UP_LAST_NAME_INPUT,
  SIGN_UP_FIRST_NAME_INPUT
} from "../../../../constants";

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    // simulate server latency
    if (["foo@foo.com", "bar@bar.com"].includes(values.email)) {
      // eslint-disable-next-line no-throw-literal
      throw { email: "Email already Exists" };
    }
  });
};

export const validate = values => {
  const errors = {};
  const requiredFields = [
    SIGNUP_DOB,
    SIGNUP_SEX_CHOOSE,
    SIGNUP_EMAIL_INPUT,
    SIGN_UP_LAST_NAME_INPUT,
    SIGN_UP_FIRST_NAME_INPUT
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (
    values[SIGNUP_EMAIL_INPUT] &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values[SIGNUP_EMAIL_INPUT]
    )
  ) {
    errors[SIGNUP_EMAIL_INPUT] = "Invalid email address";
  }
  if (values[SIGNUP_PASSWORD_INPUT] != values[SIGNUP_PASSWORD_VERIFY_INPUT]) {
    errors[SIGNUP_PASSWORD_VERIFY_INPUT] = "Password does not match";
  }
  return errors;
};

export default asyncValidate;
