import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Grid, Container, Button, Input, Icon, Checkbox, Select, Divider, Form } from "semantic-ui-react";
import { styles } from "./style";
import { SIGNUP_PASSWORD_VERIFY_INPUT, SIGNUP_PASSWORD_INPUT, SIGNUP_MALE, SIGNUP_FEMALE, SIGNUP_DOB, SIGNUP_SEX_CHOOSE, SIGNUP_EMAIL_INPUT, SIGN_UP_LAST_NAME_INPUT, SIGN_UP_FIRST_NAME_INPUT, GO_LOGIN } from "../../../../constants/index";
import { renderPasswordField, renderEmailField, renderTextField, renderDateField, renderRadio, renderNameField, renderSelectField, renderDatepicker } from "../../CommonComponents/formInput";

let SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  let today = new Date();
  let minDate = new Date(
    `${today.getFullYear() - 18}-${today.getMonth() + 1}-${today.getDate()}`
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit} style={styles.form}>
        <div style={{ textAlign: "left", marginTop: "40px" }}>
          <div style={styles.field}>
            <Field name={SIGNUP_EMAIL_INPUT} component={renderEmailField} />
          </div>
          <div style={styles.field}>
            <Field
              name={SIGN_UP_FIRST_NAME_INPUT}
              component={renderNameField}
              label="First Name"
            />
          </div>
          <div style={styles.field}>
            <Field
              name={SIGN_UP_LAST_NAME_INPUT}
              component={renderNameField}
              label="Last Name"
            />
          </div>
          <div style={styles.field}>
            <Field
              name={SIGNUP_PASSWORD_INPUT}
              component={renderPasswordField}
            />
          </div>
          <div style={styles.field}>
            <Field
              name={SIGNUP_PASSWORD_VERIFY_INPUT}
              component={renderPasswordField}
              label="Type Password again"
            />
          </div>
          <Divider />
          <div style={styles.field}>
            <Field
              name={SIGNUP_SEX_CHOOSE}
              options={[
                { key: "male", text: "Male", value: "MALE" },
                { key: "female", text: "Female", value: "FEMALE" }
              ]}
              label="Select Gender"
              component={renderSelectField}
            />
          </div>
          <div style={styles.field}>
            <p style={{ color:'lightgray'}}>Birthday</p>
            <Field
              name={SIGNUP_DOB}
              component={renderDatepicker}
              label="Date of Birth"
            />
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Button
            basic
            color="black"
            type="submit"
            fluid
            content="Join"
            style={styles.button}
          />
          <Button
            basic
            color="black"
            fluid
            disabled={submitting}
            style={styles.button}
          >
            <Icon name="facebook" />Join with Facebook
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default (SignUpForm = reduxForm({
  form: "SignUpForm" // a unique identifier for this form
  // validate
  // asyncValidate
})(SignUpForm));
