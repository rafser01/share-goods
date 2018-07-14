// @flow
import React from "react";
import { Grid, Image, Button, Icon, Input, Label } from "semantic-ui-react";
export class UserImage extends React.Component {
  render() {
    const { avatar, changeAvatar } = this.props;
    return (
      <Grid>
        <Grid.Row centered columns={1}>
          <Grid.Column>
            {avatar !== null && avatar !== "undefined" ? (
              <Grid>
                <Grid.Row centered>
                  <Image
                    src={`data:image/png;base64,${avatar}`}
                    style={{ width: "21em", height: "20em" }}
                  />
                </Grid.Row>
              </Grid>
            ) : null}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
