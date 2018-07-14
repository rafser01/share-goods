import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import {
  Grid,
  Container,
  Button,
  Input,
  Icon,
  Checkbox,
  Form
} from "semantic-ui-react";
import { styles } from "./style";
import {
  LOGIN_EMAIL_INPUT,
  LOGIN_PASSWORD_INPUT
} from "../../../../constants/index";
import {
  renderPasswordField,
  renderEmailField
} from "../../CommonComponents/formInput";

let LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <Container>
      <Form onSubmit={handleSubmit} style={styles.form}>
        <div style={{ textAlign: "left", marginTop: "40px" }}>
          <div style={styles.field}>
            <Field name={LOGIN_EMAIL_INPUT} component={renderEmailField} />
          </div>
          <div style={styles.field}>
            <Field
              name={LOGIN_PASSWORD_INPUT}
              component={renderPasswordField}
            />
          </div>
          <Checkbox label={{ children: "Remember me" }} />
        </div>

        <div style={{ marginTop: "40px" }}>
          <Button
            basic
            color="black"
            type="submit"
            fluid
            content="Connect"
            style={styles.button}
          />
          <Button
            basic
            color="black"
            fluid
            disabled={submitting}
            style={styles.button}
          >
            <Icon name="facebook" />Connect with Facebook
          </Button>
        </div>
      </Form>
    </Container>

    // <FailureNotification failAttemps={this.props.failAttemps} />
  );
};

export default (LoginForm = reduxForm({
  form: "loginForm"
  // validate
})(LoginForm));
