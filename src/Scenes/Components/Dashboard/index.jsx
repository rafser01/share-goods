// @flow

import React, { Component } from "react";
import { avatatOptions } from "../../../constants/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid, Image, Header, Dropdown } from "semantic-ui-react";
import { get } from "mori";
import logo from "../../../assets/img/logo_reshare.png";
import { TYPE_LOG_OUT } from "../../../App/appConstants";
import { shouldComponentUpdate } from "react-addons-pure-render-mixin";
export class Dashboard extends Component {
  constructor(props: any) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate;
  }

  render() {
    var _that = this;

    return (
      <Grid
        container
        padded={true}
        divided="vertically"
        style={{ marginTop: "3%" }}
      >
        <Grid.Row>
          <Grid.Column width={8} floated="right">
            <Image
              src={logo}
              size="mini"
              alt="logo"
              style={{ float: "right" }}
            />
          </Grid.Column>
          <Grid.Column width={4} floated="left">
            <Header
              size="medium"
              style={{ marginTop: "3%", marginLeft: "-24px" }}
            >
              re:share
            </Header>
          </Grid.Column>
          <Grid.Column width={4} floated="right">
            <Header as="h5">
              <Header.Content>
                {_that.props.user !== "undefined" &&
                _that.props.user !== null ? (
                  <Image
                    src={`data:image/gif;base64,${_that.props.user.avatar}`}
                    avatar
                    style={{ width: "1em", height: "1em" }}
                  />
                ) : null}
                <Dropdown
                  inline
                  options={avatatOptions}
                  defaultValue={avatatOptions[1].value}
                  onChange={(event, data) => {
                    if (data.value === "disconnect") {
                      _that.props.LOG_OUT();
                      _that.props.router.push("/login");
                    } else if (data.value === "profile") {
                      _that.props.router.push(
                        `/human/${_that.props.user.username}`
                      );
                    }
                  }}
                />
              </Header.Content>
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>{_that.props.children}</Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: get(state.reducer.authReducer, "user")
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    LOG_OUT: () => ({ type: TYPE_LOG_OUT })
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
