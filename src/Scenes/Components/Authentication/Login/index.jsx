// @ts-ignore
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, reduxForm } from "redux-form";
import {
  Grid,
  Container,
  Divider,
  Header,
  Image,
  Button
} from "semantic-ui-react";
// import { shouldComponentUpdate } from "react-addons-pure-render-mixin";
//import FailureNotification from './failureNotification';

import { LOGIN_SUBMIT } from "../../../../constants/index";
import { styles } from "./style";
import LoginForm from "./LoginForm";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  submitAction(values) {
    this.props[LOGIN_SUBMIT](values);
  }

  render() {
    return (
      <Container>
        <Grid columns={1} divided="vertically" centered>
          <Grid.Row style={{ marginTop: "50px" }}>
            <Header as="h2">
              <Image size="medium" alt="logo" src={require('../../../../assets/img/logo_reshare.png')} /> re : share
            </Header>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Connect
              </Header>
              <LoginForm onSubmit={values => this.submitAction(values)} />
              <div style={{ textAlign: "center" }}>
                <Button
                  basic
                  style={{ boxShadow: "none" }}
                  onClick={() => this.props.router.push("/join")}
                >
                  Don't have a account?<br />Join
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  // console.log('State ---',state);
  return { state: state };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    LOGIN_SUBMIT: values => ({ type: LOGIN_SUBMIT, payload: values })
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
