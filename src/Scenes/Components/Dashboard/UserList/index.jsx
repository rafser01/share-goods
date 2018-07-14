// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import { get } from "mori";
import { shouldComponentUpdate } from "react-addons-pure-render-mixin";
export class UserList extends Component {
  constructor(props: any) {
    super(props);
    this.shouldComponentUpdate = shouldComponentUpdate;
  }

  render() {
    var _that = this;

    return (
      <Grid container padded={true} divided="vertically">
        <Grid.Row>
          <Grid.Column width={16}>
            <p>UserList</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: ""
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
