// @flow
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { UserImage } from "./UserImage";
import { UserInfo } from "./UserInfo";
import { get } from "mori";
import { TYPE_CHANGE_AVATAR } from "../../../../App/appConstants/index";
import type { props } from "./Type";
import { shouldComponentUpdate } from "react-addons-pure-render-mixin";

export class Profile extends Component {
  constructor(props: props) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate;
    let userName = this.props.routeParams.user;
  }
  render() {
    var _that = this;
    return (
      <Grid container padded={true} divided="vertically">
        <Grid.Row>
          <Grid.Column width={6}>
            {this.props.user ? (
              <UserImage
                avatar={_that.props.user.avatar}
                changeAvatar={this.props.changeAvatar}
              />
            ) : null}
          </Grid.Column>
          <Grid.Column width={10}>
            <UserInfo user={this.props.user} />
          </Grid.Column>
        </Grid.Row>
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
    changeAvatar: imageBase64 => ({
      type: TYPE_CHANGE_AVATAR,
      payload: {
        imageString: imageBase64
      }
    })
  };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
