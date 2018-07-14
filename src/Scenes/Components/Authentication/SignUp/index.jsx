// @ts-ignore
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { shouldComponentUpdate } from "react-addons-pure-render-mixin";
import { Button, Header, Image, Grid, Container } from "semantic-ui-react";

import { SIGNUP_SUBMIT, SIGNUP_SEX_CHOOSE } from "../../../../constants/index";
import { styles } from "./style";
import SignUpForm from "./SignUpForm";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate;
    this.submitAction = this.submitAction.bind(this);
  }

  submitAction(values) {
    this.props[SIGNUP_SUBMIT](values);
  }

  render() {
    return (
      <Container>
        <Grid columns={1} divided="vertically" centered textAlign="center">
          <Grid.Row style={{ marginTop: "50px" }}>
            <Header as="h2">
              <Image size="medium" alt="logo" src={require('../../../../assets/img/logo_reshare.png')} /> re : share
            </Header>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header as="h2" textAlign="center">
                Join
              </Header>
              <div style={{ textAlign: "center" }}>
                Join a community of over 2 million shares
              </div>
              <SignUpForm onSubmit={values => this.submitAction(values)} />
              <div style={{ textAlign: "center" }}>
                <Button
                  basic
                  style={{ boxShadow: "none" }}
                  onClick={() => this.props.router.push("/connect")}
                >
                  Already have an account?<br />Connect
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
    SIGNUP_SUBMIT: values => ({ type: SIGNUP_SUBMIT, payload: values })
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
